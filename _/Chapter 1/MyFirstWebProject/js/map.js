/**
 * Created by denpatin on 23/01/15.
 */

var map;

function initialize() {
    var mapOptions = {
        zoom: 10
    };
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            var infowindow = new google.maps.InfoWindow({
                map: map,
                position: pos,
                content: 'I am here!'
            });
            map.setCenter(pos);
        }, function() {
            handleNoGeolocation(true);
        });
    } else {
        handleNoGeolocation(false);
    }
}

function handleNoGeolocation(errorFlag) {
    if (errorFlag) {
        var content = 'Error: The Geolocation service failed.';
    } else {
        var content = 'Error: Your browser doesn\'t support geolocation.';
    }
    var options = {
        map: map,
        position: new google.maps.LatLng(60, 105),
        content: content
    };
    var infowindow = new google.maps.InfoWindow(options);
    map.setCenter(options.position);
}

google.maps.event.addDomListener(window, 'load', initialize);
