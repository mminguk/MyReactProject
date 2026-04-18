import userIcon from '../../../assets/circle-user-solid.png';
import classes from './StoryModal.module.css';

export default function StoryModal({ isOpen, onClose, story }) {
  return (
    <>
      {isOpen && <div className={classes.backdrop} onClick={onClose} />}
      <dialog className={classes.modal} open={isOpen}>
        <div className={classes.profile}>
          <img src={userIcon} alt="user image" />
          <p>{name}</p>
          <p onClick={onClose}>X</p>
        </div>
        <img src={story.image} alt="story" />
      </dialog>
    </>
  );
}
