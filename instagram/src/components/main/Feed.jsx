import classes from './Feed.module.css';
import FeedItem from './Feed/FeedItem';
import { feed } from '../../data/feedData';

export default function Feed() {
  return (
    <ul className={classes.ul}>
      {feed.map((item) => (
        <FeedItem
          key={item.id}
          name={item.name}
          image={item.image}
          content={item.content}
        />
      ))}
    </ul>
  );
}
