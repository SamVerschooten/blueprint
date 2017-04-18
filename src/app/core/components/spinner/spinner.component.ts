import {Component, Input, ChangeDetectionStrategy} from "@angular/core";

@Component({
    selector: "blp-spinner",
    styles: [require('./spinner.component.scss')],
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <div class="spinner" [class.active]="spin">
            <div class="bounce1"></div>
            <div class="bounce2"></div>
            <div class="bounce3"></div>
        </div>`
})
export class SpinnerComponent {
    @Input()
    public spin: boolean;
}