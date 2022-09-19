function getNeg(a,b){
    const customPromise = new Promise((resolve, reject) =>{
        const neg = a - b;

        if (neg >= 0){
            resolve("lets go");
        }
        else{
            reject("Neg must be greater than 0");
        }
    })
    return customPromise
}

getNeg(1,3).then (data=>{
    console.log(data)
})
.catch(err=>{
    console.log(err)
})