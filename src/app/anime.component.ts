import { 
    Component, OnChanges, Input, 
    trigger, state, animate, transition, style 
} from '@angular/core';

@Component({
	styles: [require("./anime.scss")],
	selector: 'anime',
	animations: [
	  	trigger('fade', [
	  		  state('true' , style({ opacity: 1 })),
      		state('false', style({ opacity: 0 })),
      		transition('1 <=> 0', animate('300ms')),      		
      	]),
      trigger('grow', [
      		state('true' , style({ transform: 'scale(1)'})),
      		state('false', style({ transform: 'scale(0)'})),  	
      		transition('0 => 1', [
      			style({transform: 'scale(0.5)'}),     			
      			animate('600ms', style({transform: 'scale(1.2)'}))
      		]),
      		transition('1 => 0', [
      			style({transform: 'scale(1.2)'}),
      			animate('600ms', style({transform: 'scale(0.5)'}))
      		])      	
      ])
	],
	template: `
		<div [@grow]="isVisible" class="anime" >
			<ng-content></ng-content>
			Can you see me? 
	    </div>
	`
})
export class Anime {
	@Input() isVisible: boolean = true;
}