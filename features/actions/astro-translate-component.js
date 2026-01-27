import { executeTask, init } from "@agent-smith/cli";
import fs from 'fs/promises';
import path from 'path';

async function action (args, options)
{
    const componentName = args[0];
    let projectPath = process.cwd();
    const lang = args[1];
    const code = args[2];
    const srcLang = args.length > 3 ? args[3] : "en";
    let skipExists = false;
    if (args.length > 4) {
        if (args[4] == "skip") {
            skipExists = true;
        }
    }
    let fromWf = false;
    if (args.length > 5) {
        if (args[5] == true) {
            fromWf = true;
        }
    }
    //console.log("Skip", skipExists);
    const translationsPath = path.join(projectPath, "src/i18n/components", componentName + ".ts");
    let translations;
    try {
        translations = (await fs.readFile(translationsPath, 'utf8')).trim();
    } catch (error) {
        throw new Error(`Failed to read file at ${translationsPath}: ${error.message}`);
    }
    const content = "{" + translations.split("\n").slice(1).join("\n").trim();
    const jsonData = JSON.parse(content);
    if (skipExists) {
        //console.log("SK", lang, lang in jsonData, Object.keys(jsonData));
        if (code in jsonData) {
            console.log("Skipping", lang, "for", componentName, "as the translation already exits");
            return;
        }
    }
    console.log(Object.keys(jsonData[srcLang]).length, `lines to translate from ${srcLang} to ${code}`);
    if (!fromWf) {
        await init();
    }
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
        ++i;
        //if (i == 6) break
    }
    const finalData = { jsonData };
    finalData.jsonData[code] = newData;
    const finalStr = JSON.stringify(finalData.jsonData, null, 4);
    const end = "export const translations: Record<string, any> = " + finalStr;
    //console.log(end);
    console.log("Writing translation to", translationsPath);
    await fs.writeFile(translationsPath, end);
}

export { action };