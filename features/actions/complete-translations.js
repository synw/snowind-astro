import { executeTask, init } from "@agent-smith/cli";
import fs from 'fs/promises';
import path from 'path';

async function action(args, options)
{
    const componentName = args[0];
    let projectPath = process.cwd();
    const lang = args[1];
    const code = args[2];
    const srcLang = args.length > 3 ? args[3] : "en";
    if (args.length > 4) {
        projectPath = args[4]
    }
    const translationsPath = path.join(projectPath, "src/i18n/components", componentName + ".ts");
    let translations;
    try {
        translations = await fs.readFile(translationsPath, 'utf8');
    } catch (error) {
        throw new Error(`Failed to read file at ${translationsPath}: ${error.message}`);
    }
    //const jsonData = {}
    const content = "{" + translations.split("\n").slice(1).join("\n").trim();
    //const content = translations.replace("export const translations: Record<string, any> =", "");
    const jsonData = JSON.parse(content);
    /*for (const row of content) {
        const line = row.trim().replace(",", "").replaceAll('"', "");
        //console.log(line)
        const s = line.split(":");
        jsonData[s[0].trim()] = s[1].trim();
    }*/
    console.log(Object.keys(jsonData[srcLang]).length, `lines to translate from ${srcLang} to ${code}`);
    await init();
    let i = 1;
    const newData = {};
    for (const [title, content] of Object.entries(jsonData[srcLang])) {
        const rcontent = content.replace('\"', '"');
        //console.log(title, content);
        const res = await executeTask("astro-i18n", {
            lang: lang,
            prompt: rcontent
        }, options);
        //console.log(title + ":", res.answer.text);
        newData[title] = res.answer.text.replace('"', '\"').trim();
        ++i
        //if (i == 6) break
    }
    const finalData = { jsonData };
    finalData.jsonData[code] = newData;
    const finalStr = JSON.stringify(finalData.jsonData, null, 4);
    const end = "export const translations: Record<string, any> = " + finalStr;
    //console.log(end);
    console.log("Writing translation to", translationsPath);
    await fs.writeFile(translationsPath, end)
}

export { action }