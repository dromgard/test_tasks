const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Задаем переменную для id таймера, чтобы сбрасывать его и запусать новый таймер без обновления старницы.
let timerId;

// Высчитываем время и добавляем на страницу.
const countTime = (seconds) => {

  const hours = Math.floor(seconds / 3600);
  const min = Math.floor((seconds / 60) - (hours * 60))
  const sec = seconds % 60;

  timerEl.innerHTML = `${hours.toString().padStart(2, "0")}:${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
}

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {
    let newSeconds = seconds;

    // Добавляем на страницу последнее время + 1 секунда.
    timerId = setInterval(() => {
      newSeconds++;
      countTime(newSeconds);
    }, 1000)

  };
};

const animateTimer = createTimerAnimator();

// Слушаем вводимые значения в инпут и всё, что не равно числу заменяем пустой строкой.
inputEl.addEventListener('input', (event) => {
  const value = event.target.value;

  if (isNaN(value)) {
    event.target.value = value.replace(/\D/g, '');
  }
});

buttonEl.addEventListener('click', () => {
  clearInterval(timerId) // Сбрасываем таймер.

  const seconds = Number(inputEl.value);

  countTime(seconds); // Добавляем на страницу первоначальное время 
  animateTimer(seconds);

  inputEl.value = '';
});
