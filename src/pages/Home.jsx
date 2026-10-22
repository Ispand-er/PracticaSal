import styles from './pages.module.css';

function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.heroSection}>
        <h1 className={styles.mainTitle}>Создаем будущее веб-разработки</h1>
        <p className={styles.subtitle}>
          Современный быстрый стек технологий, чистый код и идеальные технические показатели производительности.
        </p>
      </section>

      <section className={styles.featuresSection}>
        <h2 className={styles.sectionTitle}>Наши главные приоритеты</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Высокая скорость</h3>
            <p>Загрузка страниц происходит моментально благодаря сборщику Vite и сжатию ресурсов.</p>
          </div>
          <div className={styles.card}>
            <h3>Доступность</h3>
            <p>Сайт полностью соответствует стандартам WCAG и доступен для скринридеров.</p>
          </div>
          <div className={styles.card}>
            <h3>SEO оптимизация</h3>
            <p>Правильная структура заголовков и семантика позволяют поисковым роботам легко индексировать контент.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;