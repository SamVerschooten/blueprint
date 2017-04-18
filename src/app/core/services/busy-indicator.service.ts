import {Injectable} from '@angular/core';
import {disableBusy, enableBusy} from "../actionCreators";
import {Store} from "@ngrx/store";
import {ApplicationState} from "../state/ApplicationState";

@Injectable()
export class BusyIndicatorService {

    private busyKeys: string[] = [];

    constructor(private store: Store<ApplicationState>) {
    }

    public setBusy(key: string) {
        if (this.busyKeys.indexOf(key) === -1) {
            this.busyKeys.push(key);
            this.store.dispatch(enableBusy());
        }
    }

    public setIdle(key: string) {
        let keyIndex = this.busyKeys.indexOf(key);
        if (keyIndex !== -1) {
            this.busyKeys.splice(keyIndex, 1);
        }
        if (this.busyKeys.length === 0) {
            this.store.dispatch(disableBusy());
        }
    }
}