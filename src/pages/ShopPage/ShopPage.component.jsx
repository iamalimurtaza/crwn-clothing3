import React from 'react';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview.component';
import inventory from './inventory.data';
import './ShopPage.styles.scss';

class ShopPage extends React.Component {
	constructor() {
		super();
		this.state = {
			inventory: inventory,
		};
	}
	render() {
		const { inventory } = this.state;
		return (
			<div className='shoppage'>
				{inventory.map(({ id, ...restProps }) => (
					<CollectionPreview key={id} {...restProps} />
				))}
			</div>
		);
	}
}
export default ShopPage;
