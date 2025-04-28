import Jumbotron from "../Jumbotron/Jumbotron";
import FlashSales from "../FlashSales/FlashSales";
import Categories from "../Categories/Categories";

function Home () {
    return (
        <div className="main">
            <Jumbotron/>
            <FlashSales/>
            <Categories/>
        </div>
    )
}

export default Home;