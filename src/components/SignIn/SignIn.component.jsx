import React from 'react';
import { auth, SignInWithGoogle } from '../../firebase/firebase.utils';
import CustomButton from '../CustomButton/CustomButton.component';
import Input from '../Input/Input.component';
import './SignIn.styles.scss';

class SignIn extends React.Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: '',
		};
	}

	changeHandler = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};

	submitHandler = async (event) => {
		event.preventDefault();
		const { email, password } = this.state;
		try {
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({ email: '', password: '' });
		} catch (error) {
			console.error(error);
		}
	};

	render() {
		const { email, password } = this.state;
		return (
			<div className='sign-in'>
				<h1 className='title'>I have an account.</h1>
				<span>Sign in with your email and password.</span>
				<form onSubmit={this.submitHandler}>
					<Input
						type='email'
						name='email'
						value={email}
						handleChange={this.changeHandler}
						labelText='Email Address'
					/>
					<Input
						type='password'
						name='password'
						value={password}
						handleChange={this.changeHandler}
						labelText='Password'
					/>
					<div className='buttons'>
						<CustomButton>SIGN IN</CustomButton>
						<CustomButton type='button' googleSignIn onClick={SignInWithGoogle}>
							SIGN IN WITH GOOGLE
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}
export default SignIn;
