import { useState } from 'react';
import styles from './pages.module.css';

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>Быстрый заказ</h1>
      <p className={styles.subtitle}>Заполните форму, и мы начнем готовить ваш заказ немедленно!</p>

      {submitted ? (
        <div className={styles.successMessage} role="alert">
          <h3>🔥 Заказ принят!</h3>
          <p>Курьер уже выезжает. Ожидайте звонка для подтверждения.</p>
        </div>
      ) : (
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="userName">Ваше имя *</label>
            <input type="text" id="userName" required placeholder="Александр" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="userPhone">Номер телефона *</label>
            <input type="tel" id="userPhone" required placeholder="+7 (999) 123-45-67" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="userMessage">Адрес доставки и комментарий</label>
            <textarea id="userMessage" rows="3" placeholder="Улица Пушкина, дом 10, кв 4. Подъезд 2. Домофон 4К..."></textarea>
          </div>
          <button type="submit" className={styles.submitBtn}>Оформить доставку</button>
        </form>
      )}
    </div>
  );
}

export default Contact;
