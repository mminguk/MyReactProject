import userImg from '../../../assets/circle-user-solid.png';
import classes from './FeedItem.module.css';

import FeedActions from './FeedActions';

export default function FeedItem(props) {
  return (
    <li>
      <div className={classes.profile}>
        <img src={userImg} alt="user image" />
        <p className={classes.p}>{props.name}</p>
      </div>
      <div className={classes.post}>
        <div className={classes.image}>
          <img src={props.image} alt="post image" />
        </div>
        <FeedActions />
        <div className={classes.text}>
          <span>{props.name}</span>
          <p className={classes.p}>{props.content}</p>
          <p>11시간 전</p>
        </div>
      </div>
    </li>
  );
}
