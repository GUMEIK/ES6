/**
 * 参数默认值
 */

/**
 * 三个数求和，中间的数一般为固定值
 */
 function  add(a,b = 45,c){
    return a + b + c;
 }
 // 传入undefined就会使用默认值，传入null则不行
 let result = add(1,undefined,3);
 console.log(result)