import React, { Component } from 'react';
import UI from '../ui';

import styles from './Footer.css';

const {
	Pager,
	Grid: { Container, Row, Col },
} = UI;

class Footer extends Component {
	render() {
		const pagination = this.props.pagination;
		const totalPages = Math.ceil(pagination.total / pagination.limit);
		const currentPage = pagination.offset ? Math.ceil(pagination.total / pagination.offset) : 0;

		return (
			<Container className={styles.footer}>
				<Row xs='center' className={styles.footer__list}>
					<Col xs='6' className={styles.footer__pagination}>
						<Pager
							className={styles.pager}
							current={currentPage}
							total={totalPages}
							visiblePages='3'
							titles={{
								first: `1`,
								prev: `‹`,
								prevSet: '‹',
								nextSet: '...',
								next: `›`,
								last: `Last`
							}} />
						</Col>
				</Row>
			</Container>
		);
	}
};

export default Footer;
