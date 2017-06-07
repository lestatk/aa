import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { IResponse } from './interfaces/IResponse';

@Component({
    selector: 'my-app',
    templateUrl: 'app.component.html', 
    styleUrls: ['app.component.css'],
    moduleId: module.id
})
export class AppComponent {
    public name1: string;
    public name2: string;

    constructor(http: Http) {
        http.get("http://localhost:1337/").subscribe((response) => {
            var resp = response.json() as IResponse;
            this.name1 = resp.from;
        });


        http.get("http://localhost:3276/api/Test/Get").subscribe((response) => {
            var resp = response.json() as IResponse;
            this.name2 = resp.from;
        });
    }

}
