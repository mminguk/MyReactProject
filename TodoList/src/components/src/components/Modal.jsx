import { createPortal } from 'react-dom';

import style from './Modal.module.css';

export default function Modal({ isOpen, onClose, children }) {
  return createPortal(
    <>
      {isOpen && <div onClick={onClose} className={style.container} />}
      <dialog open={isOpen} className={style.dialog}>
        {children}
      </dialog>
    </>,
    document.getElementById('modal'),
  );
}
