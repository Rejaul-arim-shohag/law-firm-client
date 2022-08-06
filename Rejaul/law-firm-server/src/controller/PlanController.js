const OurPlanModel = require("../model/ourPlanModel");

exports.createOurPlan = (req, res) => {
    OurPlanModel.create(req.body, (err, data) => {
        if (err) {
            res.status(500).json({ "status": "fail", "data": err })
        } else {
            res.status(200).json({ "status": "success", "data": data })
        }
    })
}

exports.readOurPlans = (req, res) => {
    OurPlanModel.aggregate([
        {
            $project: {
                _id: 1,
                planName:1,
                fee: 1,
                extrabenifit: 1,
                services:1,
        }
        }
    ], (err, data) => {
        if(err){
            res.status(500).json({"status":"fail", "data":err})
        } else{
            res.status(200).json({"status":"success", "data":data})
        }
    })
}

exports.updateOurPlan=(req, res)=>{
    const PlanID=req.params.PlanID;
    OurPlanModel.updateOne({_id:PlanID},req.body, (err, data)=>{
        if(err){
            res.status(500).json({"status":"fail", "data":err})
        } else{
            res.status(200).json({"status":"success", "data":data})
        }
    })
}
exports.deleteOurPlan=(req, res)=>{
    const PlanID=req.params.PlanID;
    OurPlanModel.deleteOne({_id:PlanID}, (err, data)=>{
        if(err){
            res.status(500).json({"status":"fail", "data":err})
        } else{
            res.status(200).json({"status":"success", "data":data})
        }
    })
}