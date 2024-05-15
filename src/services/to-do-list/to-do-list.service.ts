import { NextFunction, Request, Response } from 'express'
import moment from 'moment';

export class ToDoListService {
    constructor() { }

    private parseDate = (dateStr: string): Date | null => {
        const parts = dateStr.split('/');
        if (parts.length !== 3) return null;
        const [day, month, year] = parts.map(part => parseInt(part, 10));
        return new Date(year, month - 1, day);
    };

    public getList = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { subject, owner, priority, status, startDate, endDate } = req.query;
            let filteredData = dataMockUp.filter(task => {
                let isMatch = true;
                if (subject) {
                    isMatch = isMatch && task.subject === subject;
                }
                if (owner) {
                    isMatch = isMatch && task.owner === owner;
                }
                if (priority) {
                    isMatch = isMatch && task.priority === priority;
                }
                if (status) {
                    isMatch = isMatch && task.status === status;
                }
                if (startDate) {
                    const start = this.parseDate(startDate as string);
                    const taskStart = this.parseDate(task.startDate);
                    if (start && taskStart) {
                        isMatch = isMatch && taskStart >= start;
                    }
                }
                if (endDate) {
                    const end = this.parseDate(endDate as string);
                    const taskEnd = this.parseDate(task.endDate);
                    if (end && taskEnd) {
                        isMatch = isMatch && taskEnd <= end;
                    }
                }
                return isMatch;
            });
            return filteredData
        } catch (err) {
            throw err
        }

    }

    public getById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            let filteredData = dataMockUp.find(task => task._id === id)

            return filteredData
        } catch (err) {
            throw err
        }

    }

    public createToDoList = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const newTask = {
                "_id": (dataMockUp.length + 1).toString(),
                ...req.body
            }
            dataMockUp.push(newTask);
            return dataMockUp
        } catch (err) {
            throw err
        }
    }


    public updateToDoList = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            let body = req.body
            let resultData = {}
            for (let i = 0; i < dataMockUp.length; i++) {
                if (dataMockUp[i]._id === id) {
                    dataMockUp[i] = { ...dataMockUp[i], ...body };
                    resultData = dataMockUp[i]
                    break;
                }
            }
            return resultData
        } catch (err) {
            throw err
        }
    }

    public deleteToDoList = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            dataMockUp = dataMockUp.filter(task => task._id !== id);
            return dataMockUp
        } catch (err) {
            throw err
        }
    }
}

let dataMockUp = [
    {
        "_id": "1",
        "subject": "Coding",
        "description": "Coding API to do list",
        "owner": "James",
        "startDate": "01/01/2024",
        "endDate": "02/01/2024",
        "status": "TO DO",
        "priority": "high"
    },
    {
        "_id": "2",
        "subject": "Meeting",
        "description": "Project meeting",
        "owner": "Anna",
        "startDate": "01/02/2024",
        "endDate": "01/02/2024",
        "status": "IN PROGRESS",
        "priority": "medium"
    },
    {
        "_id": "3",
        "subject": "Review",
        "description": "Code review",
        "owner": "James",
        "startDate": "01/03/2024",
        "endDate": "01/03/2024",
        "status": "TO DO",
        "priority": "high"
    }
]