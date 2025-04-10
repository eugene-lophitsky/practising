import Header from "./Header/Header.jsx";
import Jumbotron from "./Jumbotron/Jumbotron.jsx";
import Discover from "./Discover/DIscover.jsx";
import BlendList from "./BlendList/BlendList.jsx";
import WhyDifferent from "./WhyDifferent/WhyDifferent.jsx";
import AmazingMorning from "./AmazingMorning/AmazingMorning.jsx";
import Feedback from "./Feedback/Feedback.jsx";
import Subscribe from "./Subscribe/Subscribe.jsx";
import Footer from "./Footer/Footer.jsx";

function App() {
    return (
        <>
            <div className="hero">
                <Header />
                <Jumbotron />
            </div>
            <Discover />
            <BlendList />
            <WhyDifferent />
            <AmazingMorning />
            <Feedback />
            <Subscribe />
            <Footer/>
        </>
    );
}

export default App;
