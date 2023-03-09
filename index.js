const path = require('path');
const fs = require('fs').promises;

const renameFiles = async (folderPath) => {
    try {
        const files = await fs.readdir(folderPath);

        for (const file of files) {
            const fileInfo = path.parse(file);

            if(fileInfo.name.includes("-")){
                var positionOfDash = fileInfo.name.indexOf("-") + 1;

                const oldPath = path.join(__dirname, folderPath, file);
                const newPath = path.join(__dirname, folderPath, `${fileInfo.name.slice(positionOfDash)}${fileInfo.ext}`);
                await fs.rename(oldPath, newPath);
            }
            
        }
    } catch (error) {
        console.log(error);
    }
};

renameFiles('./images');
console.log("Done!");