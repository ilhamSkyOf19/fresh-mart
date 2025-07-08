import { useState } from "react"

const useSetLoading = () => {
    const [loading, setLoading] = useState<boolean>(false)


    const handleLoading = (condition: boolean) => setLoading(condition)
    return { loading, handleLoading }
}

export default useSetLoading