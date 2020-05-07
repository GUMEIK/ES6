const reg = /\b[a-z]/g;
const str = "hello world!";
const result = str.replace(reg,(match)=>{
    // 被匹配的字符串
    console.log(match)
    // 函数返回什么，匹配的字符串就会替换成什么
    return match.toUpperCase();
});
console.log(result)