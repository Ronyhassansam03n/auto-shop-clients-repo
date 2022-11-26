import Categorycard from '../../../../Card/CategoryCard/Categorycard';
import { useQuery } from '@tanstack/react-query';


const Categories = () => {

    const { data: categories = [] } = useQuery({

        queryKey: ['categories'],

        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/brandsCategories`)
            const data = await res.json()
            console.log(data)
            return data;

        }

    })

    return (
        <div>
            <h1 className=' lg:text-4xl font-bold  mb-5 md:text-2xl mt-5'> Our Brands Categories</h1>

            <div className='grid  grid-cols-1  md:grid-cols-1 lg:grid-cols-3 '>

                {

                    categories.map(category => <Categorycard
                        key={category._id}
                        category={category}
                    ></Categorycard>)
                }
            </div>
        </div>
    );
};

export default Categories;