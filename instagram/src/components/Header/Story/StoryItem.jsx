import classes from './StoryItem.module.css';

import userIcon from '../../../assets/circle-user-solid.png';
import StoryModal from './StoryModal';
import { useState } from 'react';

export default function StoryItem({ story }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openStoryHandler() {
    setIsModalOpen(true);
    document.body.style = `overflow: hidden`;
  }

  function closeStoryHandler() {
    setIsModalOpen(false);
    document.body.style = `overflow: auto`;
  }

  return (
    <>
      {isModalOpen && (
        <StoryModal
          isOpen={isModalOpen}
          onClose={closeStoryHandler}
          image={story.image}
          name={story.name}
        />
      )}
      <li className={classes.li} onClick={openStoryHandler}>
        <img src={userIcon} alt="user icon" />
        <p className={classes.p}>{story.name}</p>
      </li>
    </>
  );
}
