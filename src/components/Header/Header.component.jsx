import React from 'react';
import { Link } from 'react-router-dom';
import './Header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';

const Header = ({ currentUser }) => {
	return (
		<div className='header'>
			<Link className='logo-container' to='/'>
				<Logo />
			</Link>
			<div className='options'>
				<Link to='/' className='option'>
					HOME
				</Link>
				<Link to='/shop' className='option'>
					SHOP
				</Link>
				{currentUser ? (
					<div className='option' onClick={() => auth.signOut()}>
						SIGN OUT
					</div>
				) : (
					<Link to='/sign-in' className='option'>
						SIGN IN
					</Link>
				)}
			</div>
		</div>
	);
};
export default Header;
