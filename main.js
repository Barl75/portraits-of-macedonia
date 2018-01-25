$(document).ready(function () {
    /* Initialisation Popover
     ******************************************************************************/
    $(function () {
        $('[data-toggle="popover"]').popover()
    })
    /* Initialisation Map
     ******************************************************************************/
    var mymap = L.map('map').setView([42.002007, 21.43416], 17);

    /*Possibility 1  :
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png
    access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
    '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Imagery © <a href="http://mapbox.com">Mapbox</a>',
    id: 'mapbox.satellite'
    }).addTo(mymap);
    */

    /* Possibility 2 : 
    light_nolabels, 
    rastertiles/voyager_labels_under, 
    pitney-bowes-dark,
    dark_all,
    dark_nolabels,
    spotify_dark
    */

    L.tileLayer('http://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: 'cartodbAttribution'
    }).addTo(mymap);

    /* flyTo SKOPJE KAVADARCI STIP navbar
     ***********************************************************************/
    $('#stip').click(function () {
        mymap.flyTo([41.742243, 22.196159], 15);
    });
    $('#skopje').click(function () {
        mymap.flyTo([42.001274, 21.434836], 14);
    });
    $('#kavadarci').click(function () {
        mymap.flyTo([41.434104, 22.011795], 14);
    });


    /* MARKERS Skopje
     ********************************************************************************/
    /* VOLHAN icon, marker and icon2 (on hover) */
    var volhanIcon = L.icon({
        iconUrl: 'images/marqueurs/marqueur-volhan.png',
        iconSize: [80, 80], // size of the icon
        iconAnchor: [40, 40] // point of the icon which will correspond to marker's location
        /* popupAnchor: [-3, -30], // point from which the popup should open relative to the iconAnchor */
    });
    var markerVolhan = L.marker([42.002145, 21.428839], {
        icon: volhanIcon
    }, {
        title: 'Volhan'
    }, {
        alt: 'Volhan Icon'
    });
    var volhanIcon2 = L.icon({
        iconUrl: 'images/marqueurs/marqueur-volhan2.png',
        iconSize: [80, 80], // size of the icon
        iconAnchor: [40, 40] // point of the icon which will correspond to marker's location
    });

    /* GORAN */
    var goranIcon = L.icon({
        iconUrl: 'images/marqueurs/marqueur-goran.png',
        iconSize: [80, 80], // size of the icon
        iconAnchor: [40, 40] // point of the icon which will correspond to marker's location
    });
    var markerGoran = L.marker([42.010851, 21.405597], {
        icon: goranIcon
    }, {
        title: 'Goran'
    }, {
        alt: 'Goran Icon'
    });
    var goranIcon2 = L.icon({
        iconUrl: 'images/marqueurs/marqueur-goran2.png',
        iconSize: [80, 80], // size of the icon
        iconAnchor: [40, 40] // point of the icon which will correspond to marker's location
    });

    /* DIMITAR */
    var dimitarIcon = L.icon({
        iconUrl: 'images/marqueurs/marqueur-dimitar.png',
        iconSize: [80, 80], // size of the icon
        iconAnchor: [40, 40] // point of the icon which will correspond to marker's location
    });
    var markerDimitar = L.marker([41.993528, 21.463547], {
        icon: dimitarIcon
    }, {
        title: 'Dimitar'
    }, {
        alt: 'Dimitar Icon'
    });
    var dimitarIcon2 = L.icon({
        iconUrl: 'images/marqueurs/marqueur-dimitar2.png',
        iconSize: [80, 80], // size of the icon
        iconAnchor: [40, 40] // point of the icon which will correspond to marker's location
    });

    /* LEMI */
    var lemiIcon = L.icon({
        iconUrl: 'images/marqueurs/marqueur-lemi.png',
        iconSize: [80, 80], // size of the icon
        iconAnchor: [40, 40] // point of the icon which will correspond to marker's location
    });
    var markerLemi = L.marker([41.994622, 21.429999], {
        icon: lemiIcon
    }, {
        title: 'Lemi'
    }, {
        alt: 'Lemi Icon'
    });
    var lemiIcon2 = L.icon({
        iconUrl: 'images/marqueurs/marqueur-lemi2.png',
        iconSize: [80, 80], // size of the icon
        iconAnchor: [40, 40] // point of the icon which will correspond to marker's location
    });

    /* GORDANA and IGOR */
    var gordanaigorIcon = L.icon({
        iconUrl: 'images/marqueurs/marqueur-gordanaigor.png',
        iconSize: [80, 80], // size of the icon
        iconAnchor: [40, 40]
    });
    var markerGordanaIgor = L.marker([42.000127, 21.436804], {
        icon: gordanaigorIcon
    }, {
        title: 'GordanaAndIgor'
    }, {
        alt: 'Gordana and Igor Icon'
    });
    var gordanaigorIcon2 = L.icon({
        iconUrl: 'images/marqueurs/marqueur-gordanaigor2.png',
        iconSize: [80, 80], // size of the icon
        iconAnchor: [40, 40]
    });

    /* ROBERT */
    var robertIcon = L.icon({
        iconUrl: 'images/marqueurs/marqueur-robert.png',
        iconSize: [80, 80], // size of the icon
        iconAnchor: [40, 40] // point of the icon which will correspond to marker's location
    });
    var markerRobert = L.marker([42.000847, 21.435749], {
        icon: robertIcon
    }, {
        title: 'Robert'
    }, {
        alt: 'Robert Icon'
    });
    var robertIcon2 = L.icon({
        iconUrl: 'images/marqueurs/marqueur-robert2.png',
        iconSize: [80, 80], // size of the icon
        iconAnchor: [40, 40] // point of the icon which will correspond to marker's location
    });

    /* BLAZHEN */
    var blazhenIcon = L.icon({
        iconUrl: 'images/marqueurs/marqueur-blazhen.png',
        iconSize: [80, 80], // size of the icon
        iconAnchor: [40, 40] // point of the icon which will correspond to marker's location
    });
    var markerBlazhen = L.marker([42.003917, 21.432712], {
        icon: blazhenIcon
    }, {
        title: 'Blazhen'
    }, {
        alt: 'Blazhen Icon'
    });
    var blazhenIcon2 = L.icon({
        iconUrl: 'images/marqueurs/marqueur-blazhen2.png',
        iconSize: [80, 80], // size of the icon
        iconAnchor: [40, 40] // point of the icon which will correspond to marker's location
    });

//    /* SANDRA */
//    var sandraIcon = L.icon({
//        iconUrl: 'images/marqueurs/marqueur-sandra.png',
//        iconSize: [80, 80], // size of the icon
//        iconAnchor: [40, 40] // point of the icon which will correspond to marker's location
//    });
//    var markerSandra = L.marker([41.950442, 21.2991], {
//        icon: sandraIcon
//    }, {
//        title: 'Sandra'
//    }, {
//        alt: 'Sandra Icon'
//    });
//    var sandraIcon2 = L.icon({
//        iconUrl: 'images/marqueurs/marqueur-sandra2.png',
//        iconSize: [80, 80], // size of the icon
//        iconAnchor: [40, 40] // point of the icon which will correspond to marker's location
//    });

    /* ELEONORA */
    var eleonoraIcon = L.icon({
        iconUrl: 'images/marqueurs/marqueur-eleonora.png',
        iconSize: [80, 80], // size of the icon
        iconAnchor: [40, 40] // point of the icon which will correspond to marker's location
    });
    var markerEleonora = L.marker([42.000903, 21.438108], {
        icon: eleonoraIcon
    }, {
        title: 'Eleonora'
    }, {
        alt: 'Eleonora Icon'
    });
    var eleonoraIcon2 = L.icon({
        iconUrl: 'images/marqueurs/marqueur-eleonora2.png',
        iconSize: [80, 80], // size of the icon
        iconAnchor: [40, 40] // point of the icon which will correspond to marker's location
    });

    /* SHQIPE */
    var shqipeIcon = L.icon({
        iconUrl: 'images/marqueurs/marqueur-shqipe.png',
        iconSize: [80, 80], // size of the icon
        iconAnchor: [40, 40] // point of the icon which will correspond to marker's location
    });
    var markerShqipe = L.marker([42.001603, 21.437743], {
        icon: shqipeIcon
    }, {
        title: 'Shqipe'
    }, {
        alt: 'Shqipe Icon'
    });
    var shqipeIcon2 = L.icon({
        iconUrl: 'images/marqueurs/marqueur-shqipe2.png',
        iconSize: [80, 80], // size of the icon
        iconAnchor: [40, 40] // point of the icon which will correspond to marker's location
    });

    /* MODAL SKOPJE
     **********************************************************************/
    $(markerVolhan).click(function () {
        $('#modalVolhan').modal('show');
    });

    $(markerEleonora).click(function () {
        $('#modalEleonora').modal('show');
    });

    $(markerRobert).click(function () {
        $('#modalRobert').modal('show');
    });

    $(markerShqipe).click(function () {
        $('#modalShqipe').modal('show');
    });

    $(markerDimitar).click(function () {
        $('#modalDimitar').modal('show');
    });

    $(markerGoran).click(function () {
        $('#modalGoran').modal('show');
    });

    $(markerGordanaIgor).click(function () {
        $('#modalGordanaIgor').modal('show');
    });

    $(markerLemi).click(function () {
        $('#modalLemi').modal('show');
    });

//    $(markerSandra).click(function () {
//        $('#modalSandra').modal('show');
//    });

    $(markerBlazhen).click(function () {
        $('#modalBlazhen').modal('show');
    });

    /* Hover on marker icon -> change icon
     **********************************************************************/
    markerVolhan.on('mouseover', function () {
        markerVolhan.setIcon(volhanIcon2);
    });
    markerVolhan.on('mouseout', function () {
        markerVolhan.setIcon(volhanIcon);
    });

    markerGoran.on('mouseover', function () {
        markerGoran.setIcon(goranIcon2);
    });
    markerGoran.on('mouseout', function () {
        markerGoran.setIcon(goranIcon);
    });

    markerDimitar.on('mouseover', function () {
        markerDimitar.setIcon(dimitarIcon2);
    });
    markerDimitar.on('mouseout', function () {
        markerDimitar.setIcon(dimitarIcon);
    });

    markerLemi.on('mouseover', function () {
        markerLemi.setIcon(lemiIcon2);
    });
    markerLemi.on('mouseout', function () {
        markerLemi.setIcon(lemiIcon);
    });

    markerGordanaIgor.on('mouseover', function () {
        markerGordanaIgor.setIcon(gordanaigorIcon2);
    });
    markerGordanaIgor.on('mouseout', function () {
        markerGordanaIgor.setIcon(gordanaigorIcon);
    });

    markerRobert.on('mouseover', function () {
        markerRobert.setIcon(robertIcon2);
    });
    markerRobert.on('mouseout', function () {
        markerRobert.setIcon(robertIcon);
    });

    markerBlazhen.on('mouseover', function () {
        markerBlazhen.setIcon(blazhenIcon2);
    });
    markerBlazhen.on('mouseout', function () {
        markerBlazhen.setIcon(blazhenIcon);
    });

//    markerSandra.on('mouseover', function () {
//        markerSandra.setIcon(sandraIcon2);
//    });
//    markerSandra.on('mouseout', function () {
//        markerSandra.setIcon(sandraIcon);
//    });

    markerEleonora.on('mouseover', function () {
        markerEleonora.setIcon(eleonoraIcon2);
    });
    markerEleonora.on('mouseout', function () {
        markerEleonora.setIcon(eleonoraIcon);
    });

    markerEleonora.on('mouseover', function () {
        markerEleonora.setIcon(eleonoraIcon2);
    });
    markerEleonora.on('mouseout', function () {
        markerEleonora.setIcon(eleonoraIcon);
    });

    markerShqipe.on('mouseover', function () {
        markerShqipe.setIcon(shqipeIcon2);
    });
    markerShqipe.on('mouseout', function () {
        markerShqipe.setIcon(shqipeIcon);
    });

    /* Links menu to marker SKOPJE
     ********************************************************************************/
    $('#volhanbtn').click(function () {
        mymap.flyTo((markerVolhan.getLatLng()), 18);
    });
    $('#eleonorabtn').click(function () {
        mymap.flyTo((markerEleonora.getLatLng()), 18);
    });
    $('#robertbtn').click(function () {
        mymap.flyTo((markerRobert.getLatLng()), 18);
    });
    $('#shqipebtn').click(function () {
        mymap.flyTo((markerShqipe.getLatLng()), 18);
    });
    $('#dimitarbtn').click(function () {
        mymap.flyTo((markerDimitar.getLatLng()), 18);
    });
    $('#goranbtn').click(function () {
        mymap.flyTo((markerGoran.getLatLng()), 18);
    });
    $('#gordanaigorbtn').click(function () {
        mymap.flyTo((markerGordanaIgor.getLatLng()), 18);
    });
    $('#lemibtn').click(function () {
        mymap.flyTo((markerLemi.getLatLng()), 18);
    });
//    $('#sandrabtn').click(function () {
//        mymap.flyTo((markerSandra.getLatLng()), 18);
//    });
    $('#blazhenbtn').click(function () {
        mymap.flyTo((markerBlazhen.getLatLng()), 18);
    });

    /* MARKERS Kavadarci
     ********************************************************************************/
    /* Aneta */
    var anetaIcon = L.icon({
        iconUrl: 'images/marqueurs/marqueur-aneta.png',
        iconSize: [80, 80], // size of the icon
        iconAnchor: [40, 40] // point of the icon which will correspond to marker's location
    });
    var markerAneta = L.marker([41.433976, 22.013688], {
        icon: anetaIcon
    }, {
        title: 'Aneta'
    }, {
        alt: 'Aneta Icon'
    });
    var anetaIcon2 = L.icon({
        iconUrl: 'images/marqueurs/marqueur-aneta2.png',
        iconSize: [80, 80], // size of the icon
        iconAnchor: [40, 40] // point of the icon which will correspond to marker's location
    });

    /* Aleksander */
    var aleksanderIcon = L.icon({
        iconUrl: 'images/marqueurs/marqueur-aleksander.png',
        iconSize: [80, 80], // size of the icon
        iconAnchor: [40, 40] // point of the icon which will correspond to marker's location
    });
    var markerAleksander = L.marker([41.434032, 22.004178], {
        icon: aleksanderIcon
    }, {
        title: 'Aleksander'
    }, {
        alt: 'Aleksander Icon'
    });
    var aleksanderIcon2 = L.icon({
        iconUrl: 'images/marqueurs/marqueur-aleksander2.png',
        iconSize: [80, 80], // size of the icon
        iconAnchor: [40, 40] // point of the icon which will correspond to marker's location
    });

    /* MODAL KAVADARCI
     **********************************************************************/
    $(markerAneta).click(function () {
        $('#modalAneta').modal('show');
    });

    $(markerAleksander).click(function () {
        $('#modalAleksander').modal('show');
    });

    /* Hover on marker icon -> change icon
     **********************************************************************/
    markerAneta.on('mouseover', function () {
        markerAneta.setIcon(anetaIcon2);
    });
    markerAneta.on('mouseout', function () {
        markerAneta.setIcon(anetaIcon);
    });

    markerAleksander.on('mouseover', function () {
        markerAleksander.setIcon(aleksanderIcon2);
    });
    markerAleksander.on('mouseout', function () {
        markerAleksander.setIcon(aleksanderIcon);
    });

    /* Links menu to marker KAVADARCI
     ********************************************************************************/
    $('#anetabtn').click(function () {
        mymap.flyTo((markerAneta.getLatLng()), 18);
    });
    $('#aleksanderbtn').click(function () {
        mymap.flyTo((markerAleksander.getLatLng()), 18);
    });

    /* MARKERS Stip
     ********************************************************************************/
    /* Marija */
    var marijaIcon = L.icon({
        iconUrl: 'images/marqueurs/marqueur-marija.png',
        iconSize: [80, 80], // size of the icon
        iconAnchor: [40, 40] // point of the icon which will correspond to marker's location
    });
    var markerMarija = L.marker([41.734413, 22.20338], {
        icon: marijaIcon
    }, {
        title: 'Marija'
    }, {
        alt: 'Marija Icon'
    });
    var marijaIcon2 = L.icon({
        iconUrl: 'images/marqueurs/marqueur-marija2.png',
        iconSize: [80, 80], // size of the icon
        iconAnchor: [40, 40] // point of the icon which will correspond to marker's location
    });

    /* Anica */
    var anicaIcon = L.icon({
        iconUrl: 'images/marqueurs/marqueur-anica.png',
        iconSize: [80, 80], // size of the icon
        iconAnchor: [40, 40] // point of the icon which will correspond to marker's location
    });
    var markerAnica = L.marker([41.737888, 22.186117
], {
        icon: anicaIcon
    }, {
        title: 'Anica'
    }, {
        alt: 'Anica Icon'
    });
    var anicaIcon2 = L.icon({
        iconUrl: 'images/marqueurs/marqueur-anica2.png',
        iconSize: [80, 80], // size of the icon
        iconAnchor: [40, 40] // point of the icon which will correspond to marker's location
    });

    /* Riste */
    var risteIcon = L.icon({
        iconUrl: 'images/marqueurs/marqueur-riste.png',
        iconSize: [80, 80], // size of the icon
        iconAnchor: [40, 40] // point of the icon which will correspond to marker's location
    });
    var markerRiste = L.marker([41.741875, 22.186804], {
        icon: risteIcon
    }, {
        title: 'Riste'
    }, {
        alt: 'Riste Icon'
    });
    var risteIcon2 = L.icon({
        iconUrl: 'images/marqueurs/marqueur-riste2.png',
        iconSize: [80, 80], // size of the icon
        iconAnchor: [40, 40] // point of the icon which will correspond to marker's location
    });
    /* MODAL STIP
     **********************************************************************/
    $(markerMarija).click(function () {
        $('#modalMarija').modal('show');
    });

    $(markerAnica).click(function () {
        $('#modalAnica').modal('show');
    });

    $(markerRiste).click(function () {
        $('#modalRiste').modal('show');
    });

    /* Hover on marker icon -> change icon
     **********************************************************************/
    markerMarija.on('mouseover', function () {
        markerMarija.setIcon(marijaIcon2);
    });
    markerMarija.on('mouseout', function () {
        markerMarija.setIcon(marijaIcon);
    });

    markerAnica.on('mouseover', function () {
        markerAnica.setIcon(anicaIcon2);
    });
    markerAnica.on('mouseout', function () {
        markerAnica.setIcon(anicaIcon);
    });

    markerRiste.on('mouseover', function () {
        markerRiste.setIcon(risteIcon2);
    });
    markerRiste.on('mouseout', function () {
        markerRiste.setIcon(risteIcon);
    });

    /* Links menu to marker KAVADARCI
     ********************************************************************************/
    $('#marijabtn').click(function () {
        mymap.flyTo((markerMarija.getLatLng()), 18);
    });
    $('#anicabtn').click(function () {
        mymap.flyTo((markerAnica.getLatLng()), 18);
    });
    $('#ristebtn').click(function () {
        mymap.flyTo((markerRiste.getLatLng()), 18);
    });

    /* CLUSTERING by the Leaflet Cluster plugin
     ********************************************************************************/
    var markersClu = L.markerClusterGroup({
        showCoverageOnHover: false
    });
    markersClu.addLayer(markerRobert);
    markersClu.addLayer(markerGordanaIgor);
    markersClu.addLayer(markerVolhan);
    markersClu.addLayer(markerRobert);
    markersClu.addLayer(markerLemi);
    markersClu.addLayer(markerBlazhen);
    markersClu.addLayer(markerEleonora);
    markersClu.addLayer(markerShqipe);

//    markersClu.addLayer(markerSandra);
    markersClu.addLayer(markerDimitar);
    markersClu.addLayer(markerGoran);

    //Kavadarci
    var markersCluKa = L.markerClusterGroup({
        showCoverageOnHover: false
    });
    markersCluKa.addLayer(markerAleksander);
    markersCluKa.addLayer(markerAneta);

    //Stip
    var markersCluStip = L.markerClusterGroup({
        showCoverageOnHover: false
    });
    markersCluStip.addLayer(markerMarija);
    markersCluStip.addLayer(markerRiste);
    markersCluStip.addLayer(markerAnica);

    mymap.addLayer(markersClu);
    mymap.addLayer(markersCluStip);
    mymap.addLayer(markersCluKa);



    /* test clic=coordonnées
     **********************************************************************************  */
    /*function onMapClick(e) {
        alert("You clicked the map at " + e.latlng);
    }

    mymap.on('click', onMapClick);*/

    /*var popup = L.popup();

    function onMapClick(e) {
        popup
            .setLatLng(e.latlng)
            .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(mymap);
    }

    mymap.on('click', onMapClick);*/


});

/* if one audio is played, the others stop 
 **********************************************************************************  */
document.addEventListener('play', function (e) {
    var audios = document.getElementsByTagName('video');
    for (var i = 0, len = audios.length; i < len; i++) {
        if (audios[i] != e.target) {
            audios[i].pause();
        }
    }
}, true);

/* if the modal is left, audio stop 
 **********************************************************************************  */
/* document.addEventListener('hide.bs.modal', function(e){
    var audios = document.getElementsByTagName('video');
    audios.pause();

}, ); 

$('#modalVolhan').on('hidden.bs.modal', function (e) {
    $('#modalVolhan video').pause();
}) */

$('.modal').on('hide.bs.modal', function () { 
    $('video').each(function () {
        this.pause(); // Stop playing
    });
})

/*
$('#modalVolhan div.modal-header button').on('click', function(){
    $('#modalVolhan').modal('hide');
})
*/

