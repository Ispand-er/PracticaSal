import styles from './pages.module.css';

function Portfolio() {
  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>Наши выполненные работы</h1>
      <p className={styles.subtitle}>Реальные кейсы, доведенные до совершенства.</p>

      <div className={styles.portfolioGrid}>
        <article className={styles.portfolioCard}>
          <div className={styles.placeholderImg}>Кейс №1: Финтех платформа</div>
          <div className={styles.cardContent}>
            <h3>Fintech Dashboard</h3>
            <p>Разработка личного кабинета пользователя с интерактивными графиками и отображением баланса в реальном времени.</p>
          </div>
        </article>

        <article className={styles.portfolioCard}>
          <div className={styles.placeholderImg}>Кейс №2: Интернет-магазин</div>
          <div className={styles.cardContent}>
            <h3>E-Commerce Brand Shop</h3>
            <p>Платформа для продаж одежды. Реализована ленивая загрузка товаров, фильтрация без перезагрузки страниц и корзина.</p>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Portfolio;