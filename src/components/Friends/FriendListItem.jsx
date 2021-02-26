import Proptypes from 'prop-types';
import s from './FriendItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <span className={isOnline ? s.online : s.offline}></span>
      <img className="avatar" src={avatar} alt="User's avatar" width="48" />
      <p className="name">{name}</p>
    </>
  );
};

FriendListItem.propTypes = {
  avatar: Proptypes.string, 
  name: Proptypes.string, 
  isOnline: Proptypes.bool,
}

export default FriendListItem;
