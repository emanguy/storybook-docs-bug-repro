import { Component, Input } from '@angular/core';

/**
 * This is a sample of compodoc documentation for a component
 */
@Component({
    selector: 'app-sample-storybook-component',
    templateUrl: './sample-storybook.component.html',
    styleUrls: ['./sample-storybook.component.scss']
})
export class SampleStorybookComponent {
    /** This input is commented */
    @Input() inputValue = 'default';
}
