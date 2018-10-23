// Initialize app
var myApp = new Framework7();

var player;
var intv;
window.onload = function() {
    player = document.getElementById('myMusic');
    document.getElementById('btnPlay').addEventListener('click', function(e) {
        e.preventDefault();
        player.play();
        document.getElementById('duration').innerHTML = Math.round(player.duration) + " seconds";
        document.getElementById('position').innerHTML = 0 + " - ";
        intv = setInterval(displayTime, 1000);
    });
    document.getElementById('btnPause').addEventListener('click', function(e) {
        e.preventDefault();
        player.pause();
    });
    document.getElementById('btnStop').addEventListener('click', function(e) {
        e.preventDefault();
        player.pause();
        player.currentTime = 0;
    });
    function displayTime(e) {
        document.getElementById('position').innerHTML = Math.round(player.currentTime) + " - ";
    }
    var rngVol = document.getElementById('rngVolume');
    rngVol.addEventListener("touchdown", function(){
        var volume = this.value;
        player.volume = volume;
    }, false);
    rngVol.addEventListener("touchmove", function(){
        var volume = this.value;
        player.volume = volume;
    }, false);
}
document.getElementById("btnCaptureAudio").addEventListener("click", audioCapture);
document.getElementById("btnCaptureImage").addEventListener("click", imageCapture);
document.getElementById("btnCaptureVideo").addEventListener("click", videoCapture);
function audioCapture() {
    var options = {
       limit: 1,
       duration: 10
    };
    navigator.device.capture.captureAudio(onSuccess, onError, options);
 
    function onSuccess(mediaFiles) {
       var i, path, len;
       for (i = 0, len = mediaFiles.length; i < len; i += 1) {
          path = mediaFiles[i].fullPath;
          document.getElementById('captureResult').innerHTML = "Capture Successful: " + path;
       }
    }
 
    function onError(error) {
       navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
    }
 }
 function imageCapture() {
    var options = {
       limit: 1
    };
    navigator.device.capture.captureImage(onSuccess, onError, options);
 
    function onSuccess(mediaFiles) {
       var i, path, len;
       for (i = 0, len = mediaFiles.length; i < len; i += 1) {
          path = mediaFiles[i].fullPath;
          document.getElementById('captureResult').innerHTML = "Record Successful: " + path;
       }
    }
 
    function onError(error) {
       navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
    }
 }
 function videoCapture() {
    var options = {
       limit: 1,
       duration: 10
    };
    navigator.device.capture.captureVideo(onSuccess, onError, options);
 
    function onSuccess(mediaFiles) {
       var i, path, len;
       for (i = 0, len = mediaFiles.length; i < len; i += 1) {
          path = mediaFiles[i].fullPath;
          document.getElementById('captureResult').innerHTML = "Capture Successful: " + path;
       }
    }
 
    function onError(error) {
       navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
    }
 }
