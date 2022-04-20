const Car = require("../Model/Car-Model");

const getAllCars = async (req,res,next)=>{
    let cars;
    try{
        cars = await Car.find(); 
    } catch(err){
        console.log(err);
    }
    if(!cars){
        return res.status(404).json({message: "Car not found"});
    }
     return res.status(200).json({cars});
}


const getById = async (req,res,next)=>{
    const id = req.params.id;
    let car;
    try{
        car = await Car.findById(id);
    } catch(err){
        console.log(err);
    } 
    if(!car){
        res.status(404).json({message: "Car not found"});
    }
    res.status(200).json({book});
}

const addCar = async (req,res,next)=> {
    const{model, number, seating, rent, image} = req.body;
    let car;
    try {
        car = new Car({
            model,
            number,
            seating,
            rent,
             image
        });
        await car.save();
    } catch(err){
        console.log(err);
    }
    if(!car){
       return res.status(500).json({message: "Cant Add Car"});
    }
    return res.status(201).json({car})
}

exports.getAllCars = getAllCars;
exports.getById = getById;
exports.addCar = addCar;