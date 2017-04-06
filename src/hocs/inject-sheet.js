import { create as createJss } from 'jss';
import { create as createInjectSheet } from 'react-jss';
import presetDefault from 'jss-preset-default';

const jss = createJss();

jss.setup(presetDefault());

const injectSheet = createInjectSheet(jss);

export default injectSheet;
