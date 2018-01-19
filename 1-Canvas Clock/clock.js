//获取canvas对象
var clock = document.getElementById('clock');
//获取时钟的上下文
var ctx = clock.getContext('2d');
var width = ctx.canvas.width;   //获取宽
var height = ctx.canvas.height; //获取高
var r = width / 2;              //半径为宽一半
var rem = width / 300;          //比例


