import type Artigo from "@/types/types";

export function getArtigosDestaque(artigos: Artigo[]) {
  return artigos.slice(-4).reverse();
}
