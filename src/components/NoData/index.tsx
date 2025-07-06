import { type FC } from 'react'


// img 
import noData from '../../assets/images/no-data.png';


type Props = {
    label: string
}
const NoData: FC<Props> = ({ label }) => {
    return (
        <div className='w-full flex flex-col justify-center items-center relative'>
            <img src={noData} alt="no data" className='w-[20rem] h-[20rem] object-cover' />
            <p className='text-sm font-semibold text-black absolute bottom-8'>{label}</p>
        </div>
    )
}

export default NoData
