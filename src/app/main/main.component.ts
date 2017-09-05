import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main',
  template: require('./main.component.html'),
  styleUrls: ['./main.css']
})
export class MainComponent implements OnInit {
  public imgPath = '../../assets/img/rick.jpg';
  constructor() {}

  ngOnInit() {}
}
