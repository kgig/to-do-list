import { Request, Response, NextFunction } from 'express'
import { ToDoListService } from '../../services/to-do-list/to-do-list.service'
import { RESPONSE_CODE } from '../../constants/response-code'

export class ToDoListCtrl {
    private toDoListService = new ToDoListService()
    constructor() {
    }

    public getToDoList = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result: any = await this.toDoListService.getList(req, res, next)
            if (result && result.length > 0) {
                let resBody: any = {
                    resultCode: RESPONSE_CODE.OK.RESULT_CODE,
                    resultDescription: RESPONSE_CODE.OK.DESCRIPTION,
                    resultMessage: RESPONSE_CODE.OK.RESULT_DESCRIPTION,
                    resultData: result
                }
                return res.status(RESPONSE_CODE.OK.HTTP_STATUS).json(resBody)
            } else {
                let resBody: any = {
                    resultCode: RESPONSE_CODE.DATA_NOT_FOUND.RESULT_CODE,
                    resultDescription: RESPONSE_CODE.DATA_NOT_FOUND.DESCRIPTION,
                    resultMessage: RESPONSE_CODE.DATA_NOT_FOUND.RESULT_DESCRIPTION,
                    resultData: {}
                }
                return res.status(RESPONSE_CODE.OK.HTTP_STATUS).json(resBody)
            }

        } catch (err) {
            let resBody: any = {
                resultCode: RESPONSE_CODE.INTERNAL_SERVER_ERROR.RESULT_CODE,
                resultDescription: RESPONSE_CODE.INTERNAL_SERVER_ERROR.DESCRIPTION,
                resultMessage: RESPONSE_CODE.INTERNAL_SERVER_ERROR.RESULT_DESCRIPTION,
                resultData: {}
            }
            if (err) return next(err)
            return res.status(RESPONSE_CODE.INTERNAL_SERVER_ERROR.HTTP_STATUS).json(resBody)
        }
    }
    public getToDoListById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result: any = await this.toDoListService.getById(req, res, next)
            if (result) {
                let resBody: any = {
                    resultCode: RESPONSE_CODE.OK.RESULT_CODE,
                    resultDescription: RESPONSE_CODE.OK.DESCRIPTION,
                    resultMessage: RESPONSE_CODE.OK.RESULT_DESCRIPTION,
                    resultData: result
                }
                return res.status(RESPONSE_CODE.OK.HTTP_STATUS).json(resBody)
            } else {
                let resBody: any = {
                    resultCode: RESPONSE_CODE.DATA_NOT_FOUND.RESULT_CODE,
                    resultDescription: RESPONSE_CODE.DATA_NOT_FOUND.DESCRIPTION,
                    resultMessage: RESPONSE_CODE.DATA_NOT_FOUND.RESULT_DESCRIPTION,
                    resultData: {}
                }
                return res.status(RESPONSE_CODE.OK.HTTP_STATUS).json(resBody)
            }

        } catch (err) {
            let resBody: any = {
                resultCode: RESPONSE_CODE.INTERNAL_SERVER_ERROR.RESULT_CODE,
                resultDescription: RESPONSE_CODE.INTERNAL_SERVER_ERROR.DESCRIPTION,
                resultMessage: RESPONSE_CODE.INTERNAL_SERVER_ERROR.RESULT_DESCRIPTION,
                resultData: {}
            }
            if (err) return next(err)
            return res.status(RESPONSE_CODE.INTERNAL_SERVER_ERROR.HTTP_STATUS).json(resBody)
        }
    }
    public createToDoList = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result: any = await this.toDoListService.createToDoList(req, res, next)
            if (result) {
                let resBody: any = {
                    resultCode: RESPONSE_CODE.CREATED.RESULT_CODE,
                    resultDescription: RESPONSE_CODE.CREATED.DESCRIPTION,
                    resultMessage: RESPONSE_CODE.CREATED.RESULT_DESCRIPTION,
                    resultData: result
                }
                return res.status(RESPONSE_CODE.CREATED.HTTP_STATUS).json(resBody)
            }

        } catch (err) {
            let resBody: any = {
                resultCode: RESPONSE_CODE.INTERNAL_SERVER_ERROR.RESULT_CODE,
                resultDescription: RESPONSE_CODE.INTERNAL_SERVER_ERROR.DESCRIPTION,
                resultMessage: RESPONSE_CODE.INTERNAL_SERVER_ERROR.RESULT_DESCRIPTION,
                resultData: {}
            }
            if (err) return next(err)
            return res.status(RESPONSE_CODE.INTERNAL_SERVER_ERROR.HTTP_STATUS).json(resBody)
        }
    }
    public updateToDoList = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result: any = await this.toDoListService.updateToDoList(req, res, next)
            if (result) {
                let resBody: any = {
                    resultCode: RESPONSE_CODE.OK.RESULT_CODE,
                    resultDescription: RESPONSE_CODE.OK.DESCRIPTION,
                    resultMessage: RESPONSE_CODE.OK.RESULT_DESCRIPTION,
                    resultData: result
                }
                return res.status(RESPONSE_CODE.OK.HTTP_STATUS).json(resBody)
            }
        } catch (err) {
            let resBody: any = {
                resultCode: RESPONSE_CODE.INTERNAL_SERVER_ERROR.RESULT_CODE,
                resultDescription: RESPONSE_CODE.INTERNAL_SERVER_ERROR.DESCRIPTION,
                resultMessage: RESPONSE_CODE.INTERNAL_SERVER_ERROR.RESULT_DESCRIPTION,
                resultData: {}
            }
            if (err) return next(err)
            return res.status(RESPONSE_CODE.INTERNAL_SERVER_ERROR.HTTP_STATUS).json(resBody)
        }
    }

    public deleteToDoList = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result: any = await this.toDoListService.deleteToDoList(req, res, next)
            if (result) {
                let resBody: any = {
                    resultCode: RESPONSE_CODE.OK.RESULT_CODE,
                    resultDescription: RESPONSE_CODE.OK.DESCRIPTION,
                    resultMessage: RESPONSE_CODE.OK.RESULT_DESCRIPTION,
                    resultData: result
                }
                return res.status(RESPONSE_CODE.OK.HTTP_STATUS).json(resBody)
            }
        } catch (err) {
            let resBody: any = {
                resultCode: RESPONSE_CODE.INTERNAL_SERVER_ERROR.RESULT_CODE,
                resultDescription: RESPONSE_CODE.INTERNAL_SERVER_ERROR.DESCRIPTION,
                resultMessage: RESPONSE_CODE.INTERNAL_SERVER_ERROR.RESULT_DESCRIPTION,
                resultData: {}
            }
            if (err) return next(err)
            return res.status(RESPONSE_CODE.INTERNAL_SERVER_ERROR.HTTP_STATUS).json(resBody)
        }
    }
    

}