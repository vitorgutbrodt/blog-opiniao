import { Artigo } from "@/types/types";
import { API_SERVER } from "./axios-server";

export const getArtigos = async () => {
  const response = await API_SERVER.get<Artigo[]>("/artigos");
  return response.data;
};