The Tailwind semantic colors plugin is available, here is how it works:

<cheatset>
The following semantic colors are available: 

- `prim`: main color
- `sec`: secondary main color
- `success`: a color for main actions
- `warning`: a color for important actions
- `danger`: a color for dangerous actions
- `light`: a light color for text
- `semilight`: a semi-light color for text
- `lighter`: a very light color for text
- `background`: the background color for the page

For text color use: `<div class="text-[color_name]">`
For background only use: `<div class="bg-[color_name]">`
For background and text colors combined use: `<div class="[color_name]">`
For a border color use: `<div class="border border-[color_name]">`

Examples:

```html
<!-- div blocks -->
<div class="prim">A primary text and background colored block</div>
<div class="text-sec">A secondary text color</div>
<!-- buttons -->
<button class="danger btn">Delete</button>
<button class="success btn">Save</button>
<button class="light btn">Action</button>
```
</cheatset>

The default color classes can be found in `src/scss/default.sccs`