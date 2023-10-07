const callback=(arg)=>{
    console.log('callback executed',arg)
}

const findOne=(arg,callback)=>{
    return callback?
        setTimeout(()=>{
            callback(arg)
        },2000)
    :
    new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(arg);
        },1000);
    });
}

const a=(callback)=>{
    findOne('for callback',callback)
}

const b=(()=>{
    findOne('for promise').then((arg)=>{
        callback(arg)
    })
    .catch(()=>{
        console.log("ERROR")
    })
})

const c=async ()=>{
    const user=await findOne('for async await');
    callback(user)
}

c()
a(callback)
b()



