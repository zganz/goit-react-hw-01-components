import PropTypes from "prop-types";
import styles from './FriendListItem.module.css'

const FriendListItem = ({ isOnline, avatar, name }) => {
    const onlineStyle = styles.status + ' ' + styles.is_online;
    const offlineStyle = styles.status + ' ' + styles.is_offline;
    return (
        <li className={styles.item} >           
        <span className={isOnline ? onlineStyle : offlineStyle  }></span>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className={styles.name}>{name}</p>
        </li>
    )
}

export default FriendListItem

FriendListItem.propTypes = {
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}