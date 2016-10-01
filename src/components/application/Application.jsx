import React from 'react';
import '../../styles/reset.css';
import styles from './Application.css';

class Application extends React.Component {

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
