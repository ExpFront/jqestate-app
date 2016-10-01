import React, { Component } from 'react';
import Card from '../card';
import UI from '../ui';

import styles from './Content.css';

const {
	Grid: { Container, Row },
} = UI;

class Content extends Component {
	render() {
		const data = this.props.data;

		const renderCards = () => {
			return data.map((item, index) => {
				return <Card data={item} key={index} />;
			})
		};

		return (
			<Container fluid>
				<Row className={styles.content__list}>
					{renderCards()}
				</Row>
			</Container>
		)
	}
}

export default Content;
