import {Component, ViewChild, ViewEncapsulation} from '@angular/core';
//import {MdSidenav} from '@angular/material/sidenav';

@Component({
    styles: [require("./app.scss")],
    selector: 'my-app',
    encapsulation: ViewEncapsulation.None,
    template: `
		<md-sidenav-layout>
		    <md-sidenav #start (open)="mybutton.focus()">
		      Start Sidenav.
		      <button md-button #mybutton (click)="start.close()">Close</button>
		    </md-sidenav>		   
		    
		   	<button md-button (click)="start.toggle()">Toggle Start Side Drawer</button>
	  	</md-sidenav-layout>
    `
})
export class AppComponent { 

	//@ViewChild('start')
	//sideNav:MdSidenav

	// toggle() {
	// 	this.sideNav.toggle();
	// }
}