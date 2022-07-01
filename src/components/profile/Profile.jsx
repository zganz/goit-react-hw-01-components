
import styles from './Profile.module.css'
import PropTypes  from "prop-types";
export const Profile = ({  avatar, username, tag, location, stats }) => {
  console.log(username)
    return (
        <div className={styles.profile}>
        <div className="description">
          <img
            src={avatar}
            alt="User avatar"
            className={styles.avatar}
          />
          <p className={styles.name}>{username}</p>
          <p className="tag">{tag}</p>
          <p className="location">{location}</p>
        </div>
      
        <ul className={styles.stats}>
          <li className={styles.social}>
            <span className={styles.label}>Followers</span>
            <span className="quantity">{stats.followers}</span>
          </li>
          <li className={styles.social}>
            <span className={styles.label}>Views</span>
            <span className="quantity">{stats.views}</span>
          </li>
          <li className={styles.social}>
            <span className={styles.label}>Likes</span>
            <span className="quantity">{stats.likes}</span>
          </li>
        </ul>
      </div>
    );
  };
  
  Profile.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats:PropTypes.objectOf(PropTypes.number).isRequired,  
  };