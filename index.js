const objectA = {
	a0: {
        a: "a",
    },
    a : {
  	        b: {
    	        c: {
      	            d: {
        	            e: "win!!", 
                    },
                },
            },
    },
    b: "b",
    c: "c",
}
//objectA["a0"]["a"] = "a"
//objectA["a"]["b"]["c"] = {d:{e:"win!!"}}
//objectA["a"]["b"]["c"]["d"]["e"] = "win"
//objectA["a"]["b"]_salto_["d"] = undefined
//objectA["a0"]["b"] = undefined


const extractData = ( object = {}, path = '', defaultResult = {} ) => {
    const path1 = path.split(".");
    //console.log("path1", path1);
    //let arreglo = [];
    defaultResult = object;
    for (let i=0; i<path1.length; i++) {
        //defaultResult = object[path1[i]];
        //console.log(path1[i]);
        //defaultResult.join(path1[i]); //pero no tiene sentido con split y luego join?
        //console.log("Resultado", object[path1[i]]);
        if(path1[i] === undefined) return;
        defaultResult = defaultResult[path1[i]];

    }
    return defaultResult;

    //console.log(arreglo);
    //return defaultResult;
    //path1.forEach(element => object[element]);
    //return null
}

//Decidí llevarlo al entorno de VSC

console.log("extractData of a.b.c is ", extractData(objectA, "a.b.c", {}));//  {d:{e:"win!!""}}
console.log("extractData of a.b.c.d.e is ", extractData(objectA, "a.b.c.d.e", "")); //"win!!"
console.log("extractData of a1.b.c.d.e is ", extractData(objectA, "a.b.d", []));//undefined
console.log("extractData of a1.b.c.d.e is ", extractData(objectA, "a0.b", {}));//undefined