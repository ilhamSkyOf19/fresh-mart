import React from 'react'



type Props = {
    text?: string | null
}
const TitleCard: React.FC<Props> = ({ text }) => {
    return (
        <p className='font-semibold text-sm pr-4'>{text ?? 'title'}</p>
    )
}

export default TitleCard
