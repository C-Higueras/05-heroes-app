import { heroApi } from "../api/hero.api"
import type { SummaryInfo } from "../types/summary-info.response";

export const getSummaryAction = async() => {
   const { data } = await heroApi.get<SummaryInfo>('/summary');

    return data;
}