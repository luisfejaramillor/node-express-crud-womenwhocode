// /**
//  * GET route handler for "/middleware" endpoint
//  * @param {Object} req - The request object representing HTTP request made to server
//  * @param {Object} res - The response object representing HTTP response sent by server
//  */

// export const logger = (req, res, next)=> {
//     console.log(req.url)
//     next()
// }

// export const isAuthenticated = (req, res, next)=> {
//     if(req.query.login === 'true'){
//         console.log('true')
//         next()
//         return
//     }
//     res.send('Not autheticated')
// }