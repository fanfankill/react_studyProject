module.exports=(req,res,next)=>{
    console.log('、');
    if(req.method==="Post" && req.path==="/login"){
        if(req.body.username==='fanfan' && req.body.password==='20010620'){
            return res.status(200).json({
                user:{
                    token:'123'
                }
            })
        }
        else{
            return res.status(200).json({
                message:'用户名或者密码错误'
            })
        }
    }
    next()
}