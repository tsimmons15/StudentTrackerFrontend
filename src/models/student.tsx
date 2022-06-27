export default class Student {
    visitId: number;
    studentName: string;
    studentId: string;
    timeIn: number;
    timeOut: number;

    constructor(studentName: string, studentId: string,
        timeIn: number, timeOut: number, visitId: number) {
        this.visitId = visitId;
        this.studentName = studentName;
        this.studentId = studentId;
        this.timeIn = timeIn;
        this.timeOut = timeOut;
    }
}