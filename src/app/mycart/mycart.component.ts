import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css']
})
export class MycartComponent implements OnInit {
  buttonname='show';
  boolean=false;

    clickme(){
    this.boolean =!this.boolean;
    if(this.boolean)
    this.buttonname='HIDE';
    else
    this.buttonname='SHOW';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
