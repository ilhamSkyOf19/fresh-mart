import React from 'react'

type Props = {
    label1: string
    label2: string
}

const SubJudulGreenBlack: React.FC<Props> = ({ label1, label2 }) => {
    return (
        <p className='font-bold text-2xl text-black capitalize'>
            <span className='text-primary-green'>{label1} </span>
            {label2}
        </p>
    )
}

export default SubJudulGreenBlack
