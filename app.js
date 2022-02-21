function findElement(arr,element,comfaratoRfm){
    let index=0;
    for(const item of arr){
        if(typeof element==='object' && 
            element !==null &&
            comfaratoRfm(element,item)
            ){
            return index;
        }
        if(item===element){
            return index;
        }
        index++;
    }
    
}

const arr=[5,3,10,-10,33,51];
console.log(findElement(arr,10));
console.log(findElement(arr,33));

//const pers={name:'Manu',age:33};

const objects=[
    {name:'Max',age:31},
    {name:'Manu',age:33},
];

console.log(findElement(objects, {name:'Manu',age:33},function(el,it){
    return el.name===it.name;
}));
