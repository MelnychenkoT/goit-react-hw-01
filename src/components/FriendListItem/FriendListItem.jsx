import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

const FriendListItem = ({ friend: { isOnline: isTrue, avatar, name } }) => {
  return (
    <div className={css.friendCard}>
      <img src={avatar} alt="Avatar" width="48" className={css.friendAvatar} />
      <p className={css.friendName}>{name}</p>
      {isTrue ? (
        <p className={css.isOnline}>Online</p>
      ) : (
        <p className={css.isOffline}>Offline</p>
      )}
    </div>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};

export default FriendListItem;