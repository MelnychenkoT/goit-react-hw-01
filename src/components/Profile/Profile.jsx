import PropTypes from 'prop-types';
import css from './Profile.module.css';

const Profile = ({
  username,
  avatar = 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
  tag,
  location,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={css.card}>
      <div className={css.cardInfo}>
        <img src={avatar} alt="User avatar" className={css.userAvatar} />
        <p className={css.userName}>{username}</p>
        <p className={css.userTag}>@{tag}</p>
        <p className={css.userLocation}>{location}</p>
      </div>

      <ul className={css.statsList}>
        <li className={css.statsListItem}>
          <span className={css.statsName}>Followers</span>
          <span className={css.statsQuantity}>{followers}</span>
        </li>
        <li className={css.statsListItem}>
          <span className={css.statsName}>Views</span>
          <span className={css.statsQuantity}>{views}</span>
        </li>
        <li className={css.statsListItem}>
          <span className={css.statsName}>Likes</span>
          <span className={css.statsQuantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.object.isRequired,
};

export default Profile;