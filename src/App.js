import './App.css';
import { useState, useEffect } from 'react';
import NavBar from './components/layout/NavBar';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Applicant from './components/Applicant';
import { Card, Header } from './components/Profiles';
import FormContainer from './containers/FormContainer.js';
import ProfilesContainer from './containers/ProfilesContainer';

function App () {
	const [user, setUser] = useState([]);

	const getData = () => {
		fetch('data.json', {
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		})
			.then(function (response) {
				console.log(response);
				return response.json();
			})
			.then(function (myJson) {
				setUser(myJson.results);
			});
	};

	useEffect(() => {
		getData();
	}, [] );
	
	return (
		<div className='App'>
			<NavBar />
			<Banner />
			<ProfilesContainer user={user} />
			<FormContainer />
			<Applicant />
			<Footer />
		</div>
	);
}

export default App;
