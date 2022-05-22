import Joi from 'joi';

const postSchemas = Joi.object({
    userId: Joi.number().required(),
    id: Joi.number().required(),
    title: Joi.string().required(),
    body: Joi.string().required(),
    _id: Joi.string(),
});

export default postSchemas;