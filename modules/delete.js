

import { SaveStudents, ImportStudents } from "./fileHelpers";





export function deleteStudent(filePath, studentId) {
    return new Promise((resolve, reject) => {

        ImportStudents(filePath, (err, students) => {

            if (err) {
                return reject(err);
            }
            const updatedStudents = students.filter(s => s.id !== studentId);
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


