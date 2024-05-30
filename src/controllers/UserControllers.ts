import { Request, Response } from 'express'
import UserDTO from '../dtos/UserDTO'
import ResponseDTO from '../dtos/ResponseDTO'
import ServiceResponseDTO from '../dtos/ServiceResponseDTO'
import UserServices from '../services/UserServices'

class UserControllers {
    async createUser(req: Request, res: Response) {
        const { username, email, name, password, avatar, bio } = req.body
        const userDTO = new UserDTO({ username, email, name, password, avatar, bio })

        const { error, payload }: ServiceResponseDTO<UserDTO> = await UserServices.createUser(
            userDTO
        )

        if (error) {
            return res.status(500).json(
                new ResponseDTO({
                    error,
                    message: payload,
                    data: null,
                })
            )
        }

        delete payload.password
        return res.status(500).json(
            new ResponseDTO({
                error,
                message: {
                    status: 'User created!',
                },
                data: payload,
            })
        )
    }
}

export default new UserControllers()
