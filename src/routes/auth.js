// const router = require('express').Router();
import express from 'express';
import User from '../model/User';
import jwt from'jsonwebtoken';
import {register,login, UserbyId, allUsers} from '../controllers/Auth.Controller';
import {registerValidation, loginValidation} from'../routes/validation';
import Joi from'@hapi/joi';
import bcrypt from'bcryptjs/dist/bcrypt';
const router = express.Router();


//ADD NEW USER
router.post('/register', register);

//GET ALL  USERS
router.get('/register', allUsers);

//GET USER BY ID
router.get('/register/:userId' , UserbyId);

//LOGIN
router.post('/login', login);


export default router;