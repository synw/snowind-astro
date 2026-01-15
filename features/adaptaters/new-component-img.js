import { imgs2lm } from "@agent-smith/feat-vision";

async function action (args, options)
{
    console.log("ARGS", args);
    console.log("OPTS", options);
    const { inferParams, prompt } = await imgs2lm([args[2], args[1]], options);
    console.log("IP", inferParams);
    return { prompt: prompt, inferParams: inferParams, filepath: args[0] };
}

export { action };