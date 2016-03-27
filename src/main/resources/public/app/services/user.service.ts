import {Injectable} from "angular2/core";
import {User} from "../model/User";
import {Http, Response, RequestOptions, Headers} from "angular2/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class UserService {
    constructor(private http:Http) {
    }

    private userUrl = "/users";

    getUsers() {
        return this.http.get(this.userUrl)
            .map(result => <User[]> result.json()._embedded.users)
            .catch(this.handleError);
    }

    getUser(name:String) {
        return this.http.get(this.userUrl + "/search/findByName?name=" + name)
            .map(result => <User> result.json())
            .catch(this.handleError);
    }

    addUser(user:User) {
        let body = JSON.stringify(user);
        let options = new RequestOptions({headers: this.getJSONContentType()});
        return this.http.post(this.userUrl, body, options).catch(this.handleError);
    }

    updateUser(user:User) {
        let body = JSON.stringify(user);
        let options = new RequestOptions({headers: this.getJSONContentType()});
        return this.http.put(this.userUrl, body, options).catch(this.handleError);
    }

    deleteUser(name:String) {
        return this.http.delete(this.userUrl + "/" + name).catch(this.handleError);
    }

    private getJSONContentType() {
        return new Headers({'Content-Type': 'application/json'});
    }

    private handleError(error:Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'Server error')
    }
}