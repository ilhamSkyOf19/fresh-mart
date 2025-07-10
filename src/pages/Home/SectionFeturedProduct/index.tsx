import React, { useEffect, useState } from 'react'
import SubJudulGreenBlack from '../../../components/SubJudulGreenBlack'
import CardProduct from '../../../components/CardProduct'

// json 
import ContainerSlideX from '../../../layouts/Container/SlideX'
import type { ProductRes } from '../../../types/product-type'
import { ProductServiceAPI } from '../../../service/api-product.service'
import { handleCart, handleFavorite } from '../../../utils/handleCart'

type PropsProduct = {
    handleCountCart: () => void
    handleCountFavorite: () => void
    handleShowLoading: (condition: boolean) => void
}

const SectionFeturedProduct: React.FC<PropsProduct> = ({ handleCountCart, handleCountFavorite, handleShowLoading }) => {
    // state data
    const [data, setData] = useState<ProductRes[] | null>(null);
    const [category, setCategory] = useState<string>('organic');

    // get data 
    useEffect(() => {
        const fetch = async () => {
            const fetch = await ProductServiceAPI.getProducts(category);
            if (fetch) {
                setData(fetch);
            } else {
                setData([]);
            }
        }

        fetch();
    }, [category])


    // handle category 
    const handleCategory = (category: string) => {
        setCategory(category);
    };

    // handle favorite 
    const handleFavoriteProduct = async (id: number | null, favorite: string) => {
        if (!id) return;
        try {
            handleShowLoading(true);
            await handleFavorite(id, favorite, setData, handleCountFavorite);
        } catch (error) {
            console.log(error);
            return;
        } finally {
            handleShowLoading(false);
        }
    };


    // handle cart product 
    const handleCartProduct = async (idProduct: number | null, quantity: number) => {
        try {
            handleShowLoading(true);
            if (!idProduct) return;
            await handleCart(idProduct, quantity, handleCountCart);
        } catch (error) {
            console.log(error);
        } finally {
            handleShowLoading(false);
        }
    }







    return (
        <div className='w-full min-h-[100vh] flex flex-col justify-start items-center bg-white-smoke'>
            <SubJudulGreenBlack label1='Featured' label2='Product' />
            <FilterListComponent handleCategory={handleCategory} />
            <ContainerCardProduct data={data} handleFavorite={handleFavoriteProduct} handleCart={handleCartProduct} />
        </div>
    )
}



type FilterListProps = {
    handleCategory: (category: string) => void
}
const FilterListComponent: React.FC<FilterListProps> = ({ handleCategory }) => {
    // filters 
    const filter: string[] = ['organic', 'fruits', 'seafood', 'wine & beer', "bread"];

    // selected
    const [selected, setSelected] = useState<number>(0);


    return (
        <div className='w-full flex flex-row justify-center items-center mt-2 gap-6'>
            {
                filter.map((item, index) => (
                    <p key={index} className={`text-xs font-semibold text-black cursor-pointer py-3 px-3 uppercase relative after:absolute after:w-0 after:h-[2px] after:bg-primary-green after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-200 ${selected === index ? 'before:absolute before:w-full before:h-[2px] before:bg-primary-green before:bottom-0 before:left-0 text-primary-green' : ''}`} onClick={() => { setSelected(index), handleCategory(item) }}>{item}</p>
                ))
            }
        </div>
    )
}



type Props = {
    data?: ProductRes[] | null;
    handleFavorite?: (id: number | null, favorite: string) => void
    handleCart?: (idProduct: number | null, quantity: number) => void
}
// const cards product 
const ContainerCardProduct: React.FC<Props> = ({ data, handleFavorite, handleCart }) => {
    return (
        <div className='w-full min-h-[50vh] flex flex-row justify-center items-center relative before:absolute before:w-full before:h-[1px] before:bg-gray-300 before:top-0 py-3'>
            <ContainerSlideX>
                {
                    Array.isArray(data) && data.length > 0 ? (
                        data.map((item, index) => (
                            <CardProduct
                                key={index}
                                data={item}
                                handleFavorite={handleFavorite}
                                handleCart={handleCart}
                            />
                        ))
                    ) : (
                        <div className='w-full h-full flex flex-row justify-center items-center'>
                            Loading...
                        </div>
                    )
                }

            </ContainerSlideX>
        </div>
    )
}

export default SectionFeturedProduct
