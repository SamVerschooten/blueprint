export class RimRafTask {

    static run(path:string):Promise<any> {

        return new Promise((resolve, reject) => {
            console.log('cleaning location: ' + path);

            let rimraf = require('rimraf');
            rimraf(path, (err) => {
                if (err) {
                    console.log('error', err);
                    reject(err);
                }
                else {
                    resolve();
                }
            });
        });
    }

}