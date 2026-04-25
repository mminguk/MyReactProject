import classes from './ReelsHeader.module.css';

export default function ReelsHeader() {
  return (
    <header className={classes.header}>
      <button className={classes.plus}>
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
      </button>
      <div className={classes.actions}>
        <button className={classes.btn}>릴스</button>
        <button className={classes.btn}>친구</button>
      </div>
    </header>
  );
}
