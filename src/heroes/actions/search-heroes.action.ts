import { heroApi } from "../api/hero.api"
import type { Hero } from "../types/hero.interface";

const BASE_URL = import.meta.env.VITE_API_URL;

interface Options {
    name?: string;
    team?: string;
    category?: string;
    universe?: string;
    status?: string;
    strength?: string;
}

export const searchHeroAction = async(options: Options = {}) => {
    if(!options.name && !options.team && !options.category && !options.universe && !options.status && !options.strength) {
        return [];
    }

    const { data } = await heroApi.get<Hero[]>('/search', {
        params: {
            name: options.name,
            team: options.team,
            category: options.category,
            universe: options.universe,
            status: options.status,
            strength: options.strength,
        }
    });

    return data.map( hero => ({
        ...hero,
        image: `${ BASE_URL }/images/${ hero.image}`
    }))
}