import styles from './pages.module.css';

function Services() {
  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>Наш сервис для вас</h1>
      <p className={styles.subtitle}>Заботимся о качестве каждого заказа от кухни до вашей двери.</p>

      <div className={styles.servicesGrid}>
        <article className={styles.serviceItem}>
          <h3>🚀 Экспресс-доставка</h3>
          <p>Доставляем еду в специальных термосумках. Всё приедет горячим в течение 30-45 минут.</p>
        </article>
        <article className={styles.serviceItem}>
          <h3>👨‍🍳 Собственное производство</h3>
          <p>Никаких полуфабрикатов. Готовим исключительно из-под ножа сразу после получения заказа.</p>
        </article>
        <article className={styles.serviceItem}>
          <h3>🎉 Кейтеринг и праздники</h3>
          <p>Приготовим и доставим праздничные сеты и фуршетные блюда на любое ваше мероприятие.</p>
        </article>
      </div>
    </div>
  );
}

export default Services;
