# jcsabfix in native javascript
> За основу был взят плагин [jcsabfix jquery](https://github.com/hqdrone/jcsabfix)
  1. Добавить CSS стили для контейнера flexbox - display: flex; flex-wrap: wrap; justify-content: space-around или justify-content: space-between;
  2. ~~Подключить последнюю версию jQuery~~
  3. Подключить функцию [debounce](https://learn.javascript.ru/task/debounce) 
  4. Подключить плагин JCSABFIX jcsabfix.js
  5. Инициализировать плагин JCSABFIX

## Example

### HTML *(index.html)*
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>justify-content: space-(around/between) fix</title>
      <style>
        .grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
        }
    
        .grid-item {
          display: flex;
          flex-grow: 1;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 1.5em;
          font-family: sans-serif;
          min-width: 150px;
          height: 100px;
          background: #17a2b8;
          margin: 5px;
        }
      </style>
    </head>
    <body>
    <div class="grid">
      <div class="grid-item">1</div>
      <div class="grid-item">2</div>
      <div class="grid-item">3</div>
      <div class="grid-item">4</div>
      <div class="grid-item">5</div>
      <div class="grid-item">6</div>
      <div class="grid-item">7</div>
      <div class="grid-item">8</div>
      <div class="grid-item">9</div>
      <div class="grid-item">10</div>
      <div class="grid-item">11</div>
      <div class="grid-item">12</div>
      <div class="grid-item">13</div>
      <div class="grid-item">14</div>
      <div class="grid-item">15</div>
      <div class="grid-item">16</div>
      <div class="grid-item">17</div>
    </div>
    <script src="js/jcsabfix.js"></script>
    <script src="js/smartresize.js"></script>
    <script>
      document.addEventListener('DOMContentLoaded', () => {
        const grid = document.querySelector('.grid');
      
        if (grid) {
          grid.jcsabfix();
          window.addEventListener('resize', debounce(grid.jcsabfix.bind(grid)));
        }
      })
    </script>
    </body>
    </html>


### CSS *(demo.css)*
    .grid {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
    }
    .grid-item {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: 1.5em;
      font-family: sans-serif;
      width: 150px;
      height: 100px;
      background: #17a2b8;
      margin-bottom: 15px;
    }

### JS *(demo.js)*
    document.addEventListener('DOMContentLoaded', () => {
      const grid = document.querySelector('.grid');
      
      if (grid) {
        grid.jcsabfix();
        window.addEventListener('resize', debounce(grid.jcsabfix.bind(grid)));
      }
    })