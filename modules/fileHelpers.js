export function ImportStudents(filePath) {
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
export function SaveStudents(filePath, data) {
    return new Promise((resolve, reject) => {
        writeFile(filePath, data, "utf-8", (err) => {
            if (err) reject(err);
            else resolve();
        });
    });
}