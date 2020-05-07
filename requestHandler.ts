import { Request, Response } from "https://deno.land/x/oak/mod.ts";
import { getRandomMeme } from './fetchService.ts';

export default async ({
    params,
    request,
    response }: {
        params: any,
        request: Request,
        response: Response
    }) => {
    response.body = { url: getRandomMeme() };
}