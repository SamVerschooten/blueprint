import {Component} from '@angular/core';
@Component({
    styles: [require('./header.scss')],
    selector: 'blp-header',
    template: `
        <header class="header">
            <div class="wrap">
                <div class="header--left">
                    Blueprint                
                </div>
                <div class="header--right">                    
                    <a routerLink="/first">First page</a>                    
                    <a routerLink="/second">Second page</a>                    
                </div>                
            </div>
        </header>        
    `
})
export class HeaderComponent {
}
