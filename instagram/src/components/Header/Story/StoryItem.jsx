import classes from './StoryItem.module.css';

import userIcon from '../../../assets/circle-user-solid.png';
import StoryModal from './StoryModal';
import { useState } from 'react';

export default function StoryItem({ story }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      {isModalOpen && (
        <StoryModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          image={story.image}
          name={story.name}
        />
      )}
      <li className={classes.li} onClick={() => setIsModalOpen(!isModalOpen)}>
        <img src={userIcon} alt="user icon" />
        <p className={classes.p}>{story.name}</p>
      </li>
    </>
  );
}
