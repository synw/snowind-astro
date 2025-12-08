import { Command } from "commander";
import select from '@inquirer/select';
import
{
    executeWorkflow,
    executeAction,
    init,
    allOptions,
    parseCommandArgs,
} from "@agent-smith/cli";

const choices = [
    {
        name: 'Keep the component',
        value: 'keep',
        description: 'Keep this new component',
    },
    {
        name: 'Discard the component',
        value: 'revert',
        description: 'Keep the old component',
    }
];

async function runCmd(args, options)
{
    await init();
    await executeWorkflow("create-astro-component", args, options);
    const answer = await select({
        message: 'Select an action',
        default: "keep",
        choices: choices,
    });
    switch (answer) {
        case "keep":
            return
        case "revert":
            await executeAction("revert-component", args, options)
    }
}

const cmd = new Command("design-component")
    .arguments("[args...]")
    .description("Design an Astro component: arguments: component path, prompt")
    .action((..._args) =>
    {
        const { args, options } = parseCommandArgs(_args)
        runCmd(args, options)
    });
allOptions.forEach(o => cmd.addOption(o))

export { cmd };
