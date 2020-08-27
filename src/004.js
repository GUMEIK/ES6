const proxy = new Proxy({name:1},{
    /**
     * 
     * @param {代理的目标对象} target 
     * @param {代理的目标对象的属性} propKey 
     */
    get(target,propKey){
        console.log(target);
        console.log(propKey);
        return 18;
    }
});
