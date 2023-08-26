var express = require("express");
var router = express.Router();

const mongoose = require("mongoose");
const { dbUrl } = require("../common/dbConfig");
const { MovieModel } = require("../schemas/moviesSchemas");
const { validate } = require("../common/auth");
mongoose.connect(dbUrl);

// POST Add A Movie Review
router.post("/addMovieReview", async function (req, res) {
  try { 
    let data= await MovieModel.create(req.body) 
    res.status(200).send({message:"Movie Review Created Successfully",data})  
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error", error });
  }
});

// GET ALL
router.get("/",validate, async function (req, res, next) {
  try {
    let data= await MovieModel.find({})
    res.status(200).send({message:"Movie Reviews Fetched Successfully",data}) 
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error", error });
  }
});

// GET By ID 
router.get("/getMovieReview/:id", async function (req, res, next) {
  try {
    let data= await MovieModel.find({_id:req.params.id})
    console.log(data);
    res.status(200).send({message:"Movie Review's Data Fetched Successfully",data}) 
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error", error });
  }
});

// PUT Update A Movie Review 
router.put("/updateMovieReview/:id", async function (req, res, next) {
  try {
    let data= await MovieModel.findOneAndUpdate({_id:req.params.id},req.body)      
    console.log(data);
    res.status(200).send({message:"Movie Review's Data Fetched Successfully",data}) 
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error", error });
  }
});


//DELETE A Movie Review
router.delete("/deleteMovieReview/:id",async function(req,res){
  try {
    let data=await MovieModel.deleteOne({_id:req.params.id})
    console.log(req.params.id)
    res.status(200).send({message: "A Movie Review Deleted Successfully", data});
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error", error });
  }
})



module.exports = router;
