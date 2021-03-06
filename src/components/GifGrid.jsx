import React  from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGifs } from '../helpers/getGifs';
import GifGridItem from './GifGridItem';
import PropTypes from 'prop-types'


const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([]);
    const { data: images, loading } = useFetchGifs(category);
    
    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>
            {loading && <p>Loading....</p>}
            <div className="card-grid">
                {
                    images.map(img => (
                        <GifGridItem key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}

export default GifGrid