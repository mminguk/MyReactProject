import style from './Today.module.css';

export default function Today() {
  const today = new Date().toLocaleString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  });
  return (
    <section className={style.section}>
      <h2>{today}</h2>
    </section>
  );
}
