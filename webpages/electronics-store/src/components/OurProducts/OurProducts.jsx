import styles from "../OurProducts/OurProducts.module.css";

function OurProducts() {
    return (
        <div className={styles.ourProducts}>
            <div className={styles.ourProductsWrapper}>
                <div className={styles.ourProductsDie}>
                    <div className={styles.ourProductsDieImage}></div>
                    <div className={styles.ourProductsDieText}>Explore Our Products</div>
                </div>
                <div className={styles.ouProductsTitle}></div>
                <div className={styles.ourProductsList}>
                    <div className={styles.ourProductsListItem}></div>
                </div>
            </div>
        </div>
    );
}

export default OurProducts;
