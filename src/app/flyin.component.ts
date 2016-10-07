import { Component, Input, state, style, transition, animate, trigger } from '@angular/core';

@Component({
	selector: 'flyin',
	styles: [require("./flyin.scss")],
	animations: [
		trigger('fly', [
			state('void', style({opacity: 0})),
	  		state('*', style({opacity: 1})),
	  		transition('void <=> *',animate(1000))
	    ])
	  ],
	template: `
		<div @fly class="flyin"></div>
	`
})
export class Flyin {
}