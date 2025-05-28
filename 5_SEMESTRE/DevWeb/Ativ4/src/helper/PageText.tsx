import React, {ReactNode} from 'react'

interface Props{
    className?: string;
    fontSize?: string | number;
    color?: string;
    children: ReactNode
}
export const PageText:React.FC <Props> = ({className, children}) => {
    return (
       <span className={className}>{children}</span>
    )
}