var express = require("express");
var router = express.Router();

const mongoose = require("mongoose");
const { dbUrl } = require("../common/dbConfig");
const { MovieModel } = require("../schemas/moviesSchemas");
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
router.get("/", async function (req, res, next) {
  try {
    let data= await MovieModel.find({})
    res.status(200).send({message:"Movie Reviews Fetched Successfully",data}) 
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error", error });
  }
});

//DELETE A Movie Review
router.delete("/deleteMovieReview",async function(req,res){
  try {
    let data=await MovieModel.deleteOne({_id:req.body.id})
    res.status(200).send({message:`${data.name}'s Review Deleted Successfully`,data});
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error", error });
  }
})



module.exports = router;
