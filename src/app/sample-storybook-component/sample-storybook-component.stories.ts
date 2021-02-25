import {SampleStorybookComponent} from './sample-storybook.component';
import {moduleMetadata} from '@storybook/angular';
import {text} from '@storybook/addon-knobs';

export default {
    title: 'Components|Sample',
    component: SampleStorybookComponent,
    decorators: [
        moduleMetadata({
            declarations: [
                SampleStorybookComponent,
            ],
        }),
    ],
};

export const SampleComponentStory = () => ({
    component: SampleStorybookComponent,
    props: {
        inputValue: text('Input value', ''),
    },
});
