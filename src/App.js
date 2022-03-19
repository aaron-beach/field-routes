import './App.css';
import NavBar from './components/NavBar'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Applicant from './components/Applicant';
import UserCard from './components/UserCard';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <UserCard/>
      <Applicant />
      <Footer />
    </div>
  );
}

export default App;
