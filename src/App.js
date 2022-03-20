import './App.css';
import useSWR from 'swr';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Applicant from './components/Applicant';
import FormContainer from './containers/FormContainer.js';
import ProfilesContainer from './containers/ProfilesContainer';

const url = 'https://randomuser.me/api/?results=9';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function App () {
	const { data: result, error } = useSWR(url, fetcher);
	

	if (error) return <h1>Something went wrong!</h1>;
	if ( !result ) return <h1>Loading...</h1>;

	return (
		<div className='App'>
			<NavBar />
			<Banner />
			<ProfilesContainer users={result.results} />
			<FormContainer />
			<Applicant />
			<Footer />
		</div>
	);
}

export default App;
