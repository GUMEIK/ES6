/**
 * 点点点运算符在不同的场景下可以分别做展开和收集作用
 */

 /**
  * 收集：参数收集
  */

  /**
   * 传入多少个参数就对多少个参数进行求和
   */
 function add(...args){
    let sum = 0;
    let len = args.length;
    for(let i = 0;i < len;i++){
        sum += args[i];
    }
    return sum;
 }
 let result = 0;
 result = add(1,3);
 console.log(result);
 result = add(2,3,4,5,667,3);
 console.log(result);


 /**
  * 展开使用场景
  */

  let arr1 = [23,45,564,65];
  let arr2 = [324,54,6,45];
  let arr = [...arr1,...arr2];