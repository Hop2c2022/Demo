const { TokenChecker } = require("./helper")

exports.TokenCheckerMiddleware = async (req, res, next) => {
    const token = req?.headers?.authorization.split(" ")[1]
    const secret = "boomcahca12345678"

    const result = await TokenChecker({token, secret})

    if(!token){
        console.log("sajhfdahsghfgdshghjgdhsvhcdhg");
        res.status(401).send({ message: "No Token provided!" })
        res.send( "No Token provided!")
    }

    res.send(result)
    if(result.userId) {
        next()
        res.send( "you may come in")
    } else if(result === "Expired Token"){
        res.status(401).send({ message: "Your token is expired!" })
        res.send( "Your token is expired!")
    } 
}