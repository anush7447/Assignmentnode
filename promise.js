
    const customPromise = new Promise((resolve, reject) =>{
        const sum = 1+ 5;
        
        if (sum > 0){
            resolve("lets go");
        }
        else{
            reject("sum must be greater than 0");
        }
    })
.then (data=>{
    console.log(data)
})
.catch(err=>{
    console.log(err)
})
