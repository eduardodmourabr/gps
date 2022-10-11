let h2 = document.querySelector('h4');

function success(pos){
    h2.textContent = `Latitude: ${pos.coords.latitude}, Longitude: ${pos.coords.longitude}`;

    var map = L.map('map').setView([pos.coords.latitude, pos.coords.longitude], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([pos.coords.latitude, pos.coords.longitude]).addTo(map)
        .bindPopup('Você está aqui!')
        .openPopup();
    
}
function error(err){
    console.log(err);
}
var whatchID = navigator.geolocation.watchPosition(success, error, {
    enableHighAccuracy:true,
    timeout: 5000
});








