import PropTypes from "prop-types";
import styles from './Transactions.module.css'
export const TransactionHistory = ({ items }) => {
      return (
        <table className={styles.table}>
            <thead >
                <tr >
                <th className={styles.head}>Type</th>
                <th className={styles.head}>Amount</th>
                <th className={styles.head}>Currency</th>
                </tr>
            </thead>

            <tbody>
            {items.map( ({id, type, amount, currency}) => (
              <tr key={id}>
              <td className={styles.head}>{type}</td>
              <td className={styles.head}>{amount}</td>
              <td className={styles.head}>{currency}</td>
              </tr>
            ))}
               
                
            </tbody>
        </table>
          
      );
    };

    TransactionHistory.propTypes = {
        items: PropTypes.arrayOf(PropTypes.object),
      }