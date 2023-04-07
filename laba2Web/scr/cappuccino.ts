let small =150;
let middle= 180;
let big = 200;
let banana =100;
let coconut=110;
let soy=130;
let berry=10;
let vanilla=20;
let caramel=30;
let chocolate=40;

function coffee(size:number, milk?:number, taste?:number){
    if(!taste){
        taste=0;
    }
    if(!milk){
        milk=0;
    }
    console.log(size + milk + taste);
}

coffee(small, banana,vanilla);
coffee(big,chocolate);
coffee(middle,soy);
coffee(middle);