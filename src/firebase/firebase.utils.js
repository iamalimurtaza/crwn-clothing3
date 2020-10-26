import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
	apiKey: 'AIzaSyDLxVQzmiV4N52X9u9pBQ_qKwitD_jS1Ww',
	authDomain: 'crwn-clothing3-project.firebaseapp.com',
	databaseURL: 'https://crwn-clothing3-project.firebaseio.com',
	projectId: 'crwn-clothing3-project',
	storageBucket: 'crwn-clothing3-project.appspot.com',
	messagingSenderId: '390526349524',
	appId: '1:390526349524:web:875cce66631f7225a7cb41',
	measurementId: 'G-KVE8QP45W1',
};
firebase.initializeApp(config);

export const createUserProfileDocument = async (user, ...additionalData) => {
	if (!user) return;
	const userRef = firestore.doc(`users/${user.uid}`);
	const snapShot = await userRef.get();
	if (!snapShot.exists) {
		const { displayName, email } = user;
		const createdAt = firebase.firestore.FieldValue.serverTimestamp();
		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (error) {
			console.error(error);
		}
	}
	return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
