import fs from 'fs';
import path from 'path';


async function action(args, options) {
    //console.log("Revert Args:", args);
    //console.log("Revert Opts:", options);
    const filepath = args[0];
    const fileDir = path.dirname(filepath);
    const bckpDirPath = path.join(fileDir, "bckp");
    const componentExt = path.extname(filepath);
    const componentBaseName = path.basename(filepath, componentExt);
    const bckpFiles = fs.readdirSync(bckpDirPath).filter(
        (f) => f.startsWith(componentBaseName + ".")
    );
    if (bckpFiles.length == 0) {
        throw new Error(`No backup found for component ${filepath}`)
    }
    const bckComponent = path.join(bckpDirPath, bckpFiles.pop());
    const bckContent = fs.readFileSync(bckComponent);
    fs.writeFileSync(filepath, bckContent);
    console.log("Component", filepath, "restored from last backup");
    fs.rmSync(bckComponent);
    if (options?.verbose || options?.debug) {
        console.log("Backup", bckComponent, "removed")
    }
    const remainingBckpFiles = fs.readdirSync(bckpDirPath);
    if (remainingBckpFiles.length == 0) {
        fs.rmdirSync(bckpDirPath);
    }
    return;
}

export { action };