
// наибольший общий делитель nod
// наименьшее общее кратное nok
//alert('привет мир');
function nod(a, b) {
    
    while (a != 0 && b != 0) {
        if (a > b) {
            a = (a % b);
        } else {
            b = (b % a);
        }
    }
    return a + b;
}

function main() {
    console.log(nod(25, 10));
    console.log(nod(50, 15));
}
main();