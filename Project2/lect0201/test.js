var multi=[1,2,3];
const reults= (multi)=>{
    return multi.map((e)=>(e%2==0 ? e*2 : e*3));
};
console.log(reults(multi));
