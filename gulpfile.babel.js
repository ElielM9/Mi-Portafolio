const { src, dest, watch, parallel } = require(`gulp`);

//HTML
const htmlMin = require("gulp-htmlmin");

//CSS
const sass = require(`gulp-sass`)(require(`sass`));
const plumber = require(`gulp-plumber`);
const autoprefixer = require(`autoprefixer`);
const cssnano = require(`cssnano`);
const postcss = require(`gulp-postcss`);
const sourcemaps = require(`gulp-sourcemaps`);

//IMAGENES
const cache = require(`gulp-cache`);
const imgMin = require(`gulp-imagemin`);
const webp = require(`gulp-webp`);
const avif = require(`gulp-avif`);

//JAVASCRIPT
const babel = require(`gulp-babel`);
const terser = require(`gulp-terser-js`);

//CONCAT
const concat = require(`gulp-concat`);

function html(done) {
  const options = {
    collapseWhitespace: true,
    removeComments: true,
  };

  src("src/views/*.html")
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(htmlMin((options)))
    .pipe(sourcemaps.write(`.`))
    .pipe(dest("public/"));

  done();
}

function css(done) {
  src(`src/scss/**/*.scss`) //Identificar el archivo sass a compilar
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(sass()) //Compilar
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write(`.`))
    .pipe(dest(`public/styles`)); //Almacenar en el disco duro

  done();
}

function img(done) {
  const options = {
    optimizationLevel: 3,
  };

  src(`src/assets/*/**/*.{png,jpg,jpeg}`)
    .pipe(cache(imgMin(options)))
    .pipe(dest(`public/assets/`));

  done();
}

function vWebp(done) {
  const options = {
    quality: 50,
  };

  src(`src/assets/img/**/*.{png,jpg}`)
    .pipe(webp(options))
    .pipe(dest(`public/assets/img`));

  done();
}

function vAvif(done) {
  const options = {
    quality: 50,
  };

  src(`src/assets/img/**/*.{png,jpg}`)
    .pipe(avif(options))
    .pipe(dest(`public/assets/img`));

  done();
}

function javaScript(done) {
  src(`src/js/**/*.js`)
    .pipe(sourcemaps.init())
    .pipe(concat("scripts-min.js"))
    .pipe(babel())
    .pipe(terser())
    .pipe(sourcemaps.write())
    .pipe(dest(`public/js`));

  done();
}

function dev(done) {
  watch(`src/scss/**/*.scss`, css);
  watch(`src/js/**/*.js`, javaScript);

  done();
}


exports.html = html
exports.css = css;
exports.js = javaScript;
exports.img = img;
exports.vWebp = vWebp;
exports.vAvif = vAvif;
exports.dev = parallel(html, img, vWebp, vAvif, javaScript, dev);
