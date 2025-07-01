import { readFile } from "node:fs";

export function AddStudent(filePath) {
    readFile(filePath, "utf-8", (err, data) => {
        if (err) {
            console.log("invalid eroor: no accses to reading");
        } else {
            console.log("the file..");
            console.log(data);

        }
    });
}