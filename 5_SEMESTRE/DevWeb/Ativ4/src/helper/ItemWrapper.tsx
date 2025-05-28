import React, {ReactNode} from 'react'

interface Props{
    className?: string;
    display?: string;
    flexDirection?: string;
    alignItems?: string;
    justifyContent?: string;
    maxWidth?: string;
    margin?: string;
    children: ReactNode
}
export const ItemWrapper:React.FC<Props> = ({ className, children }) => {
    return <div className={className}>{children}</div>
    
}