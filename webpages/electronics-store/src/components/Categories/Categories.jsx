import styles from './Categories.module.css';
import {data} from './data.js';

function Categories () {

  return (
    <div className={styles.categories}>
      <div className={styles.categoriesDie}>
        <div className={styles.categoriesImg}></div>
        <div className={styles.categoriesText}>Categories</div>
      </div>
      <div className={styles.categoriesTitle}>Choose Category</div>
      <div className={styles.categoriesList}>
        {data.map(category => (
          <div key={category} className={styles.categoriesListItem}>{category}</div>
        ))}
      </div>
    </div>
  )
}

export default Categories;