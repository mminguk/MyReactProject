import classes from './StoryItem.module.css';

import userIcon from '../../../assets/circle-user-solid.png';

export default function StoryItem(props) {
  return (
    <li className={classes.li}>
      <img src={userIcon} alt="user icon" />
      <p className={classes.p}>{props.name}</p>
    </li>
  );
}
