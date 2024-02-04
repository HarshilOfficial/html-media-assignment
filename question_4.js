/* During execution, each expression will be executed from left to right and the rightmost expression will be returned.*/

function Func1() {
    console.log('one');
    return 'one';
}
function Func2() {
    console.log('two');
    return 'two';
}
function Func3() {
    console.log('three');
    return 'three';
}
let x = (Func1(), Func2(), Func3());

console.log(x);
