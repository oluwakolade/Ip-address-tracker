'use strict';
const form = document.querySelector('form');
const searchInput = document.querySelector(".input");
const submitBtn = document.querySelector(".submit");
const ipAddress = document.querySelector("#ip-el");
const locationEl = document.querySelector("#locate-el");
const timeZoneEL = document.querySelector("#tz-el");
const ispEl = document.querySelector("#isp-el");
// const map = document.querySelector("#map");
const errorMsg = document.querySelector('.error');





const getIpAddress = function(){
    const ipAddressValue = searchInput.value

    if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipAddressValue))
    {
        if(ipAddressValue){
    fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_oVYZTuQ2vDK9ctFGABkdcjcQagypX&ipAddress=${ipAddressValue}`)
    .then((res) => res.json())
    .then((res) => {
        ipAddress.textContent = res.ip;
        locationEl.textContent = res.location.region;
        timeZoneEL.textContent = res.location.timezone;
        ispEl.textContent = res.isp;
       const lng  = res.location.lng;
     const lat = res.location.lat;
     mapContainer(lat,lng);
    });
    
        }  
    } else {

        errorMsg.classList.remove("hide");

    } 
    
        searchInput.value = null;
 }

const mapContainer = function(lat,lng){

const map = L.map('map').setView([lat,lng], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
maxZoom: 19,
attribution: '© OpenStreetMap'
}).addTo(map);
var marker = L.marker([lat,lng]).addTo(map);

};




submitBtn.addEventListener('click', getIpAddress);
// fetch api

// ${ipAddressValue}



