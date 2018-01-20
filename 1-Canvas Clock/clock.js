//获取canvas对象
let clock = document.getElementById('clock');
//获取时钟的上下文
let ctx = clock.getContext('2d');
let width = ctx.canvas.width;   //获取宽
let height = ctx.canvas.height; //获取高
let r = width / 2;              //半径为宽一半

//画出圆
function drawBackground(){
    ctx.translate(r,r); //将圆的圆心移动到r，r
    ctx.beginPath();
    ctx.lineWidth = 10; //设置圆的线宽10
    ctx.arc(0,0,r-5,0,2 * Math.PI, false);
    ctx.stroke();
    //注意画圆的函数arc是从3点的位置开始的

    let hourNumber = [3,4,5,6,7,8,9,10,11,12,1,2];
    ctx.font = "21px Arial";
    //在填充文本之前设置文本对齐
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    //遍历时钟
    hourNumber.forEach(function(number, i){
        //把圆盘的12个小时平分
        let rad = 2 * Math.PI /12 * i;
        //cos和sin函数参数为弧度, -30是为了远离圆盘
        let x = Math.cos(rad) * (r - 30);
        let y = Math.sin(rad) * (r - 30);
        ctx.fillText(number, x, y);
    });

    //显示分钟数
    for(let i = 0; i<60 ;i++){
        //60个点
        let rad = 2 * Math.PI / 60 * i;
        let x = Math.cos(rad) * (r - 15);
        let y = Math.sin(rad) * (r - 15);
        ctx.beginPath();    //重新绘制

        if (i % 5 === 0) {
            //小时黑色，其他灰色
            ctx.fillStyle = '#000';
        }else{
            ctx.fillStyle = '#a7a7a7';
        }
        ctx.arc(x,y,2,0,2 * Math.PI,false);
        ctx.fill(); //注意这里是填充圆
    }
    



}

drawBackground();


/*
绘制时钟用到的canvas属性和方法
1、fillStyle：设置或返回用于填充绘画的颜色、渐变或模式。
2、lineCap：设置或返回线条的结束端点样式。(butt默认/ round向线条的每个末端添加圆形线帽/ square向线条的每个末端添加正方形线帽)
3、lineWidth ：设置或返回当前的线条宽度。示例：ctx.lineWidth = 10;
4、fillRect() :绘制“被填充”的矩形。context.fillRect(x,y,width,height);
5、clearRect ：在给定的矩形内清除指定的像素。context.clearRect(x,y,width,height);
6、fill();
7、stroke();     绘制已定义的路径
8、beginPath()   起始一条路径，或重置当前路径
9、closePath();  创建从当前点到起始点的路径
10、moveTo()、lineTo();
11、arc() :画圆 。context.arc(x,y,r,sAngle,eAngle,counterclockwise);
12、translate(): 改变画布圆点位置。
13、rotate(): 旋转绘图。
14、fillText()：在画布上绘制“被填充的”文本。 context.fillText(text,x,y,maxWidth);
15、font 	设置或返回文本内容的当前字体属性
textAlign 	设置或返回文本内容的当前对齐方式（水平对齐方式）
textBaseline 	设置或返回在绘制文本时使用的当前文本基线(垂直对齐方式)

*/