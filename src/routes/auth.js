// const router = require('express').Router();
import express from 'express';
import User from '../model/User';
import jwt from'jsonwebtoken';
import authorization from '../Middlewares/Authorization';
import {register,login, UserbyId, allUsers} from '../controllers/Auth.Controller';
import {registerValidation, loginValidation} from'../routes/validation';
import Joi from'@hapi/joi';
import bcrypt from'bcryptjs/dist/bcrypt';
const router = express.Router();


//ADD NEW USER
router.post('/', register);

//GET ALL  USERS
router.get('/', allUsers);

//GET USER BY ID
router.get('/:userId' , UserbyId);

//LOGIN
router.post('/login', login);


export default router;