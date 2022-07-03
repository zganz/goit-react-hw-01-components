import PropTypes from "prop-types";
import styles from './Stat.module.css'
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
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
}
