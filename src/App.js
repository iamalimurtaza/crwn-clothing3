import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import HomePage from './pages/HomePage/HomePage.component';
import ShopPage from './pages/ShopPage/ShopPage.component';
import SignInSignUp from './pages/SignInSignUp/SignInSignUp.component';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			currentUser: null,
		};
	}

	unSubscribeFromAuth = null;

	componentDidMount() {
		this.unSubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
			if (user) {
				const userInfo = await createUserProfileDocument(user);
				try {
					userInfo.onSnapshot((snapShot) => {
						this.setState({
							currentUser: {
								id: snapShot.id,
								...snapShot.data(),
							},
						});
						console.log(this.state);
					});
				} catch (error) {
					console.error(error);
				}
			} else {
				this.setState({ currentUser: user });
				console.log(this.state);
			}
		});
	}

	componentWillUnmount() {
		this.unSubscribeFromAuth();
	}

	render() {
		const { currentUser } = this.state;
		return (
			<div className='App'>
				<Header currentUser={currentUser} />
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route exact path='/shop' component={ShopPage} />
					<Route path='/sign-in' component={SignInSignUp} />
				</Switch>
			</div>
		);
	}
}

export default App;
