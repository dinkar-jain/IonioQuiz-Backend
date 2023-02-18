import jwt from "jsonwebtoken";

const getToken = (User) => {
    return jwt.sign(User.toJSON(), process.env.JWT_SECRET, {
        expiresIn: 86400
    })
}

const IsAuth = (req, res, next) => {
    const Token = req.headers.authorization;
    if (Token) {
        jwt.verify(Token, process.env.JWT_SECRET, (err, decode) => {
            if (err) {
                return res.status(401).send({ msg: "Invalid Token" })
            }
            req.user = decode;
            next();
            return
        })
    }

    else {
        return res.status(401).send({ msg: "Token Is Not Supplied" })
    }
}

export { getToken, IsAuth };