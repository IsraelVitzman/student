import { SaveStudents, ImportStudents } from "./fileHelpers";





export function UpdateStudent(filePath, studentId, data) {
    return new Promise((resolve, reject) => {

        ImportStudents(filePath, (err, students) => {

            if (err) {
                return reject(err);
            }
            const updatedStudents = students.filter(s => s.id === studentId);
            //הוספת  תנאי אם לא נמצא..
            updatedStudents["name"] = data;
            SaveStudents(filePath, updatedStudents, (err) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve();

                }
            });
        });
    });
}