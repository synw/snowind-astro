async function action (args, options)
{
    //console.log("WFR ARGS", args);
    return { prompt: args.answer.text, cmdArgs: args.cmdArgs };
}

export { action };