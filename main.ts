import { Application, Router } from 'https://deno.land/x/oak/mod.ts';
import { getRandomMeme } from './fetch_service.ts';

// export const APP_HOST = Deno.env.get('APP_HOST') || "127.0.0.1";
// export const APP_PORT = Deno.env.get('APP_PORT') || 8000;

export const APP_HOST = "127.0.0.1";
export const APP_PORT = 8000;


const app = new Application();
const router = new Router();

router.get('/meme', getRandomMeme);
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen(`${APP_HOST}:${APP_PORT}`);