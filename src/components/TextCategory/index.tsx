import React from 'react'

type Props = {
    text?: string | null
}

const TextCategory: React.FC<Props> = ({ text }) => {
    return (
        <p className='font-normal italic text-to-small text-primary-green capitalize'>{text ?? 'category'}</p>
    )
}

export default TextCategory
