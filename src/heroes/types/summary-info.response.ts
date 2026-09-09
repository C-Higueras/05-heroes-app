import type { Hero } from "./hero.interface";

export interface SummaryInfo {
    totalHeroes:   number;
    strongestHero: Hero;
    smartestHero:  Hero;
    heroCount:     number;
    villainCount:  number;
}
