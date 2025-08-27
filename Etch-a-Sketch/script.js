// 1. Находим наш контейнер
const container = document.querySelector('#container');

// 2. Находим кнопку
const button = document.querySelector('button');
button.style.backgroundColor = 'white';
button.style.color = 'red';

// Функция для создания новой сетки
function createGrid(size) {
  // Вычисляем размер каждого квадрата
  const newSquareSize = 960 / size;
  const sizeInPixels = newSquareSize + "px";

  // Создаем нужное количество квадратов
  const totalSquares = size * size;
  for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement("div");

    // Задаем стили для каждого квадрата
    square.style.width = sizeInPixels;
    square.style.height = sizeInPixels;

    // Добавляем квадрат в контейнер
    container.appendChild(square);
  }

  // Добавляем "слушатель" события наведения мыши для каждого нового квадрата
  const squares = document.querySelectorAll('#container > div');
  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('mouseover', function () {
      this.style.backgroundColor = 'black';
    });
  }
}

// Первоначальное создание сетки 16x16
createGrid(16);

// Обработчик события для кнопки
button.addEventListener('click', function () {
  let newSize = parseInt(prompt("Введите новый размер сетки (максимум 100)"));

  // Проверяем, что пользователь ввел корректное число
  if (newSize > 0 && newSize <= 100) {
    // Сначала полностью удаляем старую сетку
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    // Затем создаем новую сетку с заданным размером
    createGrid(newSize);
  } else {
    alert("Пожалуйста, введите верное число от 1 до 100.");
  }
});