import Header from "./Header/Header.jsx";
import Jumbotron from "./Jumbotron/Jumbotron.jsx";
import Discover from "./Discover/DIscover.jsx";
import BlendList from "./BlendList/BlendList.jsx";

function App() {
    return (
        <>
            <div className="hero">
                <Header />
                <Jumbotron />
            </div>
            <Discover />
            <BlendList/>
        </>
    );
}

export default App;
