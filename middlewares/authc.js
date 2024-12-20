  
  
 const jwt = require('jsonwebtoken');

 const checkbToken = (req, res, next)=>{
    //Extract the token from the browser set cookies
    const token = req.cookies.authToken;

    if(token) { 
    //verify and decode the token
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user)=>{

        if(err) {
            return res.redirect('/IB/Welcome');
        }
 
        return res.redirect('/member/IB/profile');   
         

    });
    
 };
     next();
};

 module.exports = checkbToken;