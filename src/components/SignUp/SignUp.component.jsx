import React from 'react';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import CustomButton from '../CustomButton/CustomButton.component';
import Input from '../Input/Input.component';
import './SignUp.styles.scss';

class SignUp extends React.Component {
	constructor() {
		super();
		this.state = {
			displayName: '',
			email: '',
			password: '',
			confirmPassword: '',
		};
	}

	changeHandler = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};

	submitHandler = async (event) => {
		event.preventDefault();
		const { displayName, email, password, confirmPassword } = this.state;
		if (password !== confirmPassword) {
			alert("Passwords don't match");
			return;
		}
		try {
			const { user } = await auth.createUserWithEmailAndPassword(email, password);
			await createUserProfileDocument(user, { displayName });
			this.setState({
				displayName: '',
				email: '',
				password: '',
				confirmPassword: '',
			});
		} catch (error) {
			console.error(error);
		}
	};

	render() {
		const { displayName, email, password, confirmPassword } = this.state;
		return (
			<div className='sign-up'>
				<h1 className='title'>I do not have an account.</h1>
				<span>Sign up with your email and password.</span>
				<form className='sign-up-form' onSubmit={this.submitHandler}>
					<Input
						type='text'
						name='displayName'
						value={displayName}
						handleChange={this.changeHandler}
						labelText='Display Name'
					/>
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
					<Input
						type='password'
						name='confirmPassword'
						value={confirmPassword}
						handleChange={this.changeHandler}
						labelText='Confirm Password'
					/>
					<div className='buttons'>
						<CustomButton>SIGN UP</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}
export default SignUp;
