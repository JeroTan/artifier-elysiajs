import { Elysia } from "elysia";
import { Env } from "bun";
import { Context } from "elysia"

const app = new Elysia().get("/", () => "Hello Elysia").listen(3000);

export default {
  async fetch(
    request: Request,
    env: Env,
    ctx: Context,
    
  ): Promise<Response> {

    return await app.fetch(request)
  },
}

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
