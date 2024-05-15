import { Router } from "express";
import { ToDoListCtrl } from "./controller";


const toDoListCtrl = new ToDoListCtrl()

export const RegisterRouter = (router: Router) => {
    router.get('/to-do-list', toDoListCtrl.getToDoList)
    router.get('/to-do-list/:id', toDoListCtrl.getToDoListById)
    router.post('/to-do-list', toDoListCtrl.createToDoList)
    router.patch('/to-do-list/:id', toDoListCtrl.updateToDoList)
}