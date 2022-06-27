import { time } from "console";

export default class Exam {
    id: number;
    title: string;
    professor: string;
    dateOpen: number;
    dateClose: number;
    timeLimit: number;

    constructor(title: string, dateOpen: number, professor: string,
        dateClose: number, timeLimit: number, id: number) {
        this.id = id;
        this.title = title;
        this.professor = professor;
        this.dateOpen = dateOpen;
        this.dateClose = dateClose;
        this.timeLimit = timeLimit;
    }
}