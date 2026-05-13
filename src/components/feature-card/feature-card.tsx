import React from "react"

interface FeatureCardProps extends React.ComponentProps<"div"> {
    badge: string
    title: string
}

export const FeatureCard = ({
    badge,
    title,
    className
}: FeatureCardProps) => {
    return (
        <div className={`${className} flex flex-col gap-4`}>
            <p className="text-blue-200 font-sans bg-blue-400 w-fit px-3 py-1.5 rounded-[0.1rem]">
                {badge}
            </p>
            <h2 className="text-2xl md:text-3xl text-gray-100 font-bold">
                {title}
            </h2>
        </div>
    )
}