# AI code generation experiments

## Install

To run the experimental AI workflows clone the repository install 
the [Agent Smith](https://github.com/synw/agent-smith) cli 
( [doc](https://synw.github.io/agent-smith/terminal_client/overview) ):

```bash
npm i -g @agent-smith/cli
```

The `lm` command is now available. Create a `config.yml` file:

```yaml
features:
  - /home/me/path/to/snowind-astro/features
backends:
  default: "llamacpp"
  local: 
    - "llamacpp"
    - "koboldcpp"
    - "ollama"
  openrouter:
    type: "openai"
    url: "https://openrouter.ai/api/v1"
    apiKey: "$OPENROUTER_API_KEY"
  llamacpp-openai:
    type: "openai"
    url: "http://localhost:8080/v1
  
```

Run `lm conf config.yml`

Check the [Agent Smith doc](https://synw.github.io/agent-smith/terminal_client/overview) for more information

## Features

- [Internationalization](./translations.md)