import React from "react"

interface TextProps extends React.ComponentProps<"p"> {

}

export const TextCustom = ({ children, className, ...props }: TextProps) => {
    return (
        <p className={`transition-color text-blue-100 text-[0.9rem]  hover:text-blue-200 font-mono leading-3.5 ${className}`} {...props}>{children}</p>
    )
}