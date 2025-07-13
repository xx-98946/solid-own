import { client } from "@/utils";

export async function test() {
    const res = await client.post("/demo/posts");
    console.log(res);
}
