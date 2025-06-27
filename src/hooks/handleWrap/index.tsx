import { useRef, useState } from "react"


const useHandleWrap = () => {
    // use ref home 
    const router = useRef<HTMLDivElement>(null)
    const routerWrap = useRef<HTMLDivElement>(null)


    // state 
    const [showRouter, setShowRouter] = useState<boolean>(false)

    // handle show router home 
    const handleRouter = () => {
        setShowRouter(!showRouter)
    }


    return { router, routerWrap, showRouter, handleRouter, setShowRouter }
}


export default useHandleWrap