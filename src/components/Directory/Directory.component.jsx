import React from 'react';
import MenuItem from '../MenuItem/MenuItem.component';
import { directory } from './directory.data';
import './Directory.styles.scss';

class Directory extends React.Component {
	constructor() {
		super();
		this.state = {
			directory: directory,
		};
	}
	render() {
		const { directory } = this.state;
		return (
			<div className='directory-menu'>
				{directory.map(({ id, ...restProps }) => (
					<MenuItem key={id} {...restProps} />
				))}
			</div>
		);
	}
}
export default Directory;
