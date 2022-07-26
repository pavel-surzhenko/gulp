# Простая сборка Gulp

## Структура каталогов для размещения файлов стилей и скриптов:
>./src/styles/\*\*/\*.less  
>./src/scripts/\*\*/\*.js

## 
Минимизация HTML  
Компиляция препроцессоров LESS, SASS  
Минимизация CSS  
Автоматическое добавление префиксов CSS  
Транспиляция языка Type Script  
Преобразования кода ECMAScript 2015 + в обратно совместимую версию JavaScript с помощью Babel
Минимизация JavaScript
Объединение нескольких файлов JavaScript в один  
Сжатие изображений  
Отслеживание новых изображений, которые еще не были сжаты  
Отслеживание изменений в файлах и автоматический запуск повторной обработки  
Генерация sourcemaps  
Отображение размеров файлов в терминале  
Локальный сервер с автоматическим обновлением страницы при изменении файлов  

## Инструкция:
1.Скачать все файлы в любою директорию  
2.Ввести в терминале команду: npm i  
3.Выполнить команду gulp(запуск таска по default)  

## Установленные NPM пакеты:
[gulp](https://www.npmjs.com/package/gulp) Сборщик Gulp  
[gulp-htmlmin](https://www.npmjs.com/package/gulp-htmlmin) Минификация HTML файлов  
[gulp-sass](https://www.npmjs.com/package/gulp-sass) Компиляция Sass и Scss файлов    
[gulp-less](https://www.npmjs.com/package/gulp-less) Компиляция Less файлов  
[gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer) Сборщик Gulp   
[gulp-uglify](https://www.npmjs.com/package/gulp-uglify) Сжатие и оптимизация JS  
[gulp-typescript](https://www.npmjs.com/package/gulp-typescript) Преобразует Type Script в Java Script   
[gulp-babel](https://www.npmjs.com/package/gulp-babel) Компиляция JS для старых браузеров  
[gulp-concat](https://www.npmjs.com/package/gulp-concat) объединение файлов в один  
[gulp-rename](https://www.npmjs.com/package/gulp-rename) Изменение имени файлов  
[gulp-clean-css](https://www.npmjs.com/package/gulp-clean-css) Минимизация css файлов  
[del](https://www.npmjs.com/package/del) Удаления каталогов и файлов  
[gulp-sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps) Карта строк кода для инструментов разработчика  
[gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin) Сжатие изображений  
[gulp-newer](https://www.npmjs.com/package/gulp-newer) Отслеживание только новых файлов  
[browser-sync](https://www.npmjs.com/package/browser-sync) Автоматическое обновление сайта при изменении файлов  