import classes from './StoryItem.module.css';

import userIcon from '../../../assets/circle-user-solid.png';
import { useState } from 'react';
import StoryModal from './StoryModal';

export default function StoryItem({ story }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <li className={classes.li} onClick={() => setIsModalOpen(true)}>
        <img src={userIcon} alt="user icon" />
        <p className={classes.p}>{story.name}</p>
      </li>
    </>
  );
}
