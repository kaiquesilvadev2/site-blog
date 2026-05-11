import { React } from "next/dist/server/route-modules/app-page/vendored/rsc/entrypoints"

interface SiteContainerProps extends React.ComponentProps<"div"> {
}

export const SiteContainer = ({ children, className, ...props }: SiteContainerProps) => {
    return (<div className={`${className} max-w-7xl m-auto  lg:px-2 xl:p-1`} {...props}>
        {children}
    </div>)
}