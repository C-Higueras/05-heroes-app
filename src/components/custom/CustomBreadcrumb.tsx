import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Link } from "react-router";

interface Props {
    currentPage: string;
    breadcrumbs?: Breadcrumb[]
}

interface Breadcrumb {
    label: string,
    to: string,
}

export const CustomBreadcrumb = ({ currentPage, breadcrumbs }: Props) => {
  return (
    <Breadcrumb className="my-5">
      <BreadcrumbList>

        <BreadcrumbItem>
                        <BreadcrumbLink>
                            <Link to="/">Inicio</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
       
        {
            breadcrumbs?.map(crumb => (
                <div className="flex items-center">
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink>
                            <Link to={crumb.to}>{crumb.label}</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                </div>
            ))
        }
        <BreadcrumbItem>
          <BreadcrumbPage>{currentPage}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
