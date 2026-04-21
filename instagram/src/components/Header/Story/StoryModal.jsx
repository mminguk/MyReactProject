import userIcon from '../../../assets/circle-user-solid.png';
import Footer from '../../Footer/Footer';
import StoryFooter from './StoryFooter';
import classes from './StoryModal.module.css';

export default function StoryModal({ name, image, isOpen, onClose }) {
  return (
    <>
      {isOpen && <div className={classes.backdrop} onClick={onClose} />}
      <dialog className={classes.modal} open={isOpen}>
        <div className={classes.profile}>
          <div>
            <img src={userIcon} alt="user icon" />
            <span>{name}</span>
          </div>
          <button className={classes.button} onClick={onClose}>
            X
          </button>
        </div>
        <img src={image} alt="story image" />
      </dialog>
    </>
  );
}
