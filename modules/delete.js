
import { readFile } from "node:fs";
import { SaveStudents, ImportStudents } from "./fileHelpers";


export function deleteStudentById(filePath, idToDelete) {
    ImportStudents(filePath)
        .then(data => {
            const students = JSON.parse(data)
            const updated = students.filter(student => student.id !== idToDelete);

        });
    const updated = students.filter(student => student.id !== idToDelete);

    return SaveStudents(filePath, JSON.stringify(updated));

}

