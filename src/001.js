/**
 * ES5中的写法不足
 * 1.这样写是分开的，逻辑上来说动物这个类是一个整体，不应该分开写。降低了可读性;
 * 2.它的原型成员是可以被枚举的，然而有些时候我们并不希望便利对象的原型上面的东西,虽然可以控制
 * 但是稍微有些麻烦
 * 3.虽然写的是构造函数，但是可以将其当作普通函数进行使用
 * @param {} name 
 */
// function Animal(name){
//     this.name = name;
// }
// Animal.prototype.print = function(){
//     console.log(this.name);
// }
// let pig = new Animal("猪")
// let dog = new Animal("狗")
// let buru = new Animal("不如");
// dog.print()
// pig.print();
// buru.print()


/**
 * ES6中的写法
 * 
 * 1.
 */
class Animal {
    /**
     * 构造器
     * constructor 相当于上面的构造器(构造函数)
     */
    constructor(name){
        this.name = name;
    }
    /**
     * 除了构造器里面的东西，其他的都会放到原型上面
     * 原型上的方法直接写  方法名字+方法体
     * 
     * 1.默认不会遍历原型上的东西
     * 2.构造函数不能当作普通函数进行使用
     * 
     * 注意：
     * 1.类的声明不会被提升，
     * 2.和let，const一样，存在临时性死区，声明之前不能进行调用（类一定要先定义，再使用）
     * 3.类中的所有代码都是在严格模式下执行的
     * 4.类的所有方法无法被当作构造函数使用 ，const a = new pig.print() 是不允许的
     * 5.类的所有方法都是不可枚举的
     * 6.类的构造器必须用 new 来调用
     */
    print(){
        console.log(this.name);
    }
}
let pig = new Animal("猪");
console.log(pig)
for (const key in pig) {
    if (pig.hasOwnProperty(key)) {
        const element = pig[key];
        console.log(element)
    }
}
pig.print()