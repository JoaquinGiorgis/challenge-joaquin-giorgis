import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
//context
import { DataContext } from '../../context/DataContext';
//icons
import { GrRss } from 'react-icons/gr';
import { BsEyeFill } from 'react-icons/bs';
import { BsFillCalendarFill } from 'react-icons/bs';
//styles
import './CardNews.scss';

function CardNews() {
    const { news } = useContext(DataContext);
    const [cardNews, setCardNews] = useState();
    const sampleLocation = useLocation();

    useEffect(() => {
        setCardNews(Object.entries(news).map(([key, value]) => (value)));
    }, [news]);

    if (cardNews !== undefined) {
        var arrayCardNews = [];

        cardNews.map((news) => {
            const { thumbnailUrl, category, views, createdAt, title, imageUrl, subtitle, body, id } = news;
            const dateformated = createdAt.substring(0, 10);
            let infoCards = {
                img: thumbnailUrl,
                category: category,
                views: views,
                date: dateformated,
                title: title,
                imageUrl: imageUrl,
                subtitle: subtitle,
                body: body,
                id: id
            };

            if (sampleLocation.pathname === '/recent-news') {
                arrayCardNews.push(infoCards);
                arrayCardNews.sort(function (a, b) {
                    return new Date(a.date) - new Date(b.date)
                });
            } else if (sampleLocation.pathname === '/top-rated') {
                arrayCardNews.push(infoCards);
                arrayCardNews.sort(function (a, b) {
                    return a.views - b.views
                });
            };

        });

    };

    return (
        <div className='cardNews'>
            {arrayCardNews !== undefined && arrayCardNews.reverse().map((news, key) => {
                const { img, title, category, views, date } = news
                return (
                    <div className='cardNews__box' key={key}>
                        <img src={img} alt="" width="300px" />
                        <h2>{title}</h2>
                        <div className='cardNews__box--stats'>
                            <div className='cardNews__box--stats--category'>
                                <GrRss />
                                <p >{category}</p>
                            </div>
                            <div className='cardNews__box--stats--views'>
                                <BsEyeFill />
                                <p>{views}</p>
                            </div>
                        </div>
                        <hr />
                        <div className='cardNews__box--footer'>
                            <div className='cardNews__box--footer--date'>
                                <BsFillCalendarFill />
                                <p>{date}</p>
                            </div>
                            <Link to={`/article/${news.id}`}> <button className='cardNews__box--footer--btn'>Read More</button></Link>
                        </div>
                    </div>
                )
            })}
        </div>

    );
};

export default CardNews;