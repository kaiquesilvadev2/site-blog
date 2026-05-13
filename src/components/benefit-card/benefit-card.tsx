import { LucideIcon } from "lucide-react"
import React from "react"

interface BenefitCardProps extends React.ComponentProps<"div"> {
    icon: LucideIcon
    title: string
    description: string
    iconBg?: string
    iconColor?: string
}

export const BenefitCard = ({
    className,
    icon: Icon,
    title,
    description,
    iconBg = "bg-blue-200",
    iconColor = "text-gray-100"
}: BenefitCardProps) => {
    return (
        <div className={`${className} flex flex-col gap-4 p-6 rounded-[0.8rem]`}>
            <div className="flex flex-col gap-4">

                <div className={`p-2 w-fit h-fit rounded-lg ${iconBg}`}>
                    <Icon className={`${iconColor} w-5 h-5`} />
                </div>

                <div className="flex flex-col gap-2">
                    <h2 className="text-heading-sm text-gray-100 font-bold">
                        {title}
                    </h2>

                    <p className="text-body-sm text-gray-200">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}