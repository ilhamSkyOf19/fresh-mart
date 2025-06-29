import React, { useEffect, useState } from 'react'
import SubJudulGreenBlack from '../../../components/SubJudulGreenBlack'
import CardProduct from '../../../components/CardProduct'

// json 
import product from '../../../json/products.json'
import type { Product } from '../../../model/product-model'


const SectionFeturedProduct: React.FC = () => {
    // state data
    const [data, setData] = useState<Product[] | null>(null);

    // get data
    useEffect(() => {
        setData(product)
    }, [])

    return (
        <div className='w-full min-h-[100vh] flex flex-col justify-start items-center bg-white-smoke'>
            <SubJudulGreenBlack label1='Featured' label2='Product' />
            <FilterListComponent />
            <ContainerCardProduct data={data} />

        </div>
    )
}




const FilterListComponent: React.FC = () => {
    // filters 
    const filter: string[] = ['organic', 'fruits', 'seafood', 'wine & beer', "bakery"];

    // selected
    const [selected, setSelected] = useState<number>(0);


    return (
        <div className='w-full flex flex-row justify-center items-center mt-2 gap-6'>
            {
                filter.map((item, index) => (
                    <p key={index} className={`text-xs font-semibold text-black cursor-pointer py-3 px-3 uppercase relative after:absolute after:w-0 after:h-[2px] after:bg-primary-green after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-200 ${selected === index ? 'before:absolute before:w-full before:h-[2px] before:bg-primary-green before:bottom-0 before:left-0 text-primary-green' : ''}`} onClick={() => setSelected(index)}>{item}</p>
                ))
            }
        </div>
    )
}



type Props = {
    data?: Product[] | null
}
// const cards product 
const ContainerCardProduct: React.FC<Props> = ({ data }) => {
    return (
        <div className='w-full min-h-[50vh] flex flex-row justify-center items-center relative before:absolute before:w-full before:h-[1px] before:bg-gray-300 before:top-0 py-3'>
            <div className='w-[90%] h-full overflow-x-scroll flex flex-row justify-start items-centers gap-6 py-6 scrollbar-hide '>
                {
                    data?.map((item, index) => (
                        <CardProduct key={index} img={item?.img} category={item.category} title={item.title} price={item.price} favorite={item?.favorite} />

                    ))
                }
            </div>
        </div>
    )
}

export default SectionFeturedProduct
