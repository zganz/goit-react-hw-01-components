
import styles from './Profile.module.css'
export const Profile = ({  avatar, username, tag, location,  followers, views, likes }) => {
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
          <li>
            <span className={styles.label}>Followers</span>
            <span className="quantity">{followers}</span>
          </li>
          <li>
            <span className={styles.label}>Views</span>
            <span className="quantity">{views}</span>
          </li>
          <li>
            <span className={styles.label}>Likes</span>
            <span className="quantity">{likes}</span>
          </li>
        </ul>
      </div>
    );
  };
  