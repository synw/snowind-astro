import fs from 'fs';
import path from 'path';


async function action(args, options) {
    //console.log("Args:", Object.keys(args));
    //console.log("Opts:", options);
    const isVerbose = options?.verbose === true || options?.debug === true;
    const filepath = args.filepath;
    const fileDir = path.dirname(filepath);
    const bckpDirPath = path.join(fileDir, "bckp");
    if (!fs.existsSync(bckpDirPath)) {
        if (isVerbose) {
            console.log("Creating component backup dir", bckpDirPath);
        }
        fs.mkdirSync(bckpDirPath);
    }
    const componentExt = path.extname(filepath);
    const componentBaseName = path.basename(filepath, componentExt);
    const bckpFiles = fs.readdirSync(bckpDirPath).filter(
        (f) => f.startsWith(componentBaseName + ".")
    );
    let bckpComponentName = componentBaseName + ".1" + componentExt;
    if (bckpFiles.length > 0) {
        bckpComponentName = componentBaseName + "." + (bckpFiles.length + 1).toString() + componentExt;
    }
    const bckpComponentPath = path.join(bckpDirPath, bckpComponentName);
    if (isVerbose) {
        console.log("Backing up component at", bckpComponentPath);
    }
    fs.writeFileSync(bckpComponentPath, args.component);
    const content = args.answer.text.split("```")[0];
    fs.writeFileSync(filepath, content);
    return;
}

export { action };