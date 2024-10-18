let cars = ["BMW", "Audi", "Farari "];

let carDetails = {
    bmw : "Normal car",
    Audi : "150+ Speed",

    AudiSpeed:function(){
        console.log(`Audi cars normal speed is : ${this.audi}`);
        
    }
}


Object.prototype.color = function(){
    console.log(`color is present in all objects`);
}

Array.prototype.allpetrol = function(){
    console.log(`Yes, All cars are in petrol`);
}


cars.color()
cars.allpetrol()

carDetails.color()
carDetails.allpetrol()
