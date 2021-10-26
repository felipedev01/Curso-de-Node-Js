let sinal=process.argv.slice([2])
let c=0;
let a=Number(sinal[1]);
let b= Number(sinal[2]);
let f=10



if(sinal[0]==="+"){

    function soma(x,y){

        return c=x+y
    
    }

    soma(a,b);

}

else if(sinal[0]==="-"){

    function sub(x,y){

        return c= x-y
    
    }
    sub(a,b)


}else if(sinal[0]==="*"){

    function mult(x,y){

        return c= x*y
    
    }
    mult(a,b)
}


else{

    function div(x,y){

        return c= x/y
    
    }

    div(a,b)

}


let args=process.argv.slice([2])



console.log(c)