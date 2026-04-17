import userImg from '../../../assets/circle-user-solid.png';
import classes from './FeedItem.module.css';

import FeedActions from './FeedActions';

export default function FeedItem(props) {
  return (
    <li>
      <div className={classes.profile}>
        <img src={userImg} alt="user image" />
        <p>{props.name}</p>
      </div>
      <div className={classes.post}>
        <img src={props.image} alt="post image" />
      </div>
      <FeedActions />
      <div className={classes.text}>
        <span>{props.name}</span>
        <p>{props.content}</p>
      </div>
    </li>
  );
}
