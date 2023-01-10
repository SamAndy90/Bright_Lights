// Основний модуль
import gulp from "gulp";
// Імпорт шляхів
import { path } from "./gulp/config/path.js";
// Імпорт спільних плагінів
import { plugins } from "./gulp/config/plugins.js";

// Передаєм значення в глобальну змінну
global.app = {
    isBuild: process.argv.includes('--build'),
    isDev: !process.argv.includes('--build'),
    path: path,
    gulp: gulp,
    plugins: plugins,
}


// Імпорт задач
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
import { audio } from "./gulp/tasks/audio.js";
import { otfToTtf, ttfToWoff, fontsStyle } from "./gulp/tasks/fonts.js";
import { svgSprive } from "./gulp/tasks/svgSprive.js";
import { zip } from "./gulp/tasks/zip.js";
import { ftp } from "./gulp/tasks/ftp.js";


// Наблюдач за змінами в файлах
function watcher() {
    gulp.watch(path.watch.audio, audio);
    gulp.watch(path.watch.html, html); //gulp.series(html, ftp) - замінити 'html' на цей код (щоб файли зразу вигружались на сервер)
    gulp.watch(path.watch.scss, scss); //gulp.series(scss, ftp) 
    gulp.watch(path.watch.js, js); //gulp.series(js, ftp)
    gulp.watch(path.watch.images, images); //gulp.series(images, ftp), наприклад: //gulp.watch(path.watch.images, gulp.series(images, ftp))
}

export { svgSprive };

// Послідовна обробка шрифтів
const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);

// Основні задачі
const mainTasks = gulp.series(fonts, gulp.parallel(html, scss, js, images, audio));

// Побудова сценаріїв виконання задач
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);
const deployZIP = gulp.series(reset, mainTasks, zip);
const deployFTP = gulp.series(reset, mainTasks, ftp);

// Експорт сценаріїв
export { dev }
export { build }
export { deployZIP }
export { deployFTP }

// Виконання сценарію за замовчуванням
gulp.task('default', dev);