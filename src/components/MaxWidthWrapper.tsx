import { ReactNode } from "react"
import { cn } from "@/lib/utils"

const MaxWidthWrapper = ({
    className,
    children
}:{
    className?: string, // we are using typescript so we have to define its parameter(childre, children)
    children: ReactNode
}) => { // this is default "mx-auto w-full max-w-screen-xl px-2.5 md:px-20" , if we give value to classname then it will override
    return (
        <div className={cn("mx-auto w-full max-w-screen-xl px-2.5 md:px-20", className)}>  
             {children}
        </div>
    )
}
export default MaxWidthWrapper

 