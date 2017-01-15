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
                    <a routerLink="/home">Home</a>                    
                    <a routerLink="/about">About Us</a>                    
                </div>                
            </div>
        </header>        
    `
})
export class HeaderComponent {
}
