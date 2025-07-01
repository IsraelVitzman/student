
import { readFile } from "node:fs";


function ImportStudents(filePath) {
    return new Promise((resolve, reject) => {
        readFile(filePath, "utf-8", (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }

        });

    });

}
function SaveStudents(filePath, data) {
    return new Promise((resolve, reject) => {
        writeFile(filePath, data, "utf-8", (err) => {
            if (err) reject(err);
            else resolve();
        });
    });
}
export function deleteStudentById(filePath, idToDelete) {
    ImportStudents(filePath)
        .then(data => {
            const students = JSON.parse(data)
            const updated = students.filter(student => student.id !== idToDelete);

        });
    const updated = students.filter(student => student.id !== idToDelete);

    return SaveStudents(filePath, JSON.stringify(updated));

}

