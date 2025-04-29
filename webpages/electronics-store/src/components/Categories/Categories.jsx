import styles from './Categories.module.css';
import {data} from './data.js';

function Categories () {
  return (
    <div className={styles.categories}>
      <div className={styles.categoriesDie}>
        <div className={styles.categoriesDieImg}></div>
        <div className={styles.categoriesDieText}>Categories</div>
      </div>
      <div className={styles.categoriesTitle}>Choose Category</div>
      <div className={styles.categoriesList}>
        {data.map(category => (
          <div key={category.name} className={styles.categoriesListItem}>
            <div 
              className={styles.categoriesListItemIcon} 
              style={category.style}
            ></div>
            <div className={styles.categoriesListItemTitle}>{category.name}</div>  
          </div>
        ))}
      </div>
      <div className={styles.categoriesDivider}></div>
    </div>
  )
}

export default Categories;