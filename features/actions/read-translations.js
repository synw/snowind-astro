import fs from 'fs/promises';
import path from 'path';

async function action(args, options)
{
    const componentName = args[0];
    let projectPath = process.cwd();
    if (args.length > 1) {
        projectPath = args[1]
    }
    const componentPath = path.join(projectPath, "src/aiwidgets", componentName + ".astro");
    const translationsPath = path.join(projectPath, "src/i18n/components", componentName + ".ts");
    const translationsRelativePath = path.join("../i18n/components", componentName + ".ts");
    //console.log("TP", translationsRelativePath);
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

export { action }