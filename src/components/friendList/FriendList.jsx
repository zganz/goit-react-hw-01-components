import PropTypes from "prop-types";
import FriendListItem from "components/FriendListItem/FriendListItem"
import styles from './FriendList.module.css'
export const FriendList = ({friends}) => {
    
    return <ul className={styles.friendList}>
    {
        friends.map(({id, isOnline, avatar, name }) => (
            <FriendListItem
                key={id}
                isOnline={isOnline}
                avatar={avatar}
              name={name}
            />))
    }
    
    
</ul>
}

    FriendList.propTypes = {
        friends: PropTypes.arrayOf(PropTypes.object),
      }

    