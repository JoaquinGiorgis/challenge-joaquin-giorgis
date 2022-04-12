import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
//context
import { DataContext } from '../../context/DataContext';
//icons
import { GrRss } from 'react-icons/gr';
import { BsEyeFill } from 'react-icons/bs';
import { BsFillCalendarFill } from 'react-icons/bs';
//styles
import './SectionNews.scss';

function SectionNews() {
  const { news } = useContext(DataContext);
  const { id } = useParams();

  if (news.length !== 0) {
    const newsIterated = Object.entries(news);
    const newsfilter = newsIterated.filter(([key, value]) => value.id === id);
    var newsFiltered = Object.fromEntries(newsfilter);
  };

  return (
    <div>
      {news.length !== 0 && <div className='sectionNews'>
        <h1 className='sectionNews__title'>{newsFiltered[id].title}</h1>
        <div className='sectionNews__stats'>
          <div className='sectionNews__stats--date'>
            <BsFillCalendarFill />
            <p >{newsFiltered[id].createdAt.substring(0, 10)}</p>
          </div>
          <div className='sectionNews__stats--views'>
            <BsEyeFill />
            <p >{newsFiltered[id].views}</p>
          </div>
          <div className='sectionNews__stats--category'>
            <GrRss />
            <p >{newsFiltered[id].category}</p>
          </div>
        </div>
        <div className='sectionNews__cover'>
          <img className='sectionNews__cover--img' src={newsFiltered[id].imageUrl} alt="" />
        </div>
        <p className='sectionNews__subtitle'>{newsFiltered[id].subtitle}</p>
        <p className='sectionNews__body'>{newsFiltered[id].body}</p>
      </div>}
    </div>
  );
};

export default SectionNews;