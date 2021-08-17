import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {
    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball']
    const [categories, setCategories] = useState(['Dragon Ball']);

    const handleCategoryAdd = (category) => {
        setCategories(cats => [category, ...cats]);
    }

    // const handleAdd = () => {
    //     // const data = [...categories, 'Naruto'];
    //     // setCategories(data);
    //     setCategories(cats => [...cats, 'HuntexXHunter']);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ handleCategoryAdd } />
            <hr />
            <ol>
                {
                    categories.map(c => (
                        <GifGrid category={c} key={c}/>
                    ))
                }
            </ol>
        </>
    )
}

export default GifExpertApp