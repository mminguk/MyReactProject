import { useState } from 'react';
import classes from './Plus.module.css';
import PlusModal from './PlusModal';
import { feed } from '../../data/feedData';

export default function Plus() {
  const [isEditing, setIsEditing] = useState(false);
  function editPostHandler() {
    if (isEditing) {
      document.body.style = 'overflow: auto';
    } else {
      document.body.style = 'overflow: hidden';
    }

    setIsEditing(!isEditing);
  }

  return (
    <>
      <PlusModal isOpen={isEditing} onClose={editPostHandler} />
      <span className={classes.icon} onClick={editPostHandler}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </span>
    </>
  );
}
