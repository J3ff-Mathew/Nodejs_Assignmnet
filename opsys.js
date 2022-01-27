import os from 'os'

console.log("os architecture" + os.arch());
console.log("chrome priority " + os.getPriority(1140));
console.log("free system memory " + os.freemem());
console.log("os version " + os.version());
let cores = os.cpus();
cores.forEach(element => {

    console.log(element.model);
    console.log(element.speed);
    console.log(element.times);
    console.log("--------------------");
});

// console.log("os architecture" + os.arch());
// console.log("os architecture" + os.arch());
// console.log("os architecture" + os.arch());
// console.log("os architecture" + os.arch());
// console.log("os architecture" + os.arch());
// console.log("os architecture" + os.arch());