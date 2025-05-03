import Jumbotron from "../Jumbotron/Jumbotron";
import FlashSales from "../FlashSales/FlashSales";
import Categories from "../Categories/Categories";
import Bestsellers from "../Bestsellers/Bestsellers";
import OurProducts from "../OurProducts/OurProducts";
import Featured from "../Featured/Featured";

function Home () {
    return (
        <div className="main">
            <Jumbotron/>
            <FlashSales/>
            <Categories/>
            <Bestsellers/>
            <OurProducts/>
            <Featured/>
        </div>
    )
}

export default Home;