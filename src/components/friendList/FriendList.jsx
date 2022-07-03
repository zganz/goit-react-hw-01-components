import PropTypes  from "prop-types";
import styles from './FriendList.module.css'
export const FriendList = props => {
    const onlineStyle = styles.status + ' ' + styles.is_online;
    const offlineStyle = styles.status + ' ' + styles.is_offline;
      return (
        <ul className={styles.friendList}>
            {props.friends.map( item => (
             <li className={styles.item}  key={item.id}>
                <span className={item.isOnline ? onlineStyle : offlineStyle  }></span>
                <img className={styles.avatar} src={item.avatar} alt="User avatar" width="48" />
                <p className={styles.name}>{item.name}</p>
            </li>
            ))}
        </ul>
        );
    };

    FriendList.propTypes = {
        friends: PropTypes.arrayOf(PropTypes.object).isRequired,    
    }

    // FriendList.propTypes = {
    //     isOnline: PropTypes.bool,
    //     avatar: PropTypes.string,
    //     name: PropTypes.string  
    //   };