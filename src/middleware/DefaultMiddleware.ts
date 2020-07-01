import { Request, Response } from 'express'

const DefaultMiddleware = (req: Request, resp: Response, next) => {
    next()
}

export default DefaultMiddleware