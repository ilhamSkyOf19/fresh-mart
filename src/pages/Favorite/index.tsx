import { useEffect, useState, type FC } from 'react'
import PageLayout from '../../layouts/PageLayout'
import CardProduct from '../../components/CardProduct'
import type { ProductRes } from '../../types/product-type';
import { ProductServiceAPI } from '../../service/api-product.service';
import { handleFavorite } from '../../utils/handleCart';


// img 
import NoData from '../../components/NoData';
import useSetLoading from '../../hooks/setLoading';
import ModalLoading from '../../components/ModalLoading';

const Favorite: FC = () => {

    // state 
    const [data, setData] = useState<ProductRes[] | null>(null);

    // handle loading 
    const { loading, handleLoading } = useSetLoading();

    // fetch data 
    const fetchData = async () => {
        const result = await ProductServiceAPI.getProductsFavorite(true);
        setData(result ?? []);
    }


    // useEffect 
    useEffect(() => {
        fetchData();
    }, [])


    // handle favorite 
    const handleFavoriteProduct = async (id: number | null, favorite: string) => {
        try {
            handleLoading(true);
            if (!id) return;
            await handleFavorite(id, favorite, setData, fetchData);
            fetchData();
        } catch (error) {
            console.log(error);
        } finally {
            handleLoading(false);
        }
    };



    return (
        <PageLayout>
            <div className='w-full flex flex-col justify-start items-start px-14 py-2 gap-12'>
                <p className='text-2xl font-bold text-black mb-4'>Product Favorite.</p>
                <div className='w-full flex flex-row justify-center items-center flex-wrap gap-10 pb-4'>
                    {
                        Array.isArray(data) && data.length === 0 ? (
                            <NoData label="Favorite is empty" />
                        ) : (
                            Array.isArray(data) &&
                            data.map((item, index) => (
                                <CardProduct
                                    key={index}
                                    data={item}
                                    handleFavorite={handleFavoriteProduct}
                                />
                            ))
                        )
                    }

                </div>
            </div>
            <ModalLoading show={loading} />
        </PageLayout>

    )
}

export default Favorite
