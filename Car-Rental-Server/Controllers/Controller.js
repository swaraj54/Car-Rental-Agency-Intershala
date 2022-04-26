
const Model = require("../Model/Model");

User = Model.User;
sellUser = Model.sellUser;

const login = async (req,res)=>{
    const { mail, password} = req.body;
    User.findOne({mail:mail}, (err,user)=>{
        if(user){
            if(password === user.password){
                res.send({message: "User Logged in",user})
            }else {
                console.log(user)
                res.send({message: "Check Password Again"})
            }
        } else {
            res.send({message:"User not Registered"})
        }
    })
}
const selllogin = async (req,res)=>{
    const { smail, spassword} = req.body;
    sellUser.findOne({smail:smail}, (err,suser)=>{
        if(suser){
            if(spassword === suser.spassword){
                res.send({message: "User Logged in",suser})
            }else {
                res.send({message: "Check Password Again"})
            }
        } else {
            res.send({message:"User not Registered"})
        }
    })
}

const register = async (req,res)=>{
    const {name, mail, password} = req.body;
    
    User.findOne({mail:mail}, (err,user)=>{
        if(user){
            console.log(user)
            res.send({message:"Already registered"})
            console.log(user)
        } else {
            const user = new User({
                name, mail, password
            })
            user.save( err=> {
                if(err){
                    res.send(err);
                } else {
                    res.send({message: "Regsitered"})
                }
            })
        }
    })
}
const sellregister = async (req,res)=>{
    const {sname, smail, spassword} = req.body;
    sellUser.findOne({smail:smail}, (err,suser)=>{
        if(suser){
            res.send({message:"Already registered"})
        } else {
            const suser = new sellUser({
                sname, smail, spassword
            })
            suser.save( err=> {
                if(err){
                    res.send(err);
                } else {
                    res.send({message: "Regsitered"})
                }
            })
        }
    })
}

exports.login = login;
exports.register = register;
exports.selllogin = selllogin;
exports.sellregister = sellregister;