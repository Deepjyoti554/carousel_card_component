import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'carousel';

  image = [
    "https://fastly.picsum.photos/id/74/200/200.jpg?hmac=vocZAjFd_aCjJJ-cIS28YxzM2nwLpe_EYBYW95lrzUI",
    "https://fastly.picsum.photos/id/872/200/200.jpg?hmac=m0AwAUFkEiEz2KW58n6a5RVkKaClHNylfppYjE3a0v4",
    "https://fastly.picsum.photos/id/869/200/200.jpg?hmac=Eqnjw4kAS1sFTick74KSN6CBN01wmQg8OpxqbGtdyCU"
  ]

  
}
