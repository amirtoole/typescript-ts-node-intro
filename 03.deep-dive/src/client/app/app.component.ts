import { Component } from '@angular/core';
import { HelloResponse } from '../../shared/models';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  server_response: HelloResponse;

  constructor(private api: ApiService) {

  }

  sayHello(name: string): void {
    this.api.hello(name).subscribe(r => {
      this.server_response = r;
    });
  }
}
