import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import React from "react"

interface ButtonCreateStoreProps extends React.ComponentProps<"button"> {
}

export const ButtonCreateStore = ({
    children, className
}: ButtonCreateStoreProps) => {
    return (
        <Button className={`${className} rounded-full bg-blue-300 h-11 text-body-xs font-normal text-gray-100`} >
            {children}

            <ArrowRight />
        </Button>
    )
}