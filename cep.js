let lat = localStorage.GetItem('Latitude');
let lng = localStorage.GetItem('Longitude');
let city = localStorage.GetItem('cidade');






function mapa2(x, y, z){
    var map = L.map('map').setView([x, y], 13);
    let f = document.getElementById('map');
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([x, y]).addTo(map)
        .bindPopup(z)
        .openPopup();
}


function gCep(){

    let inputCep = document.getElementById('cep');
    var btn = document.getElementById('buscar')
    let cep = inputCep.value;

    if(cep.length !=8){
        alert('CEP inválido!')
        location.reload();
    }
    
    

    
    if(btn.classList.contains("novaBusca")){
        location.reload();
        
    }
    
    

    fetch('https://cep.awesomeapi.com.br/json/'+cep)
    .then(data => {
    return data.json();
    })
    .then(post => {

       


        let lat = post.lat;
        let lng = post.lng;
        let city = post.city;
        
        
        /* localStorage.setItem('Latitude', post.lat);
        localStorage.setItem('Longitude', post.lng);
        localStorage.setItem('cidade', post.city); */

        mapa2(lat, lng, city)
       
        /* location.reload(); */

        
        
    })

     
        btn.textContent = `Nova Busca`;
        btn.classList.add("novaBusca");
        inputCep.classList.add("cep-none");

}