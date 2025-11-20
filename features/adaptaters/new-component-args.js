async function action(args, options)
{
    return { prompt: args[0], filepath: args[1] }
}

export { action }