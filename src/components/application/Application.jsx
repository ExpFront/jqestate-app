import React from 'react';
import types from 'react-types';
import pureRender from 'pure-render-decorator';

import '../../styles/reset.css';
import styles from './Application.css';

@pureRender
class Application extends React.Component {
	static propTypes = types({
		children: Element
	});

	render() {
		return (
			<div className={styles.application}>
				<div>
					{this.props.children}
				</div>
			</div>
		)
	}
}

export default Application;
