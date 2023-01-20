import css from './friendList.module.css';

import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
    return (
        <ul className={css.friendList}>
           {friends.map(friend=>(
            <li className={css.item} key={friend.id}>
                   <span className={friend.isOnline ? css.statusOnline : css.statusOffline}></span>
                    
  <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
  <p className={css.name}>{friend.name}</p>
</li>
          ) ) }

            

</ul>
    )
}
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ),
};
