import React from 'react'
import GifGridItem from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

const GifGrid = ({ category }) => {

    /*  

    Debajo del H3
    
    <div className="card-grid">
                
                    {
                        images.map( img => {
                        return  <GifGridItem 
                                    key = {img.id}
                                    {...img}
                                />
                        })
                    }
            </div>
    */

    const { data:images, loading } = useFetchGifs( category );

    return (

        <>
            <h3 className="animate__animated animate__fadeIn">{ category }</h3>

            { loading && <p className="animate__animated animate__flash animate__repeat-2">Loading</p> }
            <div className="card-grid">
                
                    {
                        images.map( img => {
                        return  <GifGridItem 
                                    key = {img.id}
                                    {...img}
                                />
                        })
                    }
            </div>
            
            
            
        </>
    )
}

GifGrid.propTypes = {

}

export default GifGrid;
