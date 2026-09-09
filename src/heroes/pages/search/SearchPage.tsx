import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControls } from "./ui/SearchControls";
import { CustomBreadcrumb } from "@/components/custom/CustomBreadcrumb";
import { useQuery } from "@tanstack/react-query";
import { searchHeroAction } from "@/heroes/actions/search-heroes.action";
import { useSearchParams } from "react-router";
import { HeroGrid } from "@/heroes/components/HeroGrid";


export const SearchPage = () => {
    const [searchParams] = useSearchParams();
    
    const name= searchParams.get('name') ?? '';
    const strength= searchParams.get('strength') ?? '';

    const { data = [] } = useQuery({
          queryKey: ['search', {
            name,
            strength
          }],
        queryFn: () => searchHeroAction({name, strength}),
        staleTime: 1000 * 60 * 5
    });

    return (
        <>
            <CustomJumbotron
                title="Busqueda de supers"
                description="Descubre, explora y administra heroes y villanos"
            />

            <CustomBreadcrumb currentPage="Buscador de heros" breadcrumbs={[
                { label: 'Home', to: '/'},
                { label: 'Home', to: '/'},
                { label: 'Home', to: '/'},
            ]}/>
            <HeroStats />

            <SearchControls />

            <HeroGrid heroes={data} /> 
        </>
    )
}

export default SearchPage;