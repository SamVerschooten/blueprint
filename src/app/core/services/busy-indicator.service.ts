import {Injectable} from '@angular/core';

@Injectable()
export class BusyIndicatorService {

    private busyKeys: string[] = [];

    public setBusy(key: string) {
        if (this.busyKeys.indexOf(key) === -1) {
            this.busyKeys.push(key);
            // enable loader
        }
    }

    public setIdle(key: string) {
        let keyIndex = this.busyKeys.indexOf(key);
        if (keyIndex !== -1) {
            this.busyKeys.splice(keyIndex, 1);
        }
        if (this.busyKeys.length === 0) {
            // disable loader
        }
    }
}