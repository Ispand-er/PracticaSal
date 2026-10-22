import styles from './pages.module.css';

function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>О нашей компании</h1>
      <p className={styles.textBlock}>
        Мы — команда инженеров и дизайнеров, увлеченных созданием быстрых и отзывчивых веб-интерфейсов. 
        Наша цель заключается в том, чтобы сделать интернет быстрее, удобнее и доступнее для каждого пользователя.
      </p>

      <section className={styles.subSection}>
        <h2 className={styles.sectionTitle}>Принципы работы</h2>
        <ul className={styles.styledList}>
          <li><strong>Качество кода:</strong> Никакого лишнего мусора в бандле — только чистый и переиспользуемый код.</li>
          <li><strong>Аналитика и тесты:</strong> Непрерывный аудит проектов с помощью систем автоматизации и ручного тестирования.</li>
          <li><strong>Честность и прозрачность:</strong> Разрабатываем архитектуру, которая масштабируется вместе с ростом вашего бизнеса.</li>
        </ul>
      </section>
    </div>
  );
}

export default About;