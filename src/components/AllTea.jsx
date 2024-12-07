import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Tea from './Tea';

const AllTea = () => {
    const teas = useLoaderData();
    return (
        <div>
            <h2 className='text-center text-xl font-bold py-10'>All Tea Collection: {teas.length}</h2>
            <div className='grid grid-cols-3 max-w-7xl mx-auto gap-5'>
                {
                    teas.map(tea=><Tea key={tea._id} tea={tea}></Tea>)
                }
            </div>
        </div>
    );
};

export default AllTea;