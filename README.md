### memory-pair-game

## [3д карточка](https://www.youtube.com/watch?v=Kdal-3AfeRc)

## задачи:
- создадим функцию 
- создать шаблон карточки 
- создать функцию (загрузить) которая будет загружать 6 пар фото на бек (рандомно) (уникальных если массив больше 12, в этом случае нужно продумать как не использовать загруженые фото при предыдущем запуске функции(загрузить) пока реалиозуем на 12.
- добавить фокус, при фокусе менять бек на фронт, (вероятно скрытый чекбокс) чекбокс будет добавлять класс эктив
- класс эктив будет переворачивать 
- реализовать функционал. если при фокусе на следующую карточку названия будут равны то добавляем класс хидн на обе
- проверка на равенство названий фото. Нужно выяснить есть ли в текущем втором фото в его названии постфикс '__copy' если такого нет, то добавим его. 
- после этого можно сделать проверку на идентичность имен. Можно на перевернутые фото добавлять класс например (active) Также создавать массив с этим классом и если длина его === 2 то делать проверку. 
- проверим названия елементов массива на налиочие постфикса копя (map) если такого нет, добавить
- теперь сравниваем имена. если строки (имена) равны то добавим этим элементам в основном массиве класс хидн 
- если имена не равны то удаляем класс эктив, тем самым переворачиваем их обратно
- вероятно нужно добавить кнопку (обновить), которая перемешивает фото и рандомно зигружает на бек
- когда длина массива с кассом хидн будет равна 12 то выведем алерт и запустим функцию (загрузить) та же что и на кнопке обновить




