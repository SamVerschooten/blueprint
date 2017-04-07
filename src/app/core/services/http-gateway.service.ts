import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {BusyIndicatorService} from "./busy-indicator.service";

@Injectable()
export class HttpGatewayService {
    private headers: Headers;

    constructor(private http: Http, private busyIndicatorService: BusyIndicatorService) {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
    }

    public get(url: string, actionKey?: string, headers?: Headers): Observable<any> {
        this.trySetBusy(actionKey);
        return this.http.get(url, new RequestOptions({
            headers: headers ? headers : this.headers,
            withCredentials: true
        }))
            .map(this.checkResponse)
            .catch(this.handleError)
            .finally(() => this.trySetIdle(actionKey));
    }

    public post(url: string, body: any, actionKey?: string, headers?: Headers): Observable<any> {
        this.trySetBusy(actionKey);
        return this.http.post(url, body, new RequestOptions({
            headers: headers ? headers : this.headers,
            withCredentials: true
        }))
            .map(this.checkResponse)
            .catch(this.handleError)
            .finally(() => this.trySetIdle(actionKey));
    }

    private trySetBusy(actionKey?: string) {
        if (actionKey) {
            this.busyIndicatorService.setBusy(actionKey);
        }
    }

    private trySetIdle(actionKey?: string) {
        if (actionKey) {
            this.busyIndicatorService.setIdle(actionKey);
        }
    }

    private checkResponse(response: Response): any {
        let body = response.json();

        // throw error when server returned error
        if (body.error) {
            Observable.throw({message: body.error});
        }

        if (!body.data) {
            throw new Error('json reply did not contain a data property');
        }

        return body.data;
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}