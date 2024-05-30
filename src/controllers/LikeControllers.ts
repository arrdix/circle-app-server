import { Request, Response } from 'express'
import { LikeType } from '../types/types'
import LikeServices from '../services/LikeServices'
import ServiceResponseDTO from '../dtos/ServiceResponseDTO'
import ResponseDTO from '../dtos/ResponseDTO'

class LikeControllers {
    async likeMechanism(req: Request, res: Response) {
        const { authorId, vibeId } = req.body

        const { error, payload }: ServiceResponseDTO<LikeType> = await LikeServices.likeMechanism({
            authorId,
            vibeId,
        })

        if (error) {
            return res.status(500).json(
                new ResponseDTO<null>({
                    error,
                    message: payload,
                    data: null,
                })
            )
        }

        return res.status(200).json(
            new ResponseDTO<LikeType>({
                error,
                message: {
                    status: 'Ok!',
                },
                data: payload,
            })
        )
    }
}

export default new LikeControllers()