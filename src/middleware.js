import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (ctx, next) => {
    // First let Astro's i18n middleware handle the request
    const response = await next();
    if (ctx.url.pathname === "/") {
        const targetLocale = ctx.preferredLocale || "fr";
        return Response.redirect(ctx.url.href + `${targetLocale}`, 302);
    }
    return response;
});