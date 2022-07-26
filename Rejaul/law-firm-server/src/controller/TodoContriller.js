const TodoModel = require("../model/TodoModel");
//create
exports.CreateTodo=(req, res)=>{
    TodoModel.create(req.body, (err, data)=>{
        if(err){
            res.status(500).json({"status":"fail", "data":err})
        } else{
            res.status(200).json({"status":"success", "data":data})
        }
    })
}

exports.UpdateTodo=(req, res)=>{
    TodoModel.updateOne(req.body, (err, data)=>{
        if(err){
            res.status(500).json({"status":"fail", "data":err})
        } else{
            res.status(200).json({"status":"success", "data":data})
        }
    })
}

exports.DeleteTodo=(req, res)=>{
    const id= req.params.id;
    console.log(id)
    TodoModel.deleteOne({_id:id}, (err, data)=>{
        if(err){
            res.status(500).json({"status":"fail", "data":err})
        } else{
            res.status(200).json({"status":"success", "data":data})
        }
    })
}

exports.ReadTodo=(req, res)=>{
    TodoModel.find((err, data)=>{
        if(err){
            res.status(500).json({"status":"fail", "data":err})
        } else{
            res.status(200).json({"status":"success", "data":data})
        }
    })
}
exports.ReadTodoById=(req, res)=>{
    TodoModel.find({_id:req.params.id}, (err, data)=>{
        if(err){
            res.status(500).json({"status":"fail", "data":err})
        } else{
            res.status(200).json({"status":"success", "data":data})
        }
    })
}

