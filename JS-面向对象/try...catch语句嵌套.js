try{
    console.log(v)
}catch(e){
    console.log("未定义")
    try{
        console.log(1)
    }catch{
        console.log(2)
    }
}