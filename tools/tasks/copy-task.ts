export class CopyTask {

    //path: last item holds destination other items dictate source
    static run(path:string[], levels:number):Promise<any> {

        return new Promise((resolve, reject)=> {

                //using copyfiles to make the script windows friendly.
                let copyfiles = require('copyfiles');

                console.log('copying ...');

                //copy and drop x levels of directory hierarchy: src/main/server
                copyfiles(path, levels, (err) => {
                        if (err) {
                            console.log('error', err);
                            reject(err);
                        }
                        else {
                            resolve();
                        }
                    }
                );
            }
        );
    }
}