import styles from './Categories.module.css';
import {data} from './data.js';

function Categories () {

  let categoriesListItemTitle;
  for(let i = 0; i <= 6; i++) {
    categoriesListItemTitle += `${i}`; 
  }
  console.log(categoriesListItemTitle);

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
            <div className={styles.categoriesListItemIcon}></div>  
            <div className={styles.categoriesListItemTitle}>{category.name}</div>  
          </div>
        ))}
      </div>
    </div>
  )
}

export default Categories;

