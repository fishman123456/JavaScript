
function makeplane(seat, engines, color, crew, weight) {
    {
        seat: seat;
        engines: engines;
        color: color;
        crew: crew;
        weight: weight;
    }
    return plane
}

function printplane(plane) {
    alert(`
    места: ${plane.seat};
    двигатели: ${plane.engines};
    цвет: ${plane.color};
    экипаж: ${plane.crew};
    вес: ${plane.weight};`)
}
makeplane(1,2,3,"белый",5);
printplane(plane);
