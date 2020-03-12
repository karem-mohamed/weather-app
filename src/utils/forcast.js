const request =require("request");

const forcast=(latitude,longitude,callback)=>{
const url=`https://api.darksky.net/forecast/b3dcf2e5da682cab70160acca2c7b9e9/${latitude},${longitude}`
    request({url:url,json:true},(err,res)=>{
        if(err){
            callback(err+"unable connect to server",undefined)
        }else if(res.body.error){
            callback(err+"unable to find loaction",undefined)
        }else{
            callback(undefined,`the temperature is ${Math.round((res.body.currently.temperature-32)*5/9)}&#8451; and humidity is ${res.body.currently.humidity}`)
        }
    })
}

module.exports=forcast; 