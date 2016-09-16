import {CopyTask} from './tasks/copy-task';

class Builder {

    private SERVER_PATH: string[];
    private COPY_PATH:string[];
    private LEVEL:number;

    constructor() {
        this.COPY_PATH = [
            'src/assets/**/*.otf',
            'src/assets/**/*.eot',
            'src/assets/**/*.svg',
            'src/assets/**/*.ttf',
            'src/assets/**/*.woff',
            'src/assets/**/*.woff2',
            'src/assets/**/*.gif',
            'src/assets/**/*.png',
            'src/assets/**/*.jpg',
            'dist/'];
        this.SERVER_PATH=[
            'server/**/*.js',
            'server/**/*.js.map',
            'dist/'];
    }

    build() {
        let self = this;
        CopyTask.run(this.COPY_PATH, 1);
        CopyTask.run(this.SERVER_PATH, 1);
    }
}

const builder = new Builder();
builder.build();