const Car = require("../Model/Car-Model");

const getAllCars = async (req,res,next)=>{
    let car;
    try{
        car = await Car.find(); 
    } catch(err){
        console.log(err);
    }
    if(!car){
        return res.status(404).json({message: "Car not found"});
    }
     return res.status(200).json({car});
}


const getById = async (req,res,next)=>{
    const id = (req.params.id).trim();
    let car;
    try{
        car = await Car.findById(id);
    } catch(err){
        console.log(err);
    } 
    if(!car){
        return res.status(404).json({message: "Car not found"});
    }
    return res.status(200).json({car});
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
const updateCar = async (req,res,next) => {
    const id = (req.params.id).trim();
    const {model, number, seating, rent, image} = req.body;
    let car;
    try{
        car = await Car.findByIdAndUpdate(id, {
            model, number, seating, rent, image
        })
         await car.save();
    } catch(err){
        console.log(err)
    }
    if(!car){
        return res.status(404).json({message: "Cant update Car"});
     }
     return res.status(200).json({car})
};

const deleteCar = async (req,res,next)=> {
    const id = (req.params.id).trim();
    let car ;
    try{
        car = await Car.findByIdAndRemove(id);
    } catch(err){
        console.log(err)
    }
    if(!car){
        return res.status(404).json({message: "Cant delete Car"});
     }
     return res.status(200).json({message: "Prodcut Successfully Deleted"})
}

exports.getAllCars = getAllCars;
exports.getById = getById;
exports.addCar = addCar;
exports.updateCar = updateCar;
exports.deleteCar = deleteCar;