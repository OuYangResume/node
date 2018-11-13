const express=require('express')
const router=express.Router();
// const connection=require('./../uilts/mongoEngine')
var mongoose = require('mongoose')
mongoose.connect('mongodb://39.108.100.163:27017/test');


module.exports=router