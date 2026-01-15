async function action (args, options)
{
    return { prompt: args[1], filepath: args[0] };
}

export { action };