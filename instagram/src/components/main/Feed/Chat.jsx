import { useState } from 'react';

import userIcon from '../../../assets/circle-user-solid.png';
import classes from './Chat.module.css';

export default function Chat() {
  const [isChating, setIsChating] = useState(false);

  function chatingHandler() {
    setIsChating(!isChating);
  }

  return (
    <>
      {isChating && (
        <dialog className={classes.dialog} open={isChating}>
          <header className={classes['chat-header']}>
            <h2>댓글</h2>
          </header>
          <main>
            <section className={classes.chats}>
              <img src={userIcon} alt="user icon" />
              <span>mkhan_1011</span>
              <p>이거 완전 개새끼네</p>
            </section>
            <section className={classes.actions}>
              <img src={userIcon} alt="user icon" />
              <input type="text" />
              <button>확인</button>
            </section>
          </main>
        </dialog>
      )}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
        onClick={chatingHandler}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
        />
      </svg>
    </>
  );
}
