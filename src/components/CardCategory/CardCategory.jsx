import React, { useContext, useEffect, useState } from 'react';
//context
import { DataContext } from '../../context/DataContext';
//styles
import './CardCategory.scss';

function CardCategory() {
    const { news } = useContext(DataContext);
    const [categories, setCategories] = useState();

    useEffect(() => {
        setCategories(Object.entries(news).map(([key, value]) => (value)));
    }, [news]);

    if (categories !== undefined) {
        const arrayInfoCards = [];
        categories.map((category) => {
            let infoCards = {
                title: category.category,
                img: category.thumbnailUrl
            };
            arrayInfoCards.push(infoCards);
        });
        const set = new Set(arrayInfoCards.map(JSON.stringify));
        var objCategories = Array.from(set).map(JSON.parse);
    };

    return (
        <div className='category'>
            <div className='category__box'>
                {objCategories === undefined ? <p>Cargando...</p> :
                    <div className='category__box--data'>
                        <div className='category__box--data--title'>
                            <h1 className=''>Categories to show</h1>
                        </div>
                        <div className='category__box--data--card'>
                            {objCategories.map((item, key) => {
                                return (
                                    <div className='category__box--data--card--info' key={key}>
                                        <img src={item.img} alt="" />
                                        <h2 >{item.title}</h2>
                                    </div>
                                )
                            })}
                        </div>
                    </div>}
            </div>
        </div>
    );
};

export default CardCategory;