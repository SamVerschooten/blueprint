import {Component, ViewEncapsulation} from '@angular/core';

@Component({
    styles: [require("./app.scss")],
    selector: 'my-app',
    encapsulation: ViewEncapsulation.None,
    template: `
    	<h1>Hallowkes!!</h1>
    	<div class="container">
    		<anime #el1>TEST</anime>
    		<button (click)="el1.isVisible = !el1.isVisible">Toggle</button>
    	</div>
    	<div class="container">
    		<flyin *ngFor="let item of items"></flyin>
    		<button (click)="items.push('x')">Add</button>
    		<button (click)="items.splice(0,1)">Remove</button>
    	</div>    	
    `
})
export class AppComponent { 

	items = ['x','x','x','x'];
}