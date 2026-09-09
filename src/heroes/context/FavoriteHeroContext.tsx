import { createContext, useEffect, useState, type PropsWithChildren } from "react";
import type { Hero } from "../types/hero.interface";

interface FavoriteHeroContext {
    favorites: Hero[];
    favoriteCount: number;

    isFavorite: (hero: Hero) => boolean;
    toggleFavorite: (hero: Hero) => void;
}

export const FavoriteHeroContext = createContext({} as FavoriteHeroContext);

const getFavoritesFromLocalStorage = ():Hero[] => {
    const favorites = localStorage.getItem('favorites');

    return favorites ? JSON.parse(favorites) : []
}

export const FavoriteHeroProvider = ({ children }: PropsWithChildren) => {
    const [favorites, setFavorites] = useState<Hero[]>(getFavoritesFromLocalStorage());

    const toggleFavorite = (hero: Hero) => {
        const heroExist = favorites.some((item) => hero.id === item.id);

        if (heroExist) {
            const newFavorites = favorites.filter((item) => item.id !== hero.id);
            setFavorites(newFavorites);
            return;
        }

        setFavorites([...favorites, hero])
    }

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites])

    return (
        <FavoriteHeroContext
            value={{
                favoriteCount: favorites.length,
                favorites,

                isFavorite: (hero: Hero) => favorites.some((item) => hero.id === item.id),
                toggleFavorite
            }}
            >
                {children}
        </FavoriteHeroContext>
    )
}