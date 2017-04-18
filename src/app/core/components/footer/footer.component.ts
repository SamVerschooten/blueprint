import {Component} from '@angular/core';

@Component({
    styles: [require('./footer.scss')],
    selector: 'blp-footer',
    template: `
        <footer class="footer">
            <div class="wrap">
            	<div class="row">            	
            	    <div class="columns large-6">      
            	        <div class="info">
            	        </div>
                    </div>
            	    <div class="columns large-6">
            	        <div class="copyright">
            	            <small>© 2017 Hatch Software</small>
                        </div>            	        
                    </div>            	    
                </div>                        	
            </div>
        </footer>
    `
})
export class FooterComponent {
}
