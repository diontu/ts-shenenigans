type Student = {
    name: string;
    id: string;
};

let student: Student;

const recordStudentInfo = (studentInfo: Student) => {
    student = studentInfo;
};

const printStudentInfo = (studentInfo: Student) => {
    console.log(studentInfo);
};
