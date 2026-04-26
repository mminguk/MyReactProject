import Bookmark from './Bookmark';
import Chat from './Chat';
import classes from './FeedActions.module.css';
import Liked from './Liked';

export default function FeedActions() {
  return (
    <div className={classes.actions}>
      <Liked />
      <Chat />
      <Bookmark />
    </div>
  );
}
