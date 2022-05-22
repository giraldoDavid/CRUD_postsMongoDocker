import Joi from 'joi';

const authSchemas = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});

export default authSchemas;