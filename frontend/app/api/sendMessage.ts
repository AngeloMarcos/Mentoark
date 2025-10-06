export async function sendMessage(userId: string, message: string, metadata?: Record<string, unknown>) {
  const base = process.env.NEXT_PUBLIC_API_URL || "https://site.mentoark.com.br/api";
  try {
    const res = await fetch(`${base}/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, message, metadata }),
    });
    if (!res.ok) throw new Error(String(res.status));
    return await res.json(); // { ok, reply }
  } catch (e: any) {
    return { ok: false, error: e.message || "network" };
  }
}
