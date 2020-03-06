const request=require("request");



const geocode=(adress,callback)=>{
const mapbox=`https://api.mapbox.com/geocoding/v5/mapbox.places/${adress}.json?access_token=pk.eyJ1Ijoia2FyZW0tbW9oYW1lZCIsImEiOiJjazc4amY1eDIwZ2V5M2dwanM1bXo2OThmIn0.XS4N5f1cSHHpG9J2BnhkYA&limit=1`;
request({url:mapbox,json:true},(err,res)=>{
        if(err){
            callback(err+" unable to connect server",undefined);
        }else if(res.body.features.length===0){
            callback("unable to find loaction",undefined)
        }else{

            var longitude=res.body.features[0].center[0];
            var latitude=res.body.features[0].center[1];
            var location=res.body.features[0].place_name
            var data={
                longitude:longitude,
                latitude:latitude,
                location:location
            }
            callback(undefined,data)
        }
    })
}
module.exports=geocode;
