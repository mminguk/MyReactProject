import userIcon from '../../../assets/circle-user-solid.png';
import Footer from '../../Footer/Footer';
import Liked from '../../main/Feed/Liked';
import StoryFooter from './StoryFooter';
import classes from './StoryModal.module.css';

export default function StoryModal({ name, image, isOpen, onClose }) {
  return (
    <>
      {isOpen && <div className={classes.backdrop} onClick={onClose} />}
      <dialog className={classes.modal} open={isOpen}>
        <div className={classes.profile}>
          <div className={classes.info}>
            <img src={userIcon} alt="user icon" />
            <p className={classes.p}>{name}</p>
          </div>
          <button className={classes.button} onClick={onClose}>
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
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className={classes.content}>
          <img src={image} alt="story image" />
        </div>
        <div className={classes.actions}>
          <Liked />
          <input type="text" placeholder="댓글을 입력해주세요..." />
          <button className={classes.send}>
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
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
              />
            </svg>
          </button>
        </div>
      </dialog>
    </>
  );
}
