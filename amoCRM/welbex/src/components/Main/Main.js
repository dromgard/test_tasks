import React from "react";

function Main() {
  return (
    <main className="main">
      <div className="main__container">
        <h1 className="main__title">Зарабатывайте больше <span className="main__title-color">с WELBEX</span></h1>
        <p className="main__subtitle">Развиваем и контролируем продажи за вас</p>
      </div>
      <div className="main__container">
        <h2 className="main__text">Вместе с <span className="main__text-color">БЕСПЛАТНОЙ КОНСУЛЬТАЦИЕЙ</span> мы дарим:</h2>
        <div className="main__details">
          <div className="main__details-block">
            <h3 className="main__text">Виджеты</h3>
            <p className="main__text-details">30 готовых решений</p>
          </div>
          <div className="main__details-block">
            <h3 className="main__text">Dashboard</h3>
            <p className="main__text-details">с показателями вашего бизнеса</p>
          </div>
          <div className="main__details-block">
            <h3 className="main__text">Skype Аудит</h3>
            <p className="main__text-details">отдела продаж и CRM системы</p>
          </div>
          <div className="main__details-block">
            <h3 className="main__text">35 дней</h3>
            <p className="main__text-details">использования CRM</p>
          </div>
        </div>
        <button
          name="getConsultation"
          className="button main__button"
          type="button"
          aria-label="Получить консультацию"
          title="Получить консультацию"
        >Получить консультацию</button>
      </div>
    </main>
  )
}

export default Main