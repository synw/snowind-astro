import {
    executeAction,
    executeWorkflow,
    init
} from "@agent-smith/cli";
import select from '@inquirer/select';

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

async function run(args, options) {
    await init();
    await executeWorkflow("create-astro-component", args, options);
    const answer = await select({
        message: 'Select an action',
        default: "keep",
        choices: choices,
    });
    switch (answer) {
        case "keep":
            return;
        case "revert":
            await executeAction("revert-component", args, options);
    }
}

const cmd = {
    name: "design-component [args...]",
    description: "Design an Astro component: arguments: component path, prompt",
    options: [
        "all",
    ],
    run: run
};

export { cmd };
