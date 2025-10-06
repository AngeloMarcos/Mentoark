export type ChatReq = { userId: string; message: string; metadata?: any };
export type ChatRes = { ok: boolean; reply: string; traceId?: string };

export async function callChat(input: ChatReq): Promise<ChatRes> {
  const base = process.env.NEXT_PUBLIC_API_BASE || "/api-dev"; // em prod trocamos p/ /api
  const r = await fetch(`${base}/chat`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(input),
  });
  if (!r.ok) throw new Error(await r.text());
  return r.json();
}
