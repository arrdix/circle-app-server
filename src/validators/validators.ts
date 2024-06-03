import Joi from 'joi'

const registerSchema = Joi.object({
    username: Joi.string().min(4).max(255).required(),
    email: Joi.string().email().required(),
    name: Joi.string().min(4).required(),
    password: Joi.string().min(4).required(),
    avatar: Joi.string().uri().allow(null),
    bio: Joi.string().max(255).allow(null),
})

const loginSchema = Joi.object({
    username: Joi.string().min(4).max(255).required(),
    password: Joi.string().min(4).required(),
})

const forgotPasswordSchema = Joi.object({
    email: Joi.string().email().required(),
})

const resetPasswordSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(4).required(),
})

const vibeSchema = Joi.object({
    content: Joi.string().max(255).required(),
    image: Joi.string().uri().allow(null),
    authorId: Joi.number().required(),
})

const replySchema = Joi.object({
    content: Joi.string().max(255).required(),
    image: Joi.string().uri().allow(null),
    authorId: Joi.number().required(),
    targetId: Joi.number().required(),
})

const userSchema = Joi.object({
    id: Joi.number().required(),
    username: Joi.string().min(4).max(255).required(),
    name: Joi.string().min(4).required(),
    avatar: Joi.string().uri().allow(null),
    bio: Joi.string().max(255).allow(null),
})

export {
    registerSchema,
    loginSchema,
    forgotPasswordSchema,
    resetPasswordSchema,
    vibeSchema,
    replySchema,
    userSchema,
}
