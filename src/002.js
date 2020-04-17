/**
 * 一：可计算的成员名
*/
const printName = "print"
class Animal {
    constructor(name){
        this.name = name;
    }
    // 看这里
    [printName] (){
        console.log(this.name)
    }
}
const pig = new Animal("猪")
pig[printName]();

/**
 * getter 和 setter ====》对应ES5中的Object.defintProperity
 * 
 * 使用getter和setter定义的属性不在原型上
*/
class people {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    // 当访问age属性时，会执行该函数
    get age (){
        return this._age + "岁"  ;
    }
    set age(age){
        if(age > 10){
            age = age - 10;
        }
        this._age = age;
    }
    print (){
        console.og(this.name,this.age)
    }
}
const oP = new people("谷美",19)
console.log(oP)
console.log(oP.age)
oP.age = 30
console.log(oP.age)

/**
 * 静态成员：给函数本身加上一些成员
 * 
 * ES5中构造函数本身的成员，就叫静态成员,创建出来的对象就叫做实例成员，通过构造函数来访问
 * 原型上面也叫实例成员或者原型成员
 * 
 * 
 * 比如，每个象棋都有宽高，获得棋子宽高的情况
 * 
*/

class TIme {
    static nowTime = Date.now();
    static print(){
        console.log("我是静态方法")
    }
}
let oT = new TIme();
console.log(TIme.nowTime)
TIme.print()

/**
 * ES7  字段初始化器
 * 
 * 使用static 字段初始化器添加的是静态成员，没有使用static 添加的成员位于对象上
 * 
 * 箭头函数在字段初始化器位置上，this指向当前指向，可以利用此种方式绑定this
 * 
 * 要注意 原型不用写 = ，初始化器要写用 = ;初始化器会占用一些空间
*/
class Person {
    // 本身具有默认值,不许要传值，ES6中只支持这样写，在ES7中可以以下买的方式进行书写
    constructor(){
        this.a = 1;
        this.b = 2;
    }
}
class Person1 {
    a = 1;
    b = 2;
}
let p = new Person();
console.log(p)

/**
 * 类表达式
 */
const Test = class {
    // 匿名类
}