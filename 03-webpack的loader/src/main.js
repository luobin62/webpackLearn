//1.使用common js的模块化规范
const {add,mul}=require('./js/mathutils.js')
console.log(add(10, 20));
console.log(mul(10, 20));

//2.使用ES6的模块化规范
import {name,age,height} from './js/info.js';

console.log(name);
console.log(age);
console.log(height);

//3.依赖css文件,打包时才会打包css文件
require('./css/normalcss.css')

//4.依赖less文件
require('./css/specialcss.less')
document.writeln('<h2>你好啊，哈哈哈</h2>')