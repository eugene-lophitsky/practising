import Jumbotron from "../Jumbotron/Jumbotron.jsx";
import FlashSales from "../FlashSales/FlashSales";
import Categories from "../Categories/Categories";
import Bestsellers from "../Bestsellers/Bestsellers";
import OurProducts from "../OurProducts/OurProducts";
import Featured from "../Featured/Featured";
import Footer from "../Footer/Footer";

function Home () {
    return (
        <div className="main">
            <Jumbotron/>
            <FlashSales/>
            <Categories/>
            <Bestsellers/>
            <OurProducts/>
            <Featured/>
            <Footer/>
        </div>
    )
}

export default Home;