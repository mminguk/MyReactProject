import classes from './Header.module.css';

import userIcon from '../../../public/circle-user-solid.png';

export default function Header() {
  return (
    <header className={classes.header}>
      <h1 className={classes.h1}>instagram</h1>
      <section className={classes.story}>
        <ul className={classes.ul}>
          <li className={classes.li}>
            <img src={userIcon} alt="user icon" />
            <p className={classes.p}>mkhan_1011</p>
          </li>
          <li className={classes.li}>
            <img src={userIcon} alt="user icon" />
            <p className={classes.p}>mmmin_001</p>
          </li>
          <li className={classes.li}>
            <img src={userIcon} alt="user icon" />
            <p className={classes.p}>kkkkkk</p>
          </li>
          <li className={classes.li}>
            <img src={userIcon} alt="user icon" />
            <p className={classes.p}>kkkkkk</p>
          </li>
        </ul>
      </section>
    </header>
  );
}
