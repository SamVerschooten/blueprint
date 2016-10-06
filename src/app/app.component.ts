import {Component, ViewChild, ViewEncapsulation} from '@angular/core';
import {MdSidenav} from "@angular/material";

@Component({
    styles: [require("./app.scss")],
    selector: 'my-app',
    encapsulation: ViewEncapsulation.None,
    template: `
		<md-sidenav-layout>
		    <md-sidenav #side (open)="mybutton.focus()">
		      Start Sidenav.
		      <button md-button #mybutton (click)="side.close()">Close</button>
		    </md-sidenav>		   
		    
		   	<button md-button (click)="toggle()">Toggle Start Side Drawer</button>
            <md-input placeholder="amount" align="end">
            </md-input>
	  	</md-sidenav-layout>
    `
})
export class AppComponent { 

	@ViewChild('side')
	sideNav:MdSidenav;

	toggle() {
        this.sideNav.toggle();
	}
}