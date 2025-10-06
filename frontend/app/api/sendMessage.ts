export async function sendMessage(userId: string, message: string) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || "https://site.mentoark.com.br/api"}/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, message }),
    });

    if (!res.ok) throw new Error(`Erro HTTP ${res.status}`);
    return await res.json();
  } catch (err: any) {
    console.error("Erro ao enviar mensagem:", err);
    return { ok: false, error: err.message };
  }
}
