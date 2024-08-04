import { Elysia } from "elysia";
// import { Env } from "bun";
// import { Context } from "elysia"

export const app = new Elysia().get("/", () => "Hello Elysia").mount("/", (req)=>{
  console.log(req)
  return Response.json({message:"ehe"});
}).listen(3000);




console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
