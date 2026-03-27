import style from './Header.module.css';

export default function Header(props) {
  return (
    <div className={style.header}>
      <span
        className={`${style.span} ${props.mode === 'todoList' && style.selected}`}
        onClick={() => props.onSelect('todoList')}
      >
        투두리스트
      </span>
      <span
        className={`${style.span} ${props.mode === 'Calendar' && style.selected}`}
        onClick={() => props.onSelect('Calendar')}
      >
        캘린더
      </span>
    </div>
  );
}
