//подключение модулей
import gulp from 'gulp';
import less from 'gulp-less';
import {deleteAsync} from 'del';
import rename from 'gulp-rename';
import GulpCleanCss from 'gulp-clean-css';
import babel from 'gulp-babel';
import uglify from 'gulp-uglify';
import concat from 'gulp-concat';


//пути к файлам
const paths = {
    styles: {  //стили
        src: 'src/styles/**/*.less', //путь для рабочего файла с папки срс
        dest: 'dist/css/'  //путь куда сохраняем результат
    },
    scripts: {  //скрипты
        src: 'src/scripts/**/*.js',  //путь для рабочего файла с папки срс
        dest: 'dist/js/'  //путь куда сохраняем результат
    },
}

//очистка папки 
function clean() {
    return deleteAsync(['dist'])
}

//стили
function styles() {
    return gulp.src(paths.styles.src)
        .pipe(less())
        .pipe(GulpCleanCss())
        .pipe(rename({
            basename: 'main',
            suffix: '.min'
        }))
        .pipe(gulp.dest(paths.styles.dest))
}

//скрипты
function scripts() {
    return gulp.src(paths.scripts.src, {
        sourcemaps: true
    })
    .pipe(babel())
    .pipe(uglify())
    .pipe(concat('main.min.js'))
    .pipe(gulp.dest(paths.scripts.dest))

}

function watch() {
    gulp.watch(paths.styles.src, styles)
    gulp.watch(paths.scripts.src, scripts)
}


const build = gulp.series(clean, gulp.parallel(styles, scripts), watch)

export { clean as clean}
export { styles as styles}
export { scripts as scripts}
export { watch as watch}
export { build as build}
export { build as default}
