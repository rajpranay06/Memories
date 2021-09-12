import jwt from "jsonwebtoken";

/*  Midlleware functionality:
    if user wants to like a post
    he clicks on the like button 
    => auth middleware checks and verifies the user 
    and if middleware approves the next() 
    => user likes the post */

const secret = 'test';

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    // If token length < 500 it is our own else it is google auth
    const isCustomAuth = token.length < 500;

    let decodedData;

    if (token && isCustomAuth) {    
        // we get user info if we are working with our own token  
        decodedData = jwt.verify(token, secret);

        req.userId = decodedData?.id;
    } else {
        // if we are using google auth token
        decodedData = jwt.decode(token);

        req.userId = decodedData?.sub;
    }    

    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;