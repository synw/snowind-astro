import fs from 'fs/promises';
import path from 'path';

async function action (args, options)
{
    let componentName = args[0];
    let projectPath = process.cwd();
    if (args.length > 1) {
        projectPath = args[1];
    }
    let startPath = projectPath + "src/aiwidgets";
    if (componentName.startsWith("@")) {
        startPath = path.join(projectPath, "src/components");
        componentName = componentName.slice(1);
    }
    const componentPath = path.join(startPath, componentName + ".astro");
    const translationsPath = path.join(projectPath, "src/i18n/components", componentName + ".ts");
    const n = componentName.split("/").length;
    const p = "../".repeat(n);
    const translationsRelativePath = path.join(p + "i18n/components", componentName + ".ts");
    //console.log("P", n, p, translationsRelativePath);
    try {
        const content = await fs.readFile(componentPath, 'utf8');
        const translations = await fs.readFile(translationsPath, 'utf8');
        return {
            prompt: content,
            translations: translations,
            "translations-filepath": translationsRelativePath,
            filepath: componentPath,
        };
    } catch (error) {
        throw new Error(`Failed to read file: ${error.message}`);
    }
}

export { action };