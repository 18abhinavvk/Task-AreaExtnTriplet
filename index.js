//Area of a Triangle with three sides given

let x = 07;
let y = 20;
let z = 18;
let s = (x+y+z)/2
let parea= s*(s-x)*(s-y)*(s-z) 
let area =Math.sqrt(parea)

console.log("Area of the triangle with three sides given is:"+area);

//To Get Extension of Filename

function getextension(filename){
    const extension = filename.split('.').pop();
    return extension;
}
let ext = getextension('index.html');
console.log(ext);
let extn = getextension('OOPS.py')
console.log(extn)

//Triplet of sum

let a = 07;
let b = 18;
let c = 3*(a+b);
console.log("The Tripled Sum of a and b is: "+c);