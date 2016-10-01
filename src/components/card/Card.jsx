import React, { Component } from 'react';
import UI from '../ui';

import styles from './Card.css';

const {
	Grid: { Col }
} = UI;


class Card extends Component {
	render() {
		const data = this.props.data;
		const cardStyles = {
			// If no images received render default one
			backgroundImage: `url(${data.images[0] ? data.images[0].url : 'https://s3-eu-west-1.amazonaws.com/jqcem-images/PRI4622-c77d2d0c'})`
		};

		const renderPrice = () => {
			const offer = data.saleOffer || data.rentOffer;

				if (offer.currency === 'USD') {
					return <span>${offer.price}</span>
				}

				return <span>{offer.price} руб</span>
		};

		console.log(data);
		return (
			<Col xs='12' sm='6' md='4' lg='3'>
				<a href='#' className={styles.card__item}>
					<div className={styles.card__imageContainer}>
						<div className={styles.card__images} style={cardStyles}></div>
					</div>
					<div className={styles.card__descriptionContainer}>
						<div className={styles.card__location}>
							<p className={styles.card__route}>{data.location.routeName} ш.</p>
							<p className={styles.card__locality}>
								<span className={styles.card__text_type_truncate}>
									{data.location.localityName}
								</span>
								<span>, </span>
								<span className={styles.card__percentageWidth}>{data.location.mkadDistance} км</span>
							</p>
						</div>
						<div className={styles.card__pushedTop}>
							<dl className={styles.card__list}>
								<dd className={`${styles.card__listItem} ${styles.card__listItem_type_bold}`}>
									{renderPrice()}
								</dd>
							</dl>
							<dl className={styles.card__list}>
								<dd className={styles.card__listItem}>
									{data.landDetails.area} сот
								</dd>
							</dl>
							<dl className={styles.card__list}>
								<dd className={styles.card__listItem}>
									{data.specification.area} м²
								</dd>
							</dl>
						</div>
					</div>
				</a>
			</Col>
		)
	}
}

export default Card;
