import React from 'react';
import { Link } from 'react-router-dom';
import { NewsItem } from './NewsData';

import './News.scss'

interface Props {
    news: NewsItem[];
}

const News: React.FC<Props> = ({ news }) => {
    return (
        <section id="news" className="wrapper">
        <div className="news-container content">
            <h2>Auto Industry News</h2>
            {news.map(item => (
                <div key={item.id} className="news-item">
                    <div className="news-row">
                    <img src={item.image} alt={item.title} className="news-image" />
                    <div className="news-details">
                        <h3>{item.title}</h3>
                        <p>{item.date} - {item.source}</p>
                        <p>{item.intro}</p>
                        <Link to={`/news/${item.id}`} className="read-more button">Read More</Link>
                    </div>
                </div>
            </div>
            ))}
        </div>
    </section>
    );
};

export default News;