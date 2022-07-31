// есть некоторые проблемы с организацией кода, не получается разкидать по модулям в VS (попробовал в кодсэендбокс, там работает)
// пока пишу в одном файле

// создадим функцию (получить случайное положительное целое число)
// будем ее использовать для заполнения массива уникальными фото
function getRandomPositiveInteger(first, second) {
  // на входе ждем первое и последнее число
  const lower = Math.ceil(Math.min(Math.abs(first), Math.abs(second)));
  const upper = Math.floor(Math.max(Math.abs(first), Math.abs(second)));
  const result = Math.random() * (upper - lower + 1) + lower;
  
  return Math.floor(result);
}

// создадим массив с фото (6 пар)
const PHOTOS = [
  '../assets/back/1.jpg',
  '../assets/back/1-copy.jpg',
  '../assets/back/2.jpg',
  '../assets/back/2-copy.jpg',
  '../assets/back/3.jpg',
  '../assets/back/3-copy.jpg',
  '../assets/back/4.jpg',
  '../assets/back/4-copy.jpg',
  '../assets/back/5.jpg',
  '../assets/back/5-copy.jpg',
  '../assets/back/6.jpg',
  '../assets/back/6-copy.jpg',
];

// создадим пустой массив, в который будем добавлять рандомные объекты (наши фото)
const similarArray = [];

// создадим функцию, которая создает уникальный объект(фото) из предложеного массива с фото
const createObject = () => {
  // получим уникальный номер
  const randomIdObject = getRandomPositiveInteger(0, 12);
  // молучим уникалььное фото
  const randomPhotos = getRandomPositiveInteger(0, PHOTOS.length - 1);
  return {
    number: randomIdObject,
    imgId: randomPhotos,
    img: PHOTOS[randomPhotos],
  };
};


while (similarArray.length < PHOTOS.length) {
  // пробежимся по симмулируемому массиву, пока его длина будет меньше длины исходного массива с фото
  // будем добавлять в него фото

  let isUnique = true;
  const newItem = createObject();

  //если массив пустой то добавим в него наш объект(фото)
  if (!similarArray.length) {
    similarArray.push(newItem);
    continue;
  }

  // теперь имея там один елемент, добавим второй, но проверим его на уникальность
  for (let i = 0; i < similarArray.length; i++) {
    // пробежим по массива объектов и сравним id текущего элемента с id каждого елемента в массиве
    const currentItem = similarArray[i];
    if (currentItem.imgId === newItem.imgId) {
      isUnique = false;
    }
  }

  // если объек уникален, то добавляем его в сим.массив
  if (isUnique) {
    similarArray.push(newItem);
  }
}

// создадим функцию добавления карточки в ДОМ
const addPicture = function () {
    const PICTURE = document.querySelector('.pictures');
    const templateFragment = document.querySelector('#picture').content.querySelector('.picture');
    const fragment = document.createDocumentFragment();

    similarArray.forEach((element) => {
      const photo = templateFragment.cloneNode(true);
      photo.querySelector('.backImg').src = element.img;

      // при клике вызываем функцию переворота карточки и передаем в нее текущий елемент
      // photo.querySelector('.front').onclick = turnOver(element);
  
      fragment.appendChild(photo);
    });
    PICTURE.appendChild(fragment);
  };

addPicture();








// const FACTS = [
//     {
//         title: 'title 1',
//         info: '11111 Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati esse et reprehenderit labore ipsam eos quam blanditiis repellendus reiciendis fugiat? Sed quod excepturi vel laudantium itaque perferendis ullam, dolorum pariatur?',
//         img: 'assets/1.jpg',
//     },
//   ];
  
//   const mainInfo = document.querySelector('.main__info');
//   mainInfo.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati esse et reprehenderit labore ipsam eos quam blanditiis repellendus reiciendis fugiat? Sed quod excepturi vel laudantium itaque perferendis ullam, dolorum pariatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati esse et reprehenderit labore ipsam eos quam blanditiis repellendus reiciendis fugiat? Sed quod excepturi vel laudantium itaque perferendis ullam, dolorum pariatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati esse et reprehenderit labore ipsam eos quam blanditiis repellendus reiciendis fugiat? Sed quod excepturi vel laudantium itaque perferendis ullam, dolorum pariatur?";
  
//   const openFullPreview = function (imgItem) {
  
//     return function () {
//       // ищем елемент по классу куда запишем карточку
//       const bigPictureFragment = document.querySelector('.big-picture');
//       // при запуске функции прячем класс хидн, тем самым открываем попап с карточкой
//       bigPictureFragment.classList.remove('hidden');
//       const mainContentWrapper = document.querySelector('.main-content-wrapper');
//       mainContentWrapper.classList.add('hidden');
  
  
//       // функция уделения (скрытия) карточки при клике на карточку (зависит от класса)
//       const handlerClose = function (event) {
//         const targetElement = event.target;
//         switch (targetElement.className) {
//           case 'big-picture overlay':
//           case 'big-picture__cancel  cancel':
//             bigPictureFragment.classList.add('hidden'); 
//             document.querySelector('.big-picture').removeEventListener('click', handlerClose);
//             mainContentWrapper.classList.remove('hidden');
//             break;
//           default:
//             break;
//         }
//       };
  
//       // функция уделения (скрытия) карточки при нажатии Esc
//       const handlerEsc = function (event) {
//         if (event.keyCode === 27) {
//           bigPictureFragment.classList.add('hidden');
//           document.removeEventListener('keyup', handlerEsc);
//         }
//       };
  
//   // заполняем попап
//       const t = document.querySelector('.fact__big__title');
//       t.textContent = imgItem.title;
  
//       const p = document.querySelector('.fact__big__info');
//       p.textContent = imgItem.info;
  
//       document.querySelector('.big-picture__img img').src = imgItem.img;
  
//       // вешаем слушатели событий
//       document.querySelector('.big-picture').addEventListener('click', handlerClose);
//       document.addEventListener('keyup', handlerEsc);
//     };
//   };
  
//   const addPicture = function () {
//     const PICTURE = document.querySelector('.listFacts');
//     const templateFragment = document
//       .querySelector("#picture")
//       .content.querySelector(".picture");
//     const fragment = document.createDocumentFragment();
  
//     FACTS.forEach((element) => {
//       const photo = templateFragment.cloneNode(true);
//       photo.querySelector(".fact__img").src = element.img;
//       photo.querySelector(".fact__title").textContent = element.title;
//       photo.querySelector(".fact__title").onclick = openFullPreview(element);
//       photo.querySelector(".fact__info").textContent = element.info;
//       fragment.appendChild(photo);
//     });
//     PICTURE.appendChild(fragment);
//   };
  
//   addPicture();