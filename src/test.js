/**
 * 计算在分期时间内可以获得的收益
 * @param {以此种分期方式购买商品的价格} m 
 * @param {此种分期方式的分期数} n 
 * @param {} 
 * @param {个人的月收益，这里的分期以每期为一个月为单位}  
 */
function computedIncome(m,n,s){
    let p = m / n;//此种分期每期应该花费的金
    // console.log(p)
    let income =  s*(m*n - p*(n*(n + 1)/2));
    console.log(income);
    return income;
}
const testArr = [
    {
        m:17399,
        n:6,
        s:0.01
    },{
        m:18999,
        n:24,
        s:0.01
    }
]
function compareProgram(incomeArr){
    const first = incomeArr[0];
    const two = incomeArr[1];
    // 分期时间内获得的收益
    let firstIncome = computedIncome(first.m,first.n,first.s);
    let twoIncome = computedIncome(two.m,two.n,two.s);
    console.log(firstIncome,twoIncome)
    // 第一种总消费
    let firstConsumption ;
    // 第二种总消费
    let twoConsumption;
    if(first.n > two.n){
        // 第一种分期时间长
        twoIncome = twoIncome + (first.n - two.n)*two.s*(first.m-two.m);
        firstConsumption = first.m - firstIncome;
        twoConsumption = two.m - twoIncome;
    }else{
        // 第二种分期时间长
        firstIncome = firstIncome + (two.n - first.n)*first.s*(two.m - first.m);
        firstConsumption = first.m - firstIncome;
        twoConsumption = two.m - twoIncome;
    }
    return [firstConsumption,twoConsumption];

}
let result = compareProgram(testArr);
console.log(result)