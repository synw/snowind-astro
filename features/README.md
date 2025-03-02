# AI code generation experiments

## Install

Requirement: Ollama server

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
```

Run `lm conf config.yml`

## Text to html

### Simple text to html

Default model: `qwen2.5-coder:14b-instruct-q8_0`
Best model: `Qwen2.5-Coder-32B-Instruct-IQ4_XS` using Koboldcpp

Copy the text you wish to translate to html and run:

```bash
lm sn-text2html --ic --oc
```

The `ic` flag means input copy, and the `oc` flag means output copy: the
final answer will be ready to be pasted

To use another model (check the yaml file in the `features` directory for the list):

```bash
lm sn-text2html s=small  --ic --oc # uses the model size small, here qwen2.5-coder:7b-instruct-q8_0
```

### Text to html with a thinking process

```bash
lm sn-text2html-think --ic
```

Models: 
- Planing: `qwq:latest`
- Code writing: `deepseek-coder-v2:16b-lite-instruct-q8_0` 

For the Uigen model:

```bash
lm sn-text2html-uigen --ic
```

Model for planing and thinking: `uigen:14b` (pulled in Ollama from the [q8 quant](https://huggingface.co/smirki/UIGEN-T1.1-Qwen-14B-GGUF))

## Image to html

The goal is to take an image file path as input and output an html widget.

```bash
lm sn-img2html features/img/section.png # any image representing a webpage section
```

Models:

- Image description and layout breakdown: `minicpm-v:8b-2.6-q8_0`
- Planing from the image description: `qwq:latest`
- Code writing: `deepseek-coder-v2:16b-lite-instruct-q8_0` 

For the Uigen model:

```bash
lm sn-img2html-uigen features/img/section.png
```

Models:

- Image description and layout breakdown: `minicpm-v:8b-2.6-q8_0`
- Planing and code: `uigen:14b`
