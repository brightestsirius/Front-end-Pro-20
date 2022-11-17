const {src, dest, series, watch} = require(`gulp`),
    fileinclude = require('gulp-file-include'),
    del = require(`del`),
    sass = require('gulp-dart-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    mode = require('gulp-mode')(),
    browserSync = require('browser-sync').create();

const clear = async () => del([`./dist`]);

const html = async () => {
    src(`./src/pages/*.html`)
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(dest(`./dist`))
        .pipe(browserSync.stream());
}

const css = async () => {
    src(`./src/css/style.sass`)
        .pipe(mode.development(sourcemaps.init()))
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
			cascade: false
		}))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(mode.development(sourcemaps.write()))
        .pipe(dest(`./dist/css`))
        .pipe(browserSync.stream());
}

const js = async () => {
    src(`./src/js/*.js`)
        .pipe(uglify())
        .pipe(dest(`./dist/js`));
}

const server = () => {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });

    watch("./src/**/*.html", html);
    watch("./src/css/*.sass", css);
};

const FILES_TRANSFER = [
    {
        from: `./node_modules/bootstrap/dist/css/bootstrap.min.css`,
        to: `./dist/css`
    },
    {
        from: `./node_modules/bootstrap/dist/css/bootstrap.min.css.map`,
        to: `./dist/css`
    },
    {
        from: `./node_modules/bootstrap/dist/js/bootstrap.min.js`,
        to: `./dist/js`
    }
]

const fileTransfer = async () => {
    FILES_TRANSFER
        .forEach(({from, to}) => {
            src(from)
                .pipe(dest(to))
        })
}

exports.html = html;
exports.css = css;
exports.js = js;
exports.clear = clear;
exports.server = server;

exports.default = series(clear, fileTransfer, html, css, js, server);