import { useState } from 'react';
import styles from './pages.module.css';

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Имитация успешной отправки формы
    setSubmitted(true);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>Обратная связь</h1>
      <p className={styles.subtitle}>Оставьте заявку, и мы свяжемся с вами в течение рабочего дня.</p>

      {submitted ? (
        <div className={styles.successMessage} role="alert">
          <h3>✅ Спасибо за обращение!</h3>
          <p>Ваша заявка успешно принята. Наш менеджер уже изучает информацию.</p>
        </div>
      ) : (
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="userName">Ваше имя *</label>
            <input type="text" id="userName" name="userName" required placeholder="Иван Иванов" />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="userEmail">Электронная почта *</label>
            <input type="email" id="userEmail" name="userEmail" required placeholder="example@mail.com" />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="userMessage">Сообщение</label>
            <textarea id="userMessage" name="userMessage" rows="5" placeholder="Опишите ваш проект..."></textarea>
          </div>

          <button type="submit" className={styles.submitBtn}>Отправить заявку</button>
        </form>
      )}
    </div>
  );
}

export default Contact;