async function action(args, options)
{
    return { prompt: args.cmdArgs[0], filepath: args.cmdArgs[1] }
}

export { action }