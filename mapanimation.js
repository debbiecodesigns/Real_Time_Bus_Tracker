const busStops = [
    [-73.86071055108722, 40.83864693897457],
    [-73.86903436026549, 40.83628443029487],
    [-73.93545142409606, 40.800435021170024],
    [-73.96130200546851, 40.78050096159244],
    [-73.96737477546105, 40.77218874728008],
    [-73.97347615707858, 40.76384560520182],
    [-73.97678843416404, 40.759317322446115],
    [-73.98076234709833, 40.75396676700098],
    [-73.98457994445401, 40.74867250498832],
    [-73.98769992760846, 40.74123842728194],
];

mapboxg1.accessToken = 'pk.eyJ1IjoiYXJ0ZGViIiwiYSI6ImNrd2VmemMxZDA0YzEyb296eXkydWVwMXoifQ.Yx7cvvTs1dsW3x2sXLEBQA';

let map = new mapboxg1.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center:  [-73.86071055108722, 40.83864693897457],
    zoom: 14,
});

const marker = new mapboxgl.Marker()
.setLngLat([-73.86071055108722, 40.83864693897457])
.addTo(map);

let counter = 0;
function move() {
    setTimeout(() =>{
        if (counter >= busStops.length) return;
        marker.setLngLat(busStops[counter]);
        counter++;
        move();
      }, 1000);
}

if (typeof module !== 'undefined') {
    module.exports = { move };
  }
  