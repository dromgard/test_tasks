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
            <svg className="main__list-line" width="10" height="1" viewBox="0 0 10 1" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line y1="0.5" x2="10" y2="0.5" stroke="url(#paint0_linear_0_99)" />
              <defs>
                <linearGradient id="paint0_linear_0_99" x1="-5.02155e-08" y1="1.52942" x2="10" y2="1.52942" gradientUnits="userSpaceOnUse">
                  <stop offset="0.369906" stop-color="#FCB045" />
                  <stop offset="1" stop-color="#FD1D1D" />
                </linearGradient>
              </defs>
            </svg>
            <h3 className="main__text">Виджеты</h3>
            <h3 className="main__text main__text_visible">Skype аудит</h3>
            <p className="main__text-details">30 готовых решений</p>
          </div>
          <div className="main__details-block">
            <svg className="main__list-line" width="10" height="1" viewBox="0 0 10 1" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line y1="0.5" x2="10" y2="0.5" stroke="url(#paint0_linear_0_99)" />
              <defs>
                <linearGradient id="paint0_linear_0_99" x1="-5.02155e-08" y1="1.52942" x2="10" y2="1.52942" gradientUnits="userSpaceOnUse">
                  <stop offset="0.369906" stop-color="#FCB045" />
                  <stop offset="1" stop-color="#FD1D1D" />
                </linearGradient>
              </defs>
            </svg>
            <h3 className="main__text">Dashboard</h3>
            <h3 className="main__text main__text_visible">30 виджетов</h3>
            <p className="main__text-details">с показателями вашего бизнеса</p>
          </div>
          <div className="main__details-block">
            <svg className="main__list-line" width="10" height="1" viewBox="0 0 10 1" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line y1="0.5" x2="10" y2="0.5" stroke="url(#paint0_linear_0_99)" />
              <defs>
                <linearGradient id="paint0_linear_0_99" x1="-5.02155e-08" y1="1.52942" x2="10" y2="1.52942" gradientUnits="userSpaceOnUse">
                  <stop offset="0.369906" stop-color="#FCB045" />
                  <stop offset="1" stop-color="#FD1D1D" />
                </linearGradient>
              </defs>
            </svg>
            <h3 className="main__text">Skype Аудит</h3>
            <h3 className="main__text main__text_visible">Dashboard</h3>
            <p className="main__text-details">отдела продаж и CRM системы</p>
          </div>
          <div className="main__details-block">
            <svg className="main__list-line" width="10" height="1" viewBox="0 0 10 1" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line y1="0.5" x2="10" y2="0.5" stroke="url(#paint0_linear_0_99)" />
              <defs>
                <linearGradient id="paint0_linear_0_99" x1="-5.02155e-08" y1="1.52942" x2="10" y2="1.52942" gradientUnits="userSpaceOnUse">
                  <stop offset="0.369906" stop-color="#FCB045" />
                  <stop offset="1" stop-color="#FD1D1D" />
                </linearGradient>
              </defs>
            </svg>
            <h3 className="main__text">35 дней</h3>
            <h3 className="main__text main__text_visible">Месяц аmoCRM</h3>
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