import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recaptha';
  recaptcha:any [];
  resolved(captcharesponse:any [])
  {
this.recaptcha=captcharesponse;
console.log(this.recaptcha);
  }
}
