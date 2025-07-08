import { type FC } from 'react'
import Lottie from 'lottie-react'
import loading from '../../assets/lottie/loading.json'
// props 
type Props = {
    show: boolean
}

const ModalLoading: FC<Props> = ({ show }) => {
    return (
        <div className={`fixed top-0 w-full h-screen flex justify-center items-center z-50 bg-[rgba(0,0,0,0.5)] ${show ? 'block' : 'hidden'}`}>
            <Lottie animationData={loading} loop={true} className='w-[5rem] h-[5rem]' />
        </div>
    )
}

export default ModalLoading
