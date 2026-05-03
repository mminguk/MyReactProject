import { useState, useRef } from 'react';

import classes from './PlusModal.module.css';

export default function PlusModal({ isOpen, onClose, onAddPost }) {
  const [preview, setPreview] = useState(null);
  const fileInputRef = useRef(null);

  function changeImageHandler(event) {
    const file = event.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);
    }
  }

  function clearHandler() {
    setPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  }

  function uploadPostHandler(event) {
    event.preventDefault();

    const enteredValue = {
      name: 'mkhan_1011',
      image: preview,
      content: event.target.description,
      comments: [],
    };

    onAddPost(enteredValue);
  }

  return (
    <>
      {isOpen && <div onClick={onClose} className={classes.backdrop} />}
      <dialog open={isOpen} className={classes.dialog}>
        <form onSubmit={uploadPostHandler}>
          {preview && (
            <>
              <img src={preview} alt="미리보기" className={classes.preview} />
              <button onClick={clearHandler}>초기화</button>
            </>
          )}
          {!preview && (
            <div className={classes.mookup}>이미지를 선택하세요...</div>
          )}
          <input
            type="file"
            name="image"
            accept=".jpg"
            onChange={changeImageHandler}
            ref={fileInputRef}
          />
          <textarea
            className={classes.description}
            name="description"
          ></textarea>
          <button>업로드</button>
        </form>
      </dialog>
    </>
  );
}
