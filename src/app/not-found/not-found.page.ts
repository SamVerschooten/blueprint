import {Component} from '@angular/core';

@Component({
    styles: [require('./not-found.scss')],
    template: `
        <div>	            
    		<h3 class="title">PAGE NOT FOUND</h3>
    	    <div class="content">
    	           We are sorry but the page you are looking for could not be found.
            </div>
        </div>
    `
})
export class NotFoundPage {
}