import { writeToFile } from "@agent-smith/feat-fs";

async function action (args, options)
{
    //console.log("ARGS", args);
    try {
        const output = args.answer.text.trim();
        await writeToFile(args.filepath, output, true);
    } catch (error) {
        throw new Error(`Failed to write ${args.componentName} component file: ${error.message}`);
    }
}

export { action };