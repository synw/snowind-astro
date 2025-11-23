import fs from 'fs/promises';

async function action(args, options)
{
    try {
        const content = await fs.readFile(args[0], 'utf8');
        return { component: content, prompt: args[1], filepath: args[0] };
    } catch (error) {
        throw new Error(`Failed to read component file: ${error.message}`);
    }
}

export { action }