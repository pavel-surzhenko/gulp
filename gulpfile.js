//подключение модулей
import gulp from 'gulp';
//import less from 'gulp-less';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';
import GulpCleanCss from 'gulp-clean-css';
import ts from 'gulp-typescript'
import babel from 'gulp-babel';
import uglify from 'gulp-uglify';
import concat from 'gulp-concat';
import sourcemaps from 'gulp-sourcemaps';
import autoprefixer from 'gulp-autoprefixer';
import imagemin from 'gulp-imagemin';
import htmlmin from 'gulp-htmlmin';
import newer from 'gulp-newer';
import browserSync from 'browser-sync';
import {deleteAsync} from 'del';



//пути к файлам
const paths = {
    html: {  
        src: 'src/*.html', 
        dest: 'dist'  
    },
    styles: {  //стили
        src: ['src/styles/**/*.less', 'src/styles/**/*.sass', 'src/styles/**/*.scss'], //путь для рабочего файла с папки срс
        dest: 'dist/css/'  //путь куда сохраняем результат
    },
    scripts: {  //скрипты
        src: ['src/scripts/**/*.js', 'src/scripts/**/*.ts'],  //путь для рабочего файла с папки срс
        dest: 'dist/js/'  //путь куда сохраняем результат
    },
    images: {
        src: 'src/img/**',
        dest: 'dist/img'
    }
}

//очистка папки 
function clean() {
    return deleteAsync(['dist/*', '!dist/img'])
}

//Минимизация Html
function html() {
    return gulp.src(paths.html.src)
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest(paths.html.dest))
    .pipe(browserSync.stream())
}

//стили
const sass = gulpSass(dartSass);
function styles() {
    return gulp.src(paths.styles.src)
        .pipe(sourcemaps.init())
        //.pipe(less())  
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
			cascade: false
		}))
        .pipe(GulpCleanCss({
            level: 2
        }))
        .pipe(rename({
            basename: 'main',
            suffix: '.min'
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(browserSync.stream())
}

//скрипты
function scripts() {
    return gulp.src(paths.scripts.src)
    .pipe(sourcemaps.init())
    .pipe(ts({  //ts
        noImplicitAny: true,
        outFile: 'main.min.js'
    }))
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(concat('main.min.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.scripts.dest))
    .pipe(browserSync.stream())

}

//Сжатие картинок
function img() {
    return gulp.src(paths.images.src)
    .pipe(newer(paths.images.dest))
    .pipe(imagemin({
        progressive: true,
        optimizationLevel: 5
    }))
    .pipe(gulp.dest(paths.images.dest))
}

//отслеживание изменения в файлах и запуск лайв сервера
function watch() {
    browserSync.init({
        server: {
            baseDir: "./dist/"
        }
    })
    gulp.watch(paths.html.dest).on('change', browserSync.reload)
    gulp.watch(paths.html.src, html)
    gulp.watch(paths.styles.src, styles)
    gulp.watch(paths.scripts.src, scripts)
    gulp.watch(paths.images.src, img)
}

//для ручного запуска
export { clean as clean}
export { img as img}
export { html as html}
export { styles as styles}
export { scripts as scripts}
export { watch as watch}
export { build as build}
export { build as default}

//конечный билд
const build = gulp.series(clean, html, gulp.parallel(styles, scripts, img), watch)

