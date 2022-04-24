const COLORS = ["255,108,80", "5,117,18", "29,39,57", "67,189,81"];
const BUBBLE_DENSITY = 400;

function generateDecimalBetween(left, right) {
    return (Math.random() * (left - right) + right).toFixed(2);
  }


class Bubble {
    constructor(canvas) {
        this.canvas = canvas;
      
        this.getCanvasSize();
        this.init();
      }
  
      getCanvasSize() {
        this.canvasWidth = this.canvas.clientWidth;
        this.canvasHeight = this.canvas.clientHeight;
      }
  
    init() {
        let color=COLORS[Math.floor(Math.random() * COLORS.length)]

        this.color=color;
        this.size = generateDecimalBetween(1, 3);
        this.alpha = generateDecimalBetween(5, 10)/10;
        this.translateX = generateDecimalBetween(0, this.canvasWidth);
        this.translateY = generateDecimalBetween(0, this.canvasHeight);
        this.velocity = generateDecimalBetween(20, 40);
        this.movementX = generateDecimalBetween(-2, 2) / this.velocity;
        this.movementY = generateDecimalBetween(1, 20) / this.velocity;
    }
  
    move() {
        this.translateX = this.translateX - this.movementX;
        this.translateY = this.translateY - this.movementY;
        if (this.translateY < 0 || this.translateX < 0 || this.translateX > this.canvasWidth) {
            this.init();
            this.translateY = this.canvasHeight;
          }
    }
  }

  class CanvasBackground {
    constructor(id) {
        this. canvas = document.getElementById(id);
        this.ctx = this.canvas.getContext("2d");
        this.dpr = window.devicePixelRatio;


        
    }
    // canvasSize(canvas){
    //     devicePixelRatio = (this.dpr)
    //     canvas.width = this.canvas.offsetWidth * devicePixelRatio;
    //     canvas.heigth = this.canvas.offsetHeigh * devicePixelRatio;
    //     this.ctx.scale = 
    canvasSize() {
        this.canvas.width = this.canvas.offsetWidth * this.dpr;
        this.canvas.height = this.canvas.offsetHeight * this.dpr;
     
        this.ctx.scale(this.dpr, this.dpr);
     }
  
    start() {
        this.canvasSize();
        this.generateBubbles();
        this.animate();  
    }
    generateBubbles(){
        this.bubblesList = [];
        for (let i = 0; i < BUBBLE_DENSITY; i++) {
            this.bubblesList.push(new Bubble(this.canvas))
        }
    }
    animate(){
        this.ctx.clearRect(0, 0, this.canvas.clientWidth, this.canvas.clientHeight);
        this.bubblesList.forEach((bubble) => {
        bubble.move();
       this.ctx.translate(bubble.translateX, bubble.translateY);
        this.ctx.beginPath();
        this.ctx.arc(0, 0, bubble.size, 0, 2 * Math.PI)
        this.ctx.fillStyle = `rgba(${bubble.color}, ${bubble.alpha})`;
        this.ctx.fill();
        this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    });
    requestAnimationFrame(this.animate.bind(this));
    }
  }
  let a = new CanvasBackground("orb-canvas");
  a.start();

//-----------------------------
// animate() {
//     this.ctx.clearRect(0, 0, this.canvas.clientWidth, this.canvas.clientHeight);
 
//     this.bubblesList.forEach((bubble) => {
//         bubble.move();
//         this.ctx.translate(bubble.translateX, bubble.translateY);
//         this.ctx.beginPath();
//         this.ctx.arc(0, 0, bubble.size, 0, 2 * Math.PI);
//         this.ctx.fillStyle = "rgba(" + bubble.color + "," + bubble.alpha + ")";
//         this.ctx.fill();
//         this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
//     });

//  }

// После метода translate нужно начать отрисовку нового пути пузырька. Для этого вызовите метод beginPath контекста.
// С помощью метода arc контекста (this.ctx) нарисуйте круг с центром 0,0 и радиусом bubble.size.
// Теперь закрасьте круг нужным цветом. Для этого настройте у контекста (this.ctx) свойство fillStyle. Оно должно быть равно строке, которая содержит цвет в формате RGBA, например: "rgba(0,0,0,1)". Цвет должен быть равен цвету пузырька (bubble.color), alpha-значение также должно быть равно свойству alpha у пузырька (bubble.alpha).
// Обратите внимание: bubble.color хранится в формате трех цифр через запятую (например, "255,108,80"), а fillStyle должен быть равен строке в другом формате: "rgba(0,0,0,1)".
// Закрасьте пузырек, вызвав метод fill у контекста. 
// Чтобы размер пузырька отрисовался согласно размерам холста, учитывающим devicePixelRatio, нужно также учесть его и при отрисовке пузырьков. Для этого вызовите метод this.ctx.setTransform, с помощью которого можно настроить масштабирование. Укажите горизонтальное и вертикальное масштабирование, равное this.dpr, остальные параметры укажите равными 0.
    

   

  



  

//   В класс CanvasBackground добавьте метод canvasSize.
//   В методе canvasSize нужно выставить ширину для холста (свойство width у canvas). Ширина должна быть равна ширине холста (this.canvas.offsetWidth), умноженной на devicePixelRatio (this.dpr). 
//   В методе canvasSize нужно выставить высоту для холста (свойство height у canvas). Высота должна быть равна высоте холста (this.canvas.offsetHeight), умноженной на devicePixelRatio (this.dpr).
// Для контекста (this.ctx) выставите масштаб, равный devicePixelRatio (this.dpr) и для оси x, и для оси y (используйте метод ctx.scale(..., ...)).



//   const canvas = document.getElementById("orb-canvas");
//   const bubbles = [];
// bubbles.push(new Bubble(canvas));
// bubbles.push(new Bubble(canvas));
// bubbles.push(new Bubble(canvas));

// console.log(bubbles);

