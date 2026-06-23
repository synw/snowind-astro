import { runServer } from "@agent-smith/server";

async function run() {
    runServer();
}

const cmd = {
    name: "run-uiserver [args...]",
    description: "Run the ui server",
    options: [
        "display",
    ],
    run: run
};

export { cmd };
