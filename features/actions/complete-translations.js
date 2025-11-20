import { executeTask, init } from "@agent-smith/cli";
import fs from 'fs/promises';
import path from 'path';

async function action(args, options)
{
    const componentName = args[0];
    let projectPath = process.cwd();
    const lang = args[1];
    const code = args[2];
    if (args.length > 3) {
        projectPath = args[3]
    }
    const translationsPath = path.join(projectPath, "src/i18n/components", componentName + ".ts");
    let translations;
    try {
        translations = await fs.readFile(translationsPath, 'utf8');
    } catch (error) {
        throw new Error(`Failed to read file at ${translationsPath}: ${error.message}`);
    }
    //const jsonData = {}
    //const content = translations.split("\n").slice(2, -2);
    const content = translations.replace("export const translations: Record<string, any> =", "");
    //console.log(content);
    const jsonData = JSON.parse(content);
    /*for (const row of content) {
        const line = row.trim().replace(",", "").replaceAll('"', "");
        //console.log(line)
        const s = line.split(":");
        jsonData[s[0].trim()] = s[1].trim();
    }*/
    console.log(Object.keys(jsonData).length, "lines to translate");
    await init();
    let i = 1;
    const newData = {};
    for (const [title, content] of Object.entries(jsonData["en"])) {
        //console.log(title, content);
        const res = await executeTask("astro-i18n", {
            lang: lang,
            prompt: content
        }, options);
        //console.log(title + ":", res.answer.text);
        newData[title] = res.answer.text;
        ++i
        if (i == 6) break
    }
    const finalData = { jsonData };
    finalData[code] = newData;
    console.log(JSON.stringify(finalData, null, 2));
    return
    const buf = ["export const translations: Record<string, any> = {", "\tfr: {"];
    for (const [title, content] of Object.entries(newData)) {
    }
    const end = buf.join("\n")
}

export { action }