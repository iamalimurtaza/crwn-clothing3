import React from 'react';
import './CustomButton.styles.scss';

const CustomButton = ({ children, googleSignIn, ...restProps }) => {
	return (
		<button className={`custom-button ${googleSignIn ? 'google-sign-in' : false}`} {...restProps}>
			{children}
		</button>
	);
};
export default CustomButton;
