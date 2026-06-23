import type Artigo  from "@/types/types";
import { API_SERVER } from "./axios-server";
import { API_URL } from "./axios";

export const getArtigos = async () => {
    const response = await API_SERVER.get<Artigo[]>("/artigos");
    return response.data;
};

export const getArtigoById = async (_id: string) => {
    const response = await API_SERVER.get<Artigo>(`/artigos/${_id}`);
    return response.data;
};