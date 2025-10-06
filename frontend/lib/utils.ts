// frontend/lib/utils.ts

// Classe utilitária MUITO simples: junta classes válidas
export function cn(...list: Array<string | false | null | undefined>) {
  return list.filter(Boolean).join(" ");
}
