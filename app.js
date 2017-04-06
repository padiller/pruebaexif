/*eslint-env node*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

// This application uses express as its web server
// for more info, see: http://expressjs.com
var express = require('express');

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');

// create a new express server
var app = express();

// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));

// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();

// start server on the specified port and binding host
app.listen(appEnv.port, '0.0.0.0', function() {
  // print a message when the server starts listening
  console.log("server starting on " + appEnv.url);
});




    document.getElementById("file-input").onchange = function(e) {
        EXIF.getData(e.target.files[0], function() {
            var latitude = EXIF.getTag(this, "GPSLatitude"),
                longitude = EXIF.getTag(this, "GPSLongitude");
            alert("Latitud: " + (latitude[0] + (latitude[1]/60) + (latitude[2]/3600)) + "\nLongitud: " + (longitude[0] + (longitude[1]/60) + (longitude[2]/3600)));
        });


    }



  var map, heatmap;

  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      zoom: 16,
      center: {lat: 19.371413, lng: -99.263024},
      mapTypeId: 'roadmap'
    });

    heatmap = new google.maps.visualization.HeatmapLayer({
      data: getPoints(),
      map: map
    });
  }

  function getPoints() {
    return [
      {location: new google.maps.LatLng(19.371231, -99.260835), weight: 3}
    ];
  }


