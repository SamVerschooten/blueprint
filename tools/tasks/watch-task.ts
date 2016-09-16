export class WatchTask {

    static run(location:string, callback):void {

        let watch = require('watch');

        watch.watchTree(location, function (f, curr, prev) {
            if (typeof f == "object" && prev === null && curr === null) {
                console.log('started watching for file changes on (' + location + ')...');
            } else if (prev === null) {
                console.log('.. triggered by new file');
            } else if (curr.nlink === 0) {
                console.log('.. triggered by file removal');
            } else {
                console.log('.. triggered by file change');
            }

            callback();
        });
    }
}