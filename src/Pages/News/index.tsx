import React from 'react';
import { Link } from 'react-router-dom';
import { NewsItem } from './NewsData';

import './News.scss'

interface Props {
    news: NewsItem[];
}

const News: React.FC<Props> = ({ news }) => {

    // Sort the news items by date in descending order
    const sortedNews = [...news].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return (
        <section id="news" className="wrapper">
        <div className="news-container content">
            <div className="intro">
                <h2>Auto Industry News</h2>
                <p>Explore the latest news and updates from the auto industry. 
                From groundbreaking innovations to industry insights, our news section covers it all. 
                Stay informed and discover what's driving the future of mobility.</p>
            </div>
            {sortedNews.map(item => (
                    <div key={item.id} className={`news-item ${new Date(item.date) > new Date() ? 'future' : ''}`}>
                    <div className="news-row">
                    <img src={item.image} alt={item.title} loading='lazy' className="news-image" />
                    <div className="news-details">
                        <h3>{item.title}</h3>
                        <p>{item.date} - {item.source}</p>
                        <p>{item.intro}</p>
                        {new Date(item.date) <= new Date() && (
                            <>
                                <Link to={`/news/${item.id}`} className="read-more button">Read More</Link>
                            </>
                        )}
                            {new Date(item.date) > new Date() && (
                            <p className='coming-soon'>Coming Soon!</p>
                        )}
                    </div>
                </div>
            </div>
            ))}
        </div>
    </section>
    );
};

export default News;