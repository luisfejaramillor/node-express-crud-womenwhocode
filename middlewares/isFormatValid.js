import Joi from "joi"

export const isFormatValid = (req, res, next)=> {
    const querySchema = Joi.object({
        name: Joi.string().required(),
        description: Joi.string().required(),
        price: Joi.number().required(),
        qty: Joi.number().required(),
        category: Joi.string().required()
    })

    if(req.method ==='POST'){
      if(querySchema.validate(req.body).error){
        res.status(404).json("Input format data is not valid");
        return
      }
      next()
    }
    next()
}