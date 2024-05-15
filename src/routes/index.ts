import express from 'express'
const router = express.Router()
import * as example from './example/router'
import * as toDoList from './to-do-list/router'

example.RegisterRouter(router)
toDoList.RegisterRouter(router)
// ... for register router
export const Router = router