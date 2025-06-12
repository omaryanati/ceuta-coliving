// check-css.js
const fs = require('fs');
const path = require('path');

const SRC_DIR = path.resolve(__dirname, 'pages');
const STYLES_DIR = path.resolve(__dirname, 'styles');

function getAllFiles(dir, ext, files = []) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      getAllFiles(fullPath, ext, files);
    } else if (file.endsWith(ext)) {
      files.push(fullPath);
    }
  });
  return files;
}

// Lee los módulos CSS
function readCssClasses(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  // Busca clases simples: .nombreClase { ...
  const classNames = [...content.matchAll(/\.(\w+)[\s{]/g)].map(m => m[1]);
  return classNames;
}

function check() {
  const tsxFiles = getAllFiles(SRC_DIR, '.tsx');
  const moduleCssFiles = getAllFiles(STYLES_DIR, '.module.css');

  // 1) Verifica import de globals.css solo en _app.tsx
  let globalsImportLocations = [];
  tsxFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    if (content.includes("import '../styles/globals.css'")) {
      globalsImportLocations.push(path.relative(__dirname, file));
    }
  });
  console.log('== Globals.css import locations:');
  console.log(globalsImportLocations.join('\n') || 'No imports found!');

  if (globalsImportLocations.length > 1 || (globalsImportLocations.length === 1 && !globalsImportLocations[0].endsWith('_app.tsx'))) {
    console.warn('⚠️ globals.css debería importarse SOLO en pages/_app.tsx');
  } else {
    console.log('✅ globals.css import correcto');
  }

  // 2) Para cada .tsx, detecta imports de .module.css y revisa clases usadas
  tsxFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');

    // Encuentra imports CSS Modules
    const cssModuleImports = [...content.matchAll(/import\s+(\w+)\s+from\s+'..\/styles\/(\w+\.module\.css)'/g)];
    if (cssModuleImports.length === 0) return;

    cssModuleImports.forEach(match => {
      const varName = match[1];
      const cssFileName = match[2];
      const cssFilePath = path.join(STYLES_DIR, cssFileName);
      const cssClasses = readCssClasses(cssFilePath);

      // Buscar clases usadas en JSX (className={styles.clase})
      const regexClassUsage = new RegExp(`${varName}\\.([\\w-]+)`, 'g');
      const usedClasses = [...content.matchAll(regexClassUsage)].map(m => m[1]);
      usedClasses.forEach(c => {
        if (!cssClasses.includes(c)) {
          console.warn(`⚠️ Clase '${c}' usada en ${path.relative(__dirname, file)} no encontrada en ${cssFileName}`);
        }
      });
    });
  });

  // 3) Detectar .module.css sin import
  const importedCssFiles = new Set();
  tsxFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const imports = [...content.matchAll(/import\s+\w+\s+from\s+'..\/styles\/(\w+\.module\.css)'/g)];
    imports.forEach(m => importedCssFiles.add(m[1]));
  });

  moduleCssFiles.forEach(f => {
    const base = path.basename(f);
    if (!importedCssFiles.has(base)) {
      console.warn(`⚠️ Archivo CSS Module no importado: ${base}`);
    }
  });

  console.log('== Fin del chequeo');
}

check();
