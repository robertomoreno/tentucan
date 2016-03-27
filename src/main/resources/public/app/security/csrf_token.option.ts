import {Injectable} from "angular2/core";
import {BaseRequestOptions} from "angular2/http";

@Injectable()
export class ExRequestOptions extends BaseRequestOptions {
    constructor() {
        super();
    }
}