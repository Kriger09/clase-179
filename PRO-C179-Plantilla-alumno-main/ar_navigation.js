var coord={}
$(document).ready(function(){
    getCoord();
})
function getCoord(){
    var param=new URLSearchParams(window.location.search)
    if (param.has("source")&&param.has("destination")) {
        var source=param.get("source");
        var destination=param.get("destination");
        coord.srcLat=source.split(";")[0];
        coord.srcLon=source.split(";")[1];
        coord.destLat=destination.split(";")[0];
        coord.destLon=destination.split(";")[1];
        console.log(coord);
    } else {
        alert("No hay coordenadas")
        window.history.back()
    }
}