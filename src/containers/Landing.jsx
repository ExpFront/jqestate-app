import React, { Component } from 'react';
import Header from '../components/header';
import Content from '../components/content';
import Footer from '../components/footer';
import { connect } from 'react-redux';
import UI from '../components/ui';

import styles from './Landing.css';

const {
	Loading,
	Grid: { Container, Row, Col },
} = UI;

@connect(({ adverts }) => ({ adverts }))
class Landing extends React.Component {

	render() {
		const { adverts } = this.props;

		// 3 app's behaviour
		// Data are fetching
		if (adverts.isFetching) {
			return (
				<section className={styles.app_type_loading}>
					<Loading className={styles.app_preloader} />
				</section>
			)
		} else {
			// Data were fetched
			if (adverts.data) {
				return (
					<section className={styles.app}>
						<Header className={styles.app__header} count={adverts.data.items.length} />
						<Content className={styles.app__content} data={adverts.data.items} />
					</section>
				)
			} else {
				// Data weren't fetched
				return (
					<section className={styles.app}>
						<Header className={styles.app__header} />
					</section>
				)
			}
		}
	}
}

export default Landing;
