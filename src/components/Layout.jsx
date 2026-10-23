import { Outlet, Link } from 'react-router-dom';
import styles from './Layout.module.css';

function Layout() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        {/* Новый «вкусный» логотип */}
        <div className={styles.logo}>🍔 FoodExpress</div>
        <nav aria-label="Главное меню">
          <ul className={styles.navList}>
            <li><Link to="/">Меню</Link></li>
            <li><Link to="/about">О нас</Link></li>
            <li><Link to="/services">Доставка</Link></li>
            <li><Link to="/contact">Заказать</Link></li>
          </ul>
        </nav>
      </header>

      <main className={styles.main}>
        <Outlet />
      </main>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} FoodExpress — Быстрая доставка еды. Все права защищены.</p>
      </footer>
    </div>
  );
}

export default Layout;
