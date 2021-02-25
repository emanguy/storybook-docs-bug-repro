import {addDecorator, configure} from '@storybook/angular';
import {withKnobs} from "@storybook/addon-knobs";
import { setCompodocJson } from '@storybook/addon-docs/angular';
import docJson from '../documentation.json';

if (!process.env.STORYBOOK_CI) {
	setCompodocJson(docJson);
}

addDecorator(withKnobs({escapeHTML: false}));
