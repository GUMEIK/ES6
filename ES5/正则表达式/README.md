# 正则表达式
- 正则表达式是一个验证字符串的规则。
- 正则表达式是跨语言的，是国际标准。
## 基础
[正则表达式在线工具](http://c.runoob.com/front-end/854)
1. 字面量匹配
规则中直接书写字面量字符
2. 特殊字符
- **.**    匹配除了换行符之外的所有字符
如：```a...```
- **^**  匹配字符串的开始,或者取反。　　对字符范围取反```[^\u4e00-\u9FA5]```
- **$**  匹配字符串的结束
3. 转义符
- \n 换行
- \r 
- \t 制表符
- \s 空白字符(空格、制表符)
- \S非空白字符
- \b 单词边界　```\bhello\b```
- \B 非单词边界
- \d 匹配一个数字[0-9]，匹配所有字符```[\d\D]```
- \D 非数字
- \w 单词字符（字母、数字、下划线）
- \W 非单词字符
- \u unicode 字符，用unicode编码匹配字符
转义符可以将特殊字符转义,如```\\```,```\.```
4. 字符集[ 字符范围 ]
匹配字符范围内的字符，如```[a-z]```,```[abc]```,```[a-zA-Z]```,```[0-9]```,```[0-9a-zA-Z_]```
匹配中文：```[\u4e00-\u9FA5]```
5. 量词(前面的规则出现的次数)
- * ０个或多个
- + １个或多个
- ? ０个或１个
- {} ```{n}```:匹配n个，```{n,}```:匹配>= ｎ个，```{n,m}```:匹配n-m个
```^[0-9a-zA-Z]{6,16}$```：匹配6-16位只有字母和数字的密码
6. 或者　　　｜　
多个规则任选其一，```abc|123```
7. ()
使规则成为一个整体
**匹配应用**
- 匹配手机号
```^1[\d]{10}$```
## 在js中书写正则表达式
js中，正则表达式表现为一个对象，该对象是通过构造函数RegExp来创建的
### 创建正则对象
1. 对象字面量
```js
const reg = /^1[\d]{10}$/gi
```
2. 构造函数
```js
// 要注意这样里面的特殊符号要转义
const reg = new RegExp("^1[\\d]{10}$","gmi")
**flag**
- g 全局匹配
- i 忽略大小写
- m 多行匹配
```
### 正则成员
1. global 
是否开启了全局匹配，只读属性```console.log(reg.global)```
2. ignoreCase
是否开启了忽略大小写
3. multiline
是否开启了多行匹配
4. source
目前的匹配规则，得到规则字符串
5. lastIndex
下一次匹配的索引位
6. test
方法：验证某个字符串是否满足规则
```js
const reg = /^1[\d]{10}$/;
console.log(reg.test("13333333333"))
```
当开启了全局匹配后test如果匹配成功，会继续匹配成功的位置继续匹配，直到匹配到字符串结束失败，将原来字符串进行复位。
```js
const reg = new RegExp('^1[\\d]{10}$',"g");
console.log(reg.test("13333333333"))//true
console.log(reg.test("13333333333"))//false
console.log(reg.test("13333333333"))//true
console.log(reg.test("13333333333"))//false
console.log(reg.test("13333333333"))//true
```
7. exec 执行
```js
const reg = new RegExp('[\\d]{3}',"g");
console.log( reg.exec("123abc123abc"))
console.log( reg.exec("123abc123abc"))
console.log( reg.exec("123abc123abc"))
```
告诉匹配的结果,如果匹配成功，返回一个数组，否则，返回null;
```js
[
    0: "12345678901",//匹配结果
    groups: undefined,
    index: 0,//当前匹配是从哪个索引为开始的
    input: "12345678901",//匹配的全部字符串
    length: 1
]
```
**得到所有的匹配结果和索引位置**
```js
const reg = new RegExp('[\\d]{3}',"g");
while(true){
    let res = reg.exec("123abc123abc");
    if(res === null){
        break;
    }
    console.log(res[0],res.index)
}
```
7. 贪婪匹配
正则表达式默认为贪婪模式匹配，尽可能多的去匹配
在**量词后加上？**表示非贪婪模式匹配
### 字符串中的正则
- str.match(reg)
```js
const reg = /\d+/g;
const str = "32dfjk3254hjkhj34h5jkh5j4h";
const result = str.match(reg);
console.log(result)
// ["32", "3254", "34", "5", "5", "4"]
// result　为一个数组，数组中为匹配上的结果
// 如果不是全局匹配，只得到单次匹配的结果
```
- str.search(reg)
得到第一次匹配处的下表
```js
const reg = /\d+/g;
const str = "32dfjk3254hjkhj34h5jkh5j4h";
const result = str.search(reg);
console.log(result)//0
```
- str.split(这里除了字符串还可以写正则表达式对象);
```js
const reg = /\d+/g;
const str = "32dfjk3254hjkhj34h5jkh5j4h";
const result = str.split(reg,num);
console.log(result)// ["", "dfjk", "hjkhj", "h", "jkh", "j", "h"]
// num 相当于截取结果的前几项
```
- str.replace(reg,str|func)    (不会改变原来的字符串)
```js
const reg = /\d+/g;
const str = "32dfjk3254hjkhj34h5jkh5j4h";
const result = str.replace(reg,"正则");
console.log(result)
// 正则dfjk正则hjkhj正则h正则jkh正则j正则h
```
**将单词的首字母大写**
replact方法第二个参数是可以传递函数的
```js
const reg = /\b[a-z]/g;
const str = "hello world!";
const result = str.replace(reg,(match)=>{
    // 被匹配的字符串
    console.log(match)
    // 函数返回什么，匹配的字符串就会替换成什么
    return match.toUpperCase();
});
console.log(result)
```