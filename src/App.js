import "./styles/App.css";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Applicant from "./components/Applicant";
import FormContainer from "./containers/FormContainer.js";
import ProfilesContainer from "./containers/ProfilesContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <ProfilesContainer />
      <FormContainer />
      <Applicant />
      <Footer />
    </div>
  );
}

export default App;
