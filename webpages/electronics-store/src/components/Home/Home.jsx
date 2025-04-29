import Jumbotron from "../Jumbotron/Jumbotron";
import FlashSales from "../FlashSales/FlashSales";
import Categories from "../Categories/Categories";
import Bestsellers from "../Bestsellers/Bestsellers";

function Home () {
    return (
        <div className="main">
            <Jumbotron/>
            <FlashSales/>
            <Categories/>
            <Bestsellers/>
        </div>
    )
}

export default Home;