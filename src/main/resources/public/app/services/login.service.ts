import {Http, Response} from "angular2/http";
import {Injectable} from "angular2/core";
import {Observable} from "rxjs/Observable";
import {User} from "../model/User";

@Injectable()
export class LoginService {

    constructor(private http:Http) {
    }

    logout() {
        return this.http.post('/logout', null).catch(this.handleError);
    }

    authenticatedUser() {
        return this.http.get('/authenticated')
            .map(response => {
                var responseJson = response.json().userAuthentication.details;
                return <User> {
                    id: responseJson.id,
                    name: responseJson.displayName,
                    mail: responseJson.emails[0].value
                }
            }).catch(this.handleError);
    }

    private handleError(error:Response) {
        console.error(error.json().error);
        return Observable.throw(error.json().error || 'Server error');
    }

    Observable
}