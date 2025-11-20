import fs from 'fs';

async function action(args, options)
{
    console.log("Args:", args);
    console.log("Opts:", options);
    const isVerbose = options?.verbose === true || options?.debug === true;
    const filepath = args.filepath;
    const content = args.answer.text.split("```")[0];
    fs.writeFileSync(filepath, content);
    if (isVerbose) {
        console.log("Component written to", filepath);
    }
    return;
}

export { action };