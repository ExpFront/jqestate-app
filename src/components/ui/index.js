import initUI from '@react-ui/core';
import atoms from '@react-ui/atoms-css-modules';
import pagerStyles from '../footer/Footer.css';

// App's own styles
const appStyles = {
	pager: pagerStyles
};

const st = Object.assign({}, atoms.styles.pager, appStyles.pager);
console.log(st);
const styles = Object.assign({}, atoms.styles, st);

const UI = initUI(atoms.components)(styles);

export default UI;
