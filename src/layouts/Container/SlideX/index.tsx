import type React from "react"

type Props = {
    children: React.ReactNode
}
// const cards product 
const ContainerSlideX: React.FC<Props> = ({ children }) => {
    return (
        <div className='w-[90%] h-full overflow-x-scroll flex flex-row justify-start items-centers gap-6 py-6 scrollbar-hide '>
            {
                children
            }
        </div>
    )
}


export default ContainerSlideX;