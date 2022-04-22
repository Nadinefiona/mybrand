const User = require('../model/User');
const jwt = require('jsonwebtoken');
 const {registerValidation, loginValidation} = require('../routes/validation');
// const bcrypt = require('bcryptjs');


//validation
const Joi = require('@hapi/joi');
const bcrypt = require('bcryptjs/dist/bcrypt');



// const schema = {
//     name: Joi.string()
//         .min(6)
//         .required(),
//     email: Joi.string()
//         .min(6)
//         .required()
//         .email(),
//     password: Joi.string()
//         .min(6)
//         .required()
// }
const schema = Joi.object({ name: Joi.string() .min(6) .required(),
    email: Joi.string() .min(6) .required() .email(),
    password: Joi.string() .min(6) .required() });


module.exports = {
    register: async (req,res) => {

        //Lets validate   the data before  we  create a user
        // const validation = Joi.validate(req.body, schema);
        // res.send(validation);
    
        const {error} = schema.validate(req.body);
        if(error) return res.status(400).send(error.details[0].message);
    
        //checking if the  user  is always exist in  the database
        const emailExist = await User.findOne(req.body);
        if(emailExist) return res.status(400).send('Email already exist');
    
    
        //hash the password
        // const salt = await bcrypt.gentSalt(10);
        // const hashedPassword = await bcrypt.hash(req.body.password,salt);
    
    
        //create  a new  user
        const user = new User ({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });
        try{
           const savedUser = await user.save()
           res.send(savedUser);
        }catch(err){
            res.status(400).send(err);
        }
    },


   login: async (req,res) => {

    const {error} = schema.validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);


    //checking if  the email is  already exist
    const user = await User.findOne(req.body);
    if(!user) return res.status(400).send('Email is not found');

    //check if password is correct
     

    // const validPass =  await bcrypt.compare.apply(req.body.password, user.password);
    // if(!validPass) return res.status(400).send('Invalid password')


    // const token = jwt.sign({_id: user.id},process.env.TOKEN_SECRET);
    // res.header('auth_token',token).send(token);

     res.send('Login successful!');

}
}