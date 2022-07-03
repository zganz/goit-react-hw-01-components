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
            {items.map( item => (
              <tr>
              <td className={styles.head}>{item.type}</td>
              <td className={styles.head}>{item.amount}</td>
              <td className={styles.head}>{item.currency}</td>
              </tr>
            ))}
               
                
            </tbody>
        </table>
          
      );
    };

    TransactionHistory.propTypes = {
        items: PropTypes.arrayOf(PropTypes.object),
      }