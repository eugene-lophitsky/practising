import FlashSalesSlider from "../FlashSales/SalesSlider.jsx";
import styles from '../FlashSales/FlashSales.module.css';

function FlashSales () {
  return (
    <div className={styles.flashSales}>
          <div className={styles.flashSalesCaption}>
            <div className={styles.flashSalesCaptionTab}></div>
            <div className={styles.flashSalesCaptionText}>Today&apos;s</div>
          </div>
          <div className={styles.flashSalesTitle}>Flash Sales</div>
          <FlashSalesSlider />
    </div>
  )
}

export default FlashSales;