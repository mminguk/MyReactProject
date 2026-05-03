import Bookmark from './Bookmark';
import Chat from './Chat';
import classes from './FeedActions.module.css';
import Liked from './Liked';

export default function FeedActions({ comments }) {
  return (
    <div className={classes.actions}>
      <Liked />
      <Chat comments={comments} />
      <Bookmark />
    </div>
  );
}
