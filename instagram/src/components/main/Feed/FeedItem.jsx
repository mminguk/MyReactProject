import userImg from '../../../assets/circle-user-solid.png';
import classes from './FeedItem.module.css';

import FeedActions from './FeedActions';

export default function FeedItem(props) {
  return (
    <li>
      <div className={classes.profile}>
        <img src={userImg} alt="user image" />
        <div className={classes.info}>
          <p className={classes.name}>{props.name}</p>
          <p className={classes.recommend}>회원님을 위한 추천</p>
        </div>
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
