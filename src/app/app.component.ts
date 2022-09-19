import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Trackid-Dashboard';

  ngOnInit(): void {
    console.log(
      'We are sorry , the backend api is currently down and unmaintained'
    );
    console.log('If you face any problems feel free to send a mail to :');
    console.log('ammaryasser760@gmail.com');
    console.log('eslamdahshan61@gmail.com');
    console.log('mahmoud.ewis97@gmail.com');
  }
}
