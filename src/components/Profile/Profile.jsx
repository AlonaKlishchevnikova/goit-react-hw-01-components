
import PropTypes from 'prop-types';
import css from './profile.module.css';
export const Profile = ({ username, tag, location, avatar, stats: { followers, views, likes } }) => {
   
    
    return (
  
             <div className={css.profile}>
  <div className={css.description}>
    <img
      src= {avatar}
      alt="User avatar"
      className={css.avatar}
    />
    <p className={css.username}>{username}</p>
    <p className={css.tag}>{tag}</p>
    <p className={css.location}>{location}</p>
  </div>

<ul className={css.stats}>
      <li className={css.item}>
      <span className={css.label}>Followers</span>
      <span className={css.quantity}>{followers}</span>
    </li>
      <li className={css.item}>
      <span className={css.label}>Views</span>
      <span className={css.quantity}>{views}</span>
    </li>
    <li className={css.item}>
      <span className={css.label}>Likes</span>
      <span className={css.quantity}>{likes}</span>
    </li>
  </ul>
</div>
      
    )
}

export default Profile;

Profile.defaultProps = {
    items: []
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};