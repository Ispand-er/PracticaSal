import styles from './pages.module.css';

function Services() {
  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>Наши услуги</h1>
      <p className={styles.subtitle}>Помогаем бизнесу расти и развиваться в цифровой среде.</p>

      <div className={styles.servicesGrid}>
        <article className={styles.serviceItem}>
          <h3>Разработка на React</h3>
          <p>Создание современных SPA (Single Page Applications) любой сложности с использованием React Router и стейт-менеджеров.</p>
        </article>

        <article className={styles.serviceItem}>
          <h3>Оптимизация производительности</h3>
          <p>Аудит существующего кода, исправление задержек рендеринга и вывод показателей Lighthouse в «зеленую зону» (90+).</p>
        </article>

        <article className={styles.serviceItem}>
          <h3>Интеграция API и Backend</h3>
          <p>Настройка безопасного обмена данными между вашим интерфейсом и серверной частью (REST API, GraphQL, WebSockets).</p>
        </article>
      </div>
    </div>
  );
}

export default Services;