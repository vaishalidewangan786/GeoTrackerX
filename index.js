const base_url="https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_u8qNJLEvrbVsoHZmmv4R3Q50HnXAj&ipAddress=";
const credit="https://geo.ipify.org/service/account-balance?apiKey=at_u8qNJLEvrbVsoHZmmv4R3Q50HnXAj"
// let input= document.getElementById('inp').value;
const getInfo=(searchIp)=>{
    const url=`${base_url}${searchIp}`;
    fetch(url)
    .then((response)=>response.json())
    .then(data=>{
        console.log(data);
    })
    .catch(e=>console.log(e))
}

function myfun(){
    input= document.getElementById('inp').value;      
    getInfo(input);
    console.log(input);
};











// Object prototype:
res={
    "ip": "142.250.191.78",
    "location": {
        "country": "US",
        "region": "California",
        "city": "Mountain View",
        "lat": 37.38605,
        "lng": -122.08385,
        "postalCode": "94035",
        "timezone": "-07:00",
        "geonameId": 5375480
    },
    "domains": [
        "alt-11007.atap.google.com",
        "aalia-medispa.business.site",
        "alt-1100713.email.google.com",
        "alt29097.lh4.google.com",
        "alt27505.images.google.com"
    ],
    "as": {
        "asn": 15169,
        "name": "GOOGLE",
        "route": "142.250.0.0/15",
        "domain": "https://about.google/intl/en/",
        "type": "Content"
    },
    "isp": "Google LLC",
    "proxy": {
        "proxy": false,
        "vpn": false,
        "tor": false
    }
};


// Attention needed!!!!

// const getInfoEs6=async (searchIp)=>{
//     const url=`${base_url}${searchIp}`;
//     const response=await fetch(url)
//     try{
        
//         const data=await response.PromiseResult;
//         return data;
//     }
//     catch(err){
//         console.log("error is ",err)
//     }
// }
// console.log(getInfoEs6("142.250.191.78"))