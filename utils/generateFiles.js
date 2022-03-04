const fs = require("fs");

// creates index.html with generated HTML code in dist folder
const writeFile = pageHTML => {
    return new Promise((resolve, reject) => {
        fs.writeFile("./dist/index.html", pageHTML, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: "index.html file created..."
            });
        });
    });
};

// copies style.css to dist folder
const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile("./src/style.css", "./dist/style.css", err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: "style.css file copied..."
            });
        })
    })
};

module.exports = {
    writeFile: writeFile,
    copyFile: copyFile
};