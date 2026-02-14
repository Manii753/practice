

function hello(callback){
    setTimeout(()=>{
        console.log("HELLO!")
        callback();
    },3000)
    
}


function goodBye(){
    setTimeout(()=>{
        console.log("GoodBye!")
    },3000)
    
}


hello(goodBye);
