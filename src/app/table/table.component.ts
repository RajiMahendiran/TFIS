import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  src1="/assets/sugar.jpg";
  src2="/assets/salt.jpg";
  src3="/assets/rice.jpg";
  src4="/assets/wheat.jpg";
  src5="/assets/maida.jpg";
  width1="100";
  height1="100";
  width2="100";
  height2="100";
  width3="100";
  height3="100";
  width4="100";
  height4="100";
  width5="100";
  height5="100";
  user1: any[] = [
    {id:1,image:this.src1,name:"sugar",price:"100"},
     ];
  user2: any[] = [
    {id:2,image:this.src2,name:"salt",price:"80"},
     ];

  user3: any[] = [
   {id:3,image:this.src3,name:"rice",price:"50"},
     ];

  user4: any[] = [
  {id:4,image:this.src4,name:"wheat",price:"70"},
  ];

  user5: any[] = [
    {id:5,image:this.src5,name:"maida",price:"120"},

  ];


  constructor() { }

  ngOnInit(): void {
  }

}
