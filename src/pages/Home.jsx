import styles from './pages.module.css';

function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>Быстрая доставка горячей еды</h1>
      <p className={styles.subtitle}>Шедевры кулинарии прямиком из печи к вашему столу за 30 минут.</p>

      <div className={styles.grid}>
        <div className={styles.card}>
          <div className={styles.placeholderImg}>🍕 Пицца Маргарита</div>
          <h3>Пицца Маргарита</h3>
          <p>Сочные томаты, нежная моцарелла, итальянские травы и фирменный соус на тонком тесте.</p>
          <button className={styles.orderBtn}>В корзину — 490 ₽</button>
        </div>
        <div className={styles.card}>
          <div className={styles.placeholderImg}>🍔 Бургер Шеф-Бэкон</div>
          <h3>Бургер Шеф-Бэкон</h3>
          <p>Котлета из мраморной говядины, хрустящий бекон, сыр чеддер и луковый конфитюр.</p>
          <button className={styles.orderBtn}>В корзину — 380 ₽</button>
        </div>
        <div className={styles.card}>
          <div className={styles.placeholderImg}>🍜 Рамен с курицей</div>
          <h3>Рамен с курицей</h3>
          <p>Наваристый куриный бульон, пшеничная лапша, маринованное яйцо и свежая зелень.</p>
          <button className={styles.orderBtn}>В корзину — 420 ₽</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
