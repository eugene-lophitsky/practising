import Header from "./Header/Header.jsx";
import Jumbotron from "./Jumbotron/Jumbotron.jsx";
import Discover from "./Discover/DIscover.jsx";
import BlendList from "./BlendList/BlendList.jsx";
import WhyDifferent from "./WhyDifferent/WhyDifferent.jsx";
import AmazingMorning from "./AmazingMorning/AmazingMorning.jsx";

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
        </>
    );
}

export default App;
