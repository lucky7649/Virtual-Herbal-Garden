const jwt = require("jsonwebtoken");

const authenticateUser = (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");  // Extract token from the Authorization header

  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
      console.log(decoded);
    // Attach user information to the request
    req.userId = decoded.userId; // Assuming JWT payload has userId
    req.isAdmin = decoded.isAdmin; 
    req.token = token;
   
    // If your JWT has isAdmin, you can use it
    next();
  } catch (err) {
    return res.status(401).json({ message: "Token is not valid" });
  }
};

module.exports = authenticateUser;
