## 1-Canvas Clock

一个HTML5 Canvas制作的时钟。

### 技术 & API函数
主要使用H5的canvas绘制。
#### 使用的API方法列表：
1. fillStyle：设置或返回用于填充绘画的颜色、渐变或模式。
2. lineCap：设置或返回线条的结束端点样式。(butt默认/ round向线条的每个末端添加圆形线帽/ square向线条的每个末端添加正方形线帽)
3. lineWidth ：设置或返回当前的线条宽度。示例：ctx.lineWidth = 10;
4. fillRect() :绘制“被填充”的矩形。context.fillRect(x,y,width,height);
5. clearRect ：在给定的矩形内清除指定的像素。context.clearRect(x,y,width,height);
6. fill();       填充
7. stroke();     绘制已定义的路径
8. beginPath()   起始一条路径，或重置当前路径
9. closePath();  创建从当前点到起始点的路径
10. moveTo()、lineTo();
11. arc() :画圆 。context.arc(x,y,r,sAngle,eAngle,counterclockwise);
12. translate(): 改变画布圆点位置。
13. rotate(): 旋转绘图。
14. fillText()：在画布上绘制“被填充的”文本。 context.fillText(text,x,y,maxWidth);
15. font 	设置或返回文本内容的当前字体属性
16. textAlign 	设置或返回文本内容的当前对齐方式（水平对齐方式）
17. textBaseline 	设置或返回在绘制文本时使用的当前文本基线(垂直对齐方式)

### 界面
![](https://github.com/Houweix/web-projects/raw/master/1-Canvas_Clock/show.png)


## 2-BookStore_Reader

一个基于webview的webapp阅读器的开发,可以实现将json格式的数据按章节显示在阅读器上，可以调整阅读器的字体大小、主题、阅读进度记忆等功能，在用户的交互体验上有优化。

### [在线预览(移动端)](http://www.ihouwei.com/bookStore/) ###


### 主要技术
- HTML5的本地化存储
- base64图片
- ES6+promise组织异步代码
- Zepto以及ajax请求

### 界面

#### 主界面
> 点击阅读器的中间区域实现对上下导航栏的显示与隐藏，同时滑动屏幕也能隐藏上下导航栏。

![](https://github.com/Houweix/web-projects/raw/master/2-bookStore_Reader/pic/main.png)

#### “字体”功能面板
>点击“大”或“小”可以调整阅读器文字的大小。点击对应的主题可以将阅读器切换至对应的主题。点击“夜间”按钮可以快速切换变天和夜间的主题样式。

**白天模式**
![](https://github.com/Houweix/web-projects/raw/master/2-bookStore_Reader/pic/font.png)
**夜间模式：**
![](https://github.com/Houweix/web-projects/raw/master/2-bookStore_Reader/pic/night.png)

### 核心代码
```javascript
//初始化阅读器数据
let init = function (UIcallback) {
    getFictionInfoPromise().then(function (d) {
        //执行完成后会执行获取内容的promise对象
        return getCurChapterContentPromise();
    }).then(function (data) {
        UIcallback && UIcallback(data);
    });
};

//异步获取当前章节的内容
let getCurChapterContentPromise = function () {
    return new Promise(function (resolve, reject) {
        $.get('data/data' + Chapter_id + '.json', function (data) {
            if (data.result == 0) {
                //服务器端ok——成功
                let url = data.jsonp;
                //首先发送jsonp请求
                Util.getBSONP(url, function (data) {
                    resolve(data);
                });
            } else {
            
