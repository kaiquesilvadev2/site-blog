import React from "react"

interface FeatureContentProps extends React.ComponentProps<"div"> {
}

export const FeatureContent = ({ className, children }: FeatureContentProps) => {
    return (
        <div className={`${className} p-6 md:p-12 bg-gray-400 rounded-[0.6rem]`} >{children}</div>
    )
} 