import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppState } from './app.service';

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.component.css'],
  template: require('./app.component.html')
})
export class ParentComponent implements OnInit {
  public hello = 'hello';

  public goodbye: string;
  constructor() {}

  public ngOnInit() {}

  public setDataFromChild(data) {
    this.goodbye = data;
  }
}
