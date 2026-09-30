import { describe, it, expect } from "vitest";
import { getArtigosDestaque } from "./artigos";
import type Artigo from "@/types/types";

describe("getArtigosDestaque", () => {
  const artigos: Artigo[] = [
    { _id: "1", titulo: "Artigo 1", autor: "Autor", data: "01/01/2026", texto: "Texto", imagem: "imagem.jpg" },
    { _id: "2", titulo: "Artigo 2", autor: "Autor", data: "02/01/2026", texto: "Texto", imagem: "imagem.jpg" },
    { _id: "3", titulo: "Artigo 3", autor: "Autor", data: "03/01/2026", texto: "Texto", imagem: "imagem.jpg" },
    { _id: "4", titulo: "Artigo 4", autor: "Autor", data: "04/01/2026", texto: "Texto", imagem: "imagem.jpg" },
    { _id: "5", titulo: "Artigo 5", autor: "Autor", data: "05/01/2026", texto: "Texto", imagem: "imagem.jpg" },
    { _id: "6", titulo: "Artigo 6", autor: "Autor", data: "06/01/2026", texto: "Texto", imagem: "imagem.jpg" },
  ];

  it("deve retornar os quatro artigos mais recentes em ordem decrescente", () => {
    const resultado = getArtigosDestaque(artigos);

    expect(resultado.map((artigo) => artigo._id)).toEqual([
      "6",
      "5",
      "4",
      "3",
    ]);
  });

  it("deve retornar todos os artigos quando houver menos de quatro", () => {
    const resultado = getArtigosDestaque(artigos.slice(0, 2));

    expect(resultado.map((artigo) => artigo._id)).toEqual(["2", "1"]);
  });

  it("deve retornar um array vazio quando não houver artigos", () => {
    expect(getArtigosDestaque([])).toEqual([]);
  });
});