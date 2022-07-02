import styles from './FriendList.module.css'
export const FriendList = props => {
    const onlineStyle = styles.status + ' ' + styles.is_online;
    const offlineStyle = styles.status + ' ' + styles.is_offline;
      return (
        <ul className={styles.friendList}>
            {props.friends.map( item => (
             <li className={styles.item}>
                <span className={item.isOnline ? onlineStyle : offlineStyle  }></span>
                <img className={styles.avatar} src={item.avatar} alt="User avatar" width="48" />
                <p className={styles.name}>{item.name}</p>
            </li>
            ))}
           
        
        </ul>


        );
    };