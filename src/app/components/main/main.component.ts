import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var Waypoint: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $("#arm").waypoint(function() {
      $(".firstImg").addClass(" bounceInRight a ");
      $(".secndImg").addClass("animated bounceInLeft a");  
    })
  }
  

}
