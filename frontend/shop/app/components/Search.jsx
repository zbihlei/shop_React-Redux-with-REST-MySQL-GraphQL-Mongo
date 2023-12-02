import styles from '../styles/search.module.scss';

const Search = () => {
  return (
    <div className={styles.wrapp}>
        <div className={styles.serachhead}>today  I <span>want</span>...</div>
    <input type="search" className={styles.searchfield} />
    </div>
  )
}

export default Search