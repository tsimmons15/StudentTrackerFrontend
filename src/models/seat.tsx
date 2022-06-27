import Exam from './exam'
import Student from './student';

export type SeatStatus = 'Open' | 'Reserved' | 'Broken';
export type SeatType = 'Paper' | 'Computer' | 'OSD';

export default class Seat {
    id: number;
    seatType: SeatType;
    status: SeatStatus;
    section: number;
    exam: Exam;
    student: Student;

    constructor(exam: Exam, seatType: SeatType, status: SeatStatus,
        section: number, student: Student, id: number) {
        this.id = id;
        this.seatType = seatType;
        this.status = status;
        this.section = section;
        this.exam = exam;
        this.student = student;
    }
}