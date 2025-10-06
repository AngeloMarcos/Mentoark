export async function postJson(url: string, body: unknown, headers: Record<string,string> = {}) {
  const r = await fetch(url, { method: "POST", headers: { "content-type":"application/json", ...headers }, body: JSON.stringify(body) });
  const text = await r.text(); let data:any=null; try{ data=JSON.parse(text);}catch{}
  if (!r.ok) throw new Error(`POST ${url} => ${r.status} ${text}`);
  return data ?? text;
}
