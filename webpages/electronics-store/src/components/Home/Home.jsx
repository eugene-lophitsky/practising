import Jumbotron from "../Jumbotron/Jumbotron";
import FlashSales from "../FlashSales/FlashSales";
import Categories from "../Categories/Categories";
import Bestsellers from "../Bestsellers/Bestsellers";
import OurProducts from "../OurProducts/OurProducts";

function Home () {
    return (
        <div className="main">
            <Jumbotron/>
            <FlashSales/>
            <Categories/>
            <Bestsellers/>
            <OurProducts/>
        </div>
    )
}

export default Home;