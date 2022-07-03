import styles from './Stat.module.css'
import PropTypes  from "prop-types";
export const Statistics = props => {
    return (
    <section className={styles.statistics}>
  <h2 className={styles.title}>{props.title}</h2>
  <ul className={styles.statlist}>
  {props.stats.map( item => (
             <li className={styles.item} style = {{backgroundColor: getRandomHexColor()}} key={item.id}>
                 <span className={styles.label}>{item.label}</span>
                 <span className={styles.percentage}>{item.percentage}</span>
             </li>
            ))}
  </ul>
</section>
  );
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats:PropTypes.arrayOf(PropTypes.object)
};