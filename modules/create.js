import { writeFile } from "node:fs";

export function AddStudent(filePath, data) {
    writeFile(filePath, JSON.stringify(data), "utf-8", (err) => {
        if (err) {
            console.log("invalid eroor: no creeted");
        } else {
            console.log("created successfully");
        }
    });
}