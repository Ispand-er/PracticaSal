import { Outlet, Link } from 'react-router-dom';
import styles from './Layout.module.css';

function Layout() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.logo}>ReactSite</div>
        <nav aria-label="Главное меню">
          <ul className={styles.navList}>
            <li><Link to="/">Главная</Link></li>
            <li><Link to="/about">О нас</Link></li>
            <li><Link to="/services">Услуги</Link></li>
            <li><Link to="/portfolio">Портфолио</Link></li>
            <li><Link to="/contact">Контакты</Link></li>
          </ul>
        </nav>
      </header>

      <main className={styles.main}>
        {/* Здесь будет рендериться активная страница */}
        <Outlet />
      </main>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Наш Оптимизированный Сайт. Все права защищены.</p>
      </footer>
    </div>
  );
}

export default Layout;