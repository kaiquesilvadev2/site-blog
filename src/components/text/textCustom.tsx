import React from "react"

interface TextProps extends React.ComponentProps<"p"> {

}

export const TextCustom = ({ children, className, ...props }: TextProps) => {
    return (
        <p className={`text-[#6b8ab4] text-[1.0rem] hover:text-[#94afd4] ${className}`} {...props}>{children}</p>
    )
}