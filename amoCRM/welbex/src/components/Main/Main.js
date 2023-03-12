import React from "react";

function Main() {
  return (
    <main className="main">
      <div className="main__container">
        <h1 className="main__title">Зарабатывайте больше <span className="main__title-color">с WELBEX</span></h1>
        <p className="main__subtitle">Развиваем и контролируем продажи за вас</p>
      </div>
      <div className="main__container">
        <h2 className="main__text">Вместе с <span className="main__text-color">БЕСПЛАТНОЙ</span> <span className="main__text-color">КОНСУЛЬТАЦИЕЙ</span> мы дарим:</h2>
        <div className="main__details">
          <div className="main__details-block">
            <svg className="main__list-line" width="10" height="1" viewBox="0 0 10 1" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line y1="0.5" x2="10" y2="0.5" stroke="url(#paint0_linear_0_99)" />
              <defs>
                <linearGradient id="paint0_linear_0_99" x1="-5.02155e-08" y1="1.52942" x2="10" y2="1.52942" gradientUnits="userSpaceOnUse">
                  <stop offset="0.369906" stopColor="#FCB045" />
                  <stop offset="1" stopColor="#FD1D1D" />
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
                  <stop offset="0.369906" stopColor="#FCB045" />
                  <stop offset="1" stopColor="#FD1D1D" />
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
                  <stop offset="0.369906" stopColor="#FCB045" />
                  <stop offset="1" stopColor="#FD1D1D" />
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
                  <stop offset="0.369906" stopColor="#FCB045" />
                  <stop offset="1" stopColor="#FD1D1D" />
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
      <svg className="main__background-red-big" width="117" height="117" viewBox="0 0 117 117" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_bd_0_13)">
          <circle cx="55.5" cy="52.5" r="41.5" fill="url(#paint0_radial_0_13)" fillOpacity="0.8" shapeRendering="crispEdges" />
        </g>
        <defs>
          <filter id="filter0_bd_0_13" x="0" y="0" width="117" height="117" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_0_13" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="10" operator="erode" in="SourceAlpha" result="effect2_dropShadow_0_13" />
            <feOffset dx="3" dy="6" />
            <feGaussianBlur stdDeviation="13.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.87451 0 0 0 0 0.490196 0 0 0 0 0.490196 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="effect1_backgroundBlur_0_13" result="effect2_dropShadow_0_13" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_0_13" result="shape" />
          </filter>
          <radialGradient id="paint0_radial_0_13" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(36.6175 32.995) rotate(51.0412) scale(68.3129)">
            <stop stopColor="#FFD0D0" stopOpacity="0.67" />
            <stop offset="0.596678" stopColor="#D45D5D" stopOpacity="0.33" />
            <stop offset="0.785899" stopColor="#A73131" stopOpacity="0.31" />
            <stop offset="1" stopColor="#821919" stopOpacity="0.31" />
          </radialGradient>
        </defs>
      </svg>
      <svg className="main__background-red-small" width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_bdf_0_12)">
          <circle cx="28" cy="25" r="14" fill="url(#paint0_radial_0_12)" fillOpacity="0.8" shapeRendering="crispEdges" />
        </g>
        <defs>
          <filter id="filter0_bdf_0_12" x="0" y="0" width="62" height="62" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_0_12" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="10" operator="erode" in="SourceAlpha" result="effect2_dropShadow_0_12" />
            <feOffset dx="3" dy="6" />
            <feGaussianBlur stdDeviation="13.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.87451 0 0 0 0 0.490196 0 0 0 0 0.490196 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="effect1_backgroundBlur_0_12" result="effect2_dropShadow_0_12" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_0_12" result="shape" />
            <feGaussianBlur stdDeviation="2.5" result="effect3_foregroundBlur_0_12" />
          </filter>
          <radialGradient id="paint0_radial_0_12" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(21.63 18.42) rotate(51.0412) scale(23.0453)">
            <stop stopColor="#FFD0D0" stopOpacity="0.6" />
            <stop offset="0.596678" stopColor="#D45D5D" stopOpacity="0.31" />
            <stop offset="0.785899" stopColor="#A73131" stopOpacity="0.33" />
            <stop offset="1" stopColor="#821919" stopOpacity="0.29" />
          </radialGradient>
        </defs>
      </svg>
      <svg className="main__background-purple-mobile" width="38" height="74" viewBox="0 0 38 74" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_bdf_0_80)">
          <circle cx="34" cy="31" r="20" fill="url(#paint0_radial_0_80)" fillOpacity="0.8" shapeRendering="crispEdges" />
        </g>
        <defs>
          <filter id="filter0_bdf_0_80" x="0" y="0" width="74" height="74" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_0_80" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="10" operator="erode" in="SourceAlpha" result="effect2_dropShadow_0_80" />
            <feOffset dx="3" dy="6" />
            <feGaussianBlur stdDeviation="13.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.694118 0 0 0 0 0.462745 0 0 0 0 0.85098 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="effect1_backgroundBlur_0_80" result="effect2_dropShadow_0_80" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_0_80" result="shape" />
            <feGaussianBlur stdDeviation="5" result="effect3_foregroundBlur_0_80" />
          </filter>
          <radialGradient id="paint0_radial_0_80" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(24.9 21.6) rotate(51.0412) scale(32.9219)">
            <stop stopColor="#ECD0FF" stopOpacity="0.8" />
            <stop offset="0.596678" stopColor="#A15DCF" stopOpacity="0.3" />
            <stop offset="0.785899" stopColor="#7631A4" stopOpacity="0.26" />
            <stop offset="1" stopColor="#561880" stopOpacity="0.29" />
          </radialGradient>
        </defs>
      </svg>
      <svg className="main__background-red-mobile" width="77" height="54" viewBox="0 0 77 54" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_bd_0_84)">
          <circle cx="35.5" cy="32.5" r="21.5" fill="url(#paint0_radial_0_84)" fillOpacity="0.8" shapeRendering="crispEdges" />
        </g>
        <defs>
          <filter id="filter0_bd_0_84" x="0" y="0" width="77" height="77" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_0_84" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="10" operator="erode" in="SourceAlpha" result="effect2_dropShadow_0_84" />
            <feOffset dx="3" dy="6" />
            <feGaussianBlur stdDeviation="13.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.87451 0 0 0 0 0.490196 0 0 0 0 0.490196 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="effect1_backgroundBlur_0_84" result="effect2_dropShadow_0_84" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_0_84" result="shape" />
          </filter>
          <radialGradient id="paint0_radial_0_84" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(25.7175 22.395) rotate(51.0412) scale(35.391)">
            <stop stopColor="#FFD0D0" stopOpacity="0.67" />
            <stop offset="0.596678" stopColor="#D45D5D" stopOpacity="0.33" />
            <stop offset="0.785899" stopColor="#A73131" stopOpacity="0.31" />
            <stop offset="1" stopColor="#821919" stopOpacity="0.31" />
          </radialGradient>
        </defs>
      </svg>
      <div className="main__background-noise"></div>
    </main>
  )
}

export default Main