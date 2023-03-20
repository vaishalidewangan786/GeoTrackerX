const base_url="https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_u8qNJLEvrbVsoHZmmv4R3Q50HnXAj&ipAddress=";
const credit="https://geo.ipify.org/service/account-balance?apiKey=at_u8qNJLEvrbVsoHZmmv4R3Q50HnXAj"
// let input= document.getElementById('inp').value;
const getInfo=(searchIp)=>{
    const url=`${base_url}${searchIp}`;
    fetch(url)
    .then((response)=>response.json())
    .then(data=>{
        // console.log(data);
        document.getElementById("ipaddress").innerText=data.ip;
        document.getElementById("ip").innerText=data.ip;
        document.getElementById("location").innerText=`${data.location.city}, ${data.location.country}, ${data.location.postalCode}`;
        document.getElementById("timezone").innerText=`${data.location.timezone}`;
        document.getElementById("isp").innerText=`${data.isp}`;
        document.getElementById("country").innerText=`${data.location.country}`;
        document.getElementById("region").innerText=`${data.location.region}`;
        document.getElementById("city").innerText=`${data.location.city}`;
        document.getElementById("postalCode").innerText=`${data.location.postalCode}`;
        document.getElementById("geonameId").innerText=`${data.location.geonameId}`;
        document.getElementsByClassName("domains").innerText=`${data.domains}`;
        document.getElementById("asn").innerText=`${data.as.asn}`;
        document.getElementById("name").innerText=`${data.as.name}`;
        document.getElementById("route").innerText=`${data.as.route}`;
        document.getElementById("domain").innerText=`${data.as.domain}`;
        document.getElementById("type").innerText=`${data.as.type}`;
        document.getElementById("isp2").innerText=`${data.as.isp2}`;
        document.getElementById("proxy").innerText=`${data.proxy.proxy}`;
        document.getElementById("vpn").innerText=`${data.proxy.vpn}`;
        document.getElementById("tor").innerText=`${data.proxy.tor}`;
        const size=data.domains.length;
        console.log(size);
        
        let currentDiv = document.querySelector("#dynamic");
        console.log("hii");
        console.log(currentDiv);
        for(let i=0; i<size && i<=5; i++){
        let newP = document.createElement("p");
            newP.textContent=data.domains[i];
            currentDiv.appendChild(newP);
            let br=document.createElement("br");
            currentDiv.appendChild(br);
        }
        drawMap(data.location.lat,data.location.lng);

    })
    .catch(e=>console.log(e))
}
function popupToggle(){
    let currDisplay=document.getElementById("popup").style.display;
    if(currDisplay==="none"||currDisplay===""){
        document.getElementById("popup").style.display="block"; 
        document.getElementById("popup-btn").style.display="none";
    }
    else {
        document.getElementById("popup").style.display="none";  
        document.getElementById("popup-btn").style.display="block";
          
    }
    // Attention Needed
    // let currDisplay=document.getElementById("popup").classList;
    // console.log(currDisplay)
    // if(currDisplay.contains("inactive")){
    //     currDisplay.remove("inactive")
    //     currDisplay.add("active")
    // }
    // else{
    //     currDisplay.remove("active")
    //     currDisplay.add("inactive")
    // }
}

function getResults(){
    input= document.getElementById('inp').value;      
    getInfo(input);
    console.log(input);
};



var map = L.map('map');
const drawMap=(lat,lng)=>{
    console.log(lat ,lng);
   map.setView([lat, lng], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    L.marker([lat, lng]).addTo(map);
}
drawMap(37.38605,-122.0);








// Object prototype:
// data={
//     "ip": "142.250.191.78",
//     "location": {
//         "country": "US",
//         "region": "California",
//         "city": "Mountain View",
//         "lat": 37.38605,
//         "lng": -122.08385,
//         "postalCode": "94035",
//         "timezone": "-07:00",
//         "geonameId": 5375480
//     },
//     "domains": [
//         "alt-11007.atap.google.com",
//         "aalia-medispa.business.site",
//         "alt-1100713.email.google.com",
//         "alt29097.lh4.google.com",
//         "alt27505.images.google.com"
//     ],
//     "as": {
//         "asn": 15169,
//         "name": "GOOGLE",
//         "route": "142.250.0.0/15",
//         "domain": "https://about.google/intl/en/",
//         "type": "Content"
//     },
//     "isp": "Google LLC",
//     "proxy": {
//         "proxy": false,
//         "vpn": false,
//         "tor": false
//     }
// };











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