class Animal {
    constructor(type,name,age,sex){
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.type = type;
    }
    print(){
        console.log("animal")
    }
}
// exptends 继承
class Dog extends Animal {
    constructor(name,age,sex){
        /**
         * super
         * 1.直接当作函数调用，就是父级构造函数
         * 2.如果当作对象使用，则是父级的原型
         */
        super("犬类",name,age,sex);
        // 子类特有的成员
        this.food = "狗粮"
        this.run = function(){
            console.log("我要开始奔跑了！")
        }
    }
    print(){
        // super当作对象使用，是父级的原型
        super.print();
        console.log("汪汪！")
    }
}
let d = new Dog("小黄",12,"male")
console.log(d)
d.run()
/**
 * 如果定义了constructor,并且该类继承了某类，需要在子类构造函数的第一行手动调用父级的构造函数
 * 
 * 不写构造函数就不会报错，如果子类不写构造函数，则会有默认的构造器，该构造器需要的参数和父类
 * 的一致，并自动调用父类的构造器
 */
