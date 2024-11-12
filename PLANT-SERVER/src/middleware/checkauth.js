const jwt=require('jsonwebtoken')

module.exports=(req,res,next)=>{
    try {
        const token=(req.headers.authorization).split(" ")[1];
        console.log(req.headers.authorization);

        const decodedToken=jwt.verify(token,"private-key");
        console.log("decoded==>",decodedToken);
        
        req.userData={userLoginId:decodedToken.userLoginId,role:decodedToken.role,email:decodedToken.email,status:decodedToken.status}
        console.log(req.userData);
        
        next();
    } catch (error) {
        res.status(401).json({
            message:'Auth failed! please login'
        })
    }
}