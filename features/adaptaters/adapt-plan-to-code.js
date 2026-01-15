async function action (args, options)
{
    //console.dir(args, { depth: 5 });
    //console.log(args);
    const data = {
        prompt: args.prompt,
        plan: args.answer.text,
        filepath: args.cmdArgs[0],
    };
    //console.log("DATA", data);
    return data;
}

export { action };