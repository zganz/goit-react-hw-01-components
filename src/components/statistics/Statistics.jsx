import styles from './Stat.module.css'
export const Statistics = props => {
    return (
    <section className={styles.statistics}>
  <h2 className={styles.title}>{props.title}</h2>
  <ul className={styles.statlist}>
  {props.stats.map( item => (
             <li className={styles.item}>
                 <span className={styles.label}>{item.label}</span>
                 <span className={styles.percentage}>{item.percentage}</span>
             </li>
            ))}
  </ul>
</section>
  );
};