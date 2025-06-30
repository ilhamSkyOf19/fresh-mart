import React, { useEffect, useState } from 'react'
import SubJudulGreenBlack from '../../../components/SubJudulGreenBlack'
import ContainerSlideX from '../../../components/layouts/Container/SlideX'
import CardNewsBlogs from '../../../components/CardNewsBlogs'

// json
import newsBlogs from '../../../json/news-blogs.json'
import type { NewsBlogsModel } from '../../../model/news-blogs-model'

const SectionNewsBlogs: React.FC = () => {

    // const data 
    const [data, setData] = useState<NewsBlogsModel[] | null>(null);

    // set data 
    useEffect(() => {
        const fetch = async () => {
            const result = newsBlogs;
            setData(result);
        }
        fetch();
    }, [])

    return (
        <div className='w-full min-h-[100vh] bg-white-smoke py-4'>
            <div className='flex flex-col w-full py-4 justify-start items-center gap-6'>
                <SubJudulGreenBlack label1='News' label2='& Blogs' />
                <p className='text-xs font-normal text-center w-[50%] text-slate-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus ut a unde doloribus iusto totam pariatur modi illum iure dolores.</p>
            </div>

            {/* container card news and blogs */}
            <ContainerNewsBlogs data={data} />
        </div>
    )
}


type Props = {
    data?: NewsBlogsModel[] | null
}
// container news and blogs 
const ContainerNewsBlogs: React.FC<Props> = ({ data }) => {
    return (
        <div className='flex flex-row justify-center items-center w-full min-h-[70vh]'>
            {
                data ? (
                    <ContainerSlideX>
                        {
                            data?.map((item, _) => (
                                <CardNewsBlogs key={item?.id} category={item?.category} title={item?.title} image={item?.image} date={item?.date} commentCount={item?.commentCount} description={item?.description} />
                            ))
                        }

                    </ContainerSlideX>
                ) : (
                    <div className='w-full h-full flex flex-row justify-center items-center'>Loading...</div>
                )
            }
        </div>
    )
}

export default SectionNewsBlogs
