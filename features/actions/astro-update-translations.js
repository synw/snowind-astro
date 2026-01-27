import path from 'path';
import { buildDirectoryMap } from "../utils.ts";
import { pathToFileURL } from 'url';
import { lsdir } from "@agent-smith/feat-fs";
import { executeAction, init } from '@agent-smith/cli';

async function action (args, options)
{
    await init();
    let projectPath = process.cwd();
    let srcLang = null;
    let skipExists = false;
    args.forEach(a =>
    {
        if (a == "skip") {
            skipExists = true;
        } else {
            srcLang = a;
        }
    });
    const trPath = path.join(projectPath, "src/i18n/components");
    const dirMap = buildDirectoryMap(trPath);
    const dirs = Object.keys(dirMap);
    //console.log(dirs);
    const confPath = path.join(projectPath, "src/conf.mjs");
    const url = pathToFileURL(confPath).href;
    const { languages, defaultLanguage } = await import(url);
    if (!srcLang) {
        srcLang = defaultLanguage;
    }
    //console.log(conf.languages);
    let nDir = 0;
    const totalDirs = dirs.length;
    for (const dir of dirs) {
        ++nDir;
        console.log("Processing directory", nDir, "/", totalDirs, dir);
        const { files } = await lsdir(dir);
        //console.log(files);
        let nFiles = 0;
        const totalFiles = files.length;
        for (const file of files) {
            ++nFiles;
            const filename = file.replace(trPath + "/", "");
            console.log("Dir", `${nDir}/${totalDirs}`, "file", filename, nFiles, `/${totalFiles}`);
            const componentName = filename.replace(".ts", "");
            let nLang = 0;
            const totalLang = Object.keys(languages).length;
            for (const [code, lang] of Object.entries(languages)) {
                if (code == srcLang) {
                    continue;
                }
                ++nLang;
                const targs = [componentName];
                const name = lang.enname;
                targs.push(name, code, srcLang, skipExists ? "skip" : "false", true);
                console.log("Translating", componentName, "to", name, nLang, `/${totalLang}`);
                //console.log("TA", targs);
                await executeAction("astro-translate-component", targs, options);
            }
        }
    }
}

export
{
    action,
};