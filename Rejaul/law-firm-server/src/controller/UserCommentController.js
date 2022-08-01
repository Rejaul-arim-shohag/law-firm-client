const commentModel=require("../model/userCommentModel")
const UserModel = require ("../model/userModel");

exports.createUserComment=(req, res)=>{
    const email = req.headers['email'];
    const reqBody ={
        email: email,
        comment: req.body.comment,
    };
    commentModel.create(reqBody, (err,data)=>{
        if(err){
            res.status(400).json({"status":"fail", "data":err})
        } else{
            res.status(200).json({"status":"success", "data":data})
        }
    })
}

exports.readComment=(req, res)=>{
    UserModel.aggregate([
        {$lookup:
            {from:"comments", localField:"email", foreignField:"email", as:"comments"}
        },
        { $sort: { id: -1 } },
        {$project:{
            _id:0,
            commentId:{ $last: "$comments._id" },
            fullName:1,
            photo:1,
            comment: { $last: "$comments.comment" },
        }}

    ],(err, data)=>{
        if(err){
            res.status(400).json({"status":"fail", "data":err})
        } else{
            res.status(200).json({"status":"success", "data":data})
        }
    })
}

exports.deleteComment=(req, res)=>{
    const commentId=req.params.id;
    commentModel.deleteOne({_id:commentId}, (err, data)=>{
        if(err){
            res.status(500).json({"status":"fail", "data":err})
        } else{
            res.status(200).json({"status":"success", "data":data})
        }
    })
}