import { Component } from 'angular2/core';

@Component({
    selector: 'tentucan-application',
    template: '<h3>My Application</h3><p>{{content}}</p>'
})
export class ApplicationComponent {
    content = "my application content"
}