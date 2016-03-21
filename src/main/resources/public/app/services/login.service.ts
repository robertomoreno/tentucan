import {Http, Response} from "angular2/http";
import {Injectable} from "angular2/core";
import {Observable} from "rxjs/Observable";

@Injectable()
export class LoginService {

    constructor(private http:Http) {
    }

    login() {
        return this.http.get('/login');
    }

    logout() {

    }

    authenticatedUser() {
        return this.http.get('/authenticated').catch(this.handleError);
    }

    private handleError(error:Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'Server error')
    }
}