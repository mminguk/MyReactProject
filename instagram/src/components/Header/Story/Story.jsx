import classes from './Story.module.css';
import { storys } from '../../../data/storyData';
import StoryItem from './StoryItem';

export default function Story() {
  return (
    <section className={classes.story}>
      <ul className={classes.ul}>
        {storys.map((story) => (
          <StoryItem key={story.id} story={story} />
        ))}
      </ul>
    </section>
  );
}
