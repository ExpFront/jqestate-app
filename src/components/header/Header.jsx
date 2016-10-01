import React, { Component } from 'react';
import UI from '../ui';

import styles from './Header.css';

const {
	Grid: { Container, Row, Col },
} = UI;


class Header extends Component {
	render() {
		const count = this.props.count;
		const renderTitle = () => count ? `Найдено ${count}`: 'Нет объектов';

		return (
			<Container className={styles.header}>
				<Row className={styles.header__list}>
					<Col xs='12'>
						<h5 className={styles.header__title}>{renderTitle()}</h5>
					</Col>
				</Row>
			</Container>
		);
	}
};

export default Header;
