import type Artigo  from "@/types/types";
import { API_SERVER } from "./axios-server";
import { API_URL } from "./axios";

export const getArtigos = async () => {
    try {
    const response = await API_SERVER.get<Artigo[]>("/artigos");
    return response.data;
}
    catch (error) {
    console.error("Erro ao buscar artigos:", error);
    return [];
  }

};

export const getArtigoById = async (_id: string) => {
    const response = await API_SERVER.get<Artigo>(`/artigos/${_id}`);
    return response.data;
};