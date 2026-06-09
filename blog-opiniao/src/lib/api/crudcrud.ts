import { Artigo } from "@/types/types";
import { API_URL } from "./axios";

type Data = {
    result: Artigo[];
}

export const getArtigos = async () => {
    
    const response = await API_URL.get<Data>("/artigos");
    return response.data.result;

    }