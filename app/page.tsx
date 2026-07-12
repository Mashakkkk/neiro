const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Основная навигация">
        <a className="brand" href="#top" aria-label="Нейро — на главную">
          <span className="brand-mark">n</span> нейро
        </a>
        <div className="nav-links">
          <a href="#possibilities">Возможности</a>
          <a href="#process">Как это работает</a>
        </div>
        <a className="nav-cta" href="#start">Начать <Arrow /></a>
      </nav>

      <section className="hero shell" id="top">
        <div className="eyebrow"><span /> ИИ, который работает вместе с вами</div>
        <h1>Больше ясности.<br /><em>Меньше рутины.</em></h1>
        <p className="hero-copy">Превращайте сырые идеи в готовые решения — от первого наброска до уверенного результата.</p>
        <div className="hero-actions">
          <a className="button primary" href="#possibilities">Узнать больше <Arrow /></a>
          <a className="text-link" href="#process">Посмотреть, как это работает <span>↓</span></a>
        </div>

        <div className="canvas" aria-label="Пример рабочего пространства с искусственным интеллектом">
          <div className="canvas-glow glow-one" /><div className="canvas-glow glow-two" />
          <div className="prompt-card">
            <div className="prompt-top"><span className="spark">✦</span><span>Новая идея</span><span className="dots">•••</span></div>
            <p>Помоги превратить заметки в ясный план проекта</p>
            <div className="prompt-bottom"><span>＋</span><span className="send">↑</span></div>
          </div>
          <span className="float-pill pill-one">структура</span>
          <span className="float-pill pill-two">фокус</span>
          <span className="float-pill pill-three">результат</span>
        </div>
      </section>

      <section className="possibilities shell" id="possibilities">
        <div className="section-intro">
          <span className="section-number">01</span>
          <div><p className="kicker">Возможности</p><h2>Освободите время<br />для <em>главного</em></h2></div>
          <p className="section-copy">ИИ берёт на себя повторяющиеся задачи, помогает видеть связи и превращает сложное в понятное.</p>
        </div>
        <div className="feature-grid">
          <article className="feature lavender">
            <span className="feature-icon">✦</span><span className="feature-index">01</span>
            <div><h3>Развивайте идеи</h3><p>Исследуйте варианты, находите неожиданные связи и двигайтесь от мысли к концепции.</p></div>
          </article>
          <article className="feature peach">
            <span className="feature-icon">⌁</span><span className="feature-index">02</span>
            <div><h3>Создавайте быстрее</h3><p>Получайте черновики, планы и тексты за минуты — сохраняя свой голос и контроль.</p></div>
          </article>
          <article className="feature mint">
            <span className="feature-icon">◎</span><span className="feature-index">03</span>
            <div><h3>Принимайте решения</h3><p>Собирайте факты, сравнивайте подходы и превращайте данные в ясные следующие шаги.</p></div>
          </article>
        </div>
      </section>

      <section className="process" id="process">
        <div className="shell process-inner">
          <div className="process-copy"><p className="kicker">Как это работает</p><h2>От вопроса<br />к результату —<br /><em>в диалоге</em></h2><p>Не нужно учиться говорить с машиной. Опишите задачу своими словами, уточняйте детали и улучшайте результат вместе.</p></div>
          <ol className="steps">
            <li><span>01</span><div><h3>Опишите контекст</h3><p>Расскажите, что вы делаете, для кого и какой результат нужен.</p></div></li>
            <li><span>02</span><div><h3>Исследуйте варианты</h3><p>Задавайте вопросы, сравнивайте идеи и выбирайте лучшее направление.</p></div></li>
            <li><span>03</span><div><h3>Доведите до готовности</h3><p>Уточняйте, редактируйте и получайте результат, которым можно пользоваться.</p></div></li>
          </ol>
        </div>
      </section>

      <section className="closing shell" id="start">
        <span className="closing-spark">✦</span>
        <p className="kicker">Ваш следующий шаг</p>
        <h2>Начните с одной<br /><em>хорошей идеи</em></h2>
        <p>Опишите задачу, которая давно ждёт вашего внимания. Всё остальное сделаем вместе.</p>
        <a className="button primary" href="mailto:hello@neiro.ai">Попробовать сейчас <Arrow /></a>
      </section>

      <footer className="shell"><a className="brand" href="#top"><span className="brand-mark">n</span> нейро</a><p>Технологии, которые оставляют место человеку.</p><span>© 2026</span></footer>
    </main>
  );
}

