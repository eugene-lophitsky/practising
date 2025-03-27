import Header from "./Header/Header.jsx";
import Jumbotron from "./Jumbotron/Jumbotron.jsx";
import Discover from "./Discover/DIscover.jsx";

function App() {
    return (
        <>
            <div className="hero">
                <Header />
                <Jumbotron />
            </div>
            <Discover />
        </>
    );
}

export default App;
