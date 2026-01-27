import path from "path";
import { readFile } from "@agent-smith/feat-fs";

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
    const translationPath = path.join(projectPath, "src/i18n/components", componentName + ".ts");
    //const translationsRelativePath = path.join("../i18n/components", componentName + ".ts");
    //console.log("TP", translationsRelativePath);
    try {
        const content = await readFile(componentPath, 'utf8');
        return {
            prompt: content,
            componentPath: componentPath,
            translationPath: translationPath,
            name: componentName.split("/").pop(),
        };
    } catch (error) {
        throw new Error(`Failed to read ${componentName} component file: ${error.message}`);
    }
}

export { action };