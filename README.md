## 1-Canvas Clock

一个HTML5 Canvas制作的时钟。

### 技术 & API函数

### 界面


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
                //失败
                reject({msg: 'fail'});
            }
        }, 'json');
    });
};
```
