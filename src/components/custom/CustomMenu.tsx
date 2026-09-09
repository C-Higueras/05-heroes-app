import { Link, useLocation } from "react-router"
import {
    NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { cn } from "cn";

export const CustomMenu = () => {
    const { pathname } = useLocation();

    const isActive = (path: string) => {
        return pathname === path;
    }
    return (
        <NavigationMenu className="py-5">
            <NavigationMenuList >
                <NavigationMenuItem>
                    <NavigationMenuLink
                        className={cn(isActive('/') && "bg-slate-200 rounded-md p-2")}
                    >
                        <Link to="/" >Inicio</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink
                        className={cn(isActive('/search') && "bg-slate-200 rounded-md p-2")}
                    >
                        <Link to="/search" >Buscar supers</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
  )
}