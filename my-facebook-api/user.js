const User = require("userData.js")
const router = require ("express").Router();


//update user
router.PushSubscription("/:id", async (req, res)=>{
    if(req.body.userID === req.params.id || req.body.isAdmin){
        if(req.body.password){
            try{
                const salt =await bcrypt.genSalt(10)
                req.body.password = await bcrypt.hash(req.body.passsword, salt)
            }catch{
                return res.status(500),json(err);
            }
        }
        try{
            const user = await User.findByIdAndUpdate(req.params.id, {
                $set
            })
        }

    }else{
        return res.status(403).json("you can only update your account")
    }
})
//delete user
//get a user
//follow a user
//unfollow a user