import React from 'react';
import { useParams } from 'react-router-dom';
import { NewsItem } from '../News/NewsData';

import './NewsArticle.scss'

interface Props {
    news: NewsItem[];
}

const NewsPage: React.FC<Props> = ({ news }) => {
    const { id } = useParams<{ id?: string }>(); // Mark id as optional
    const newsItem = id ? news.find(item => item.id === parseInt(id, 10)) : undefined;

    if (!newsItem) {
        return <div className="news-container">News item not found.</div>;
    }

    return (
        <section id="newsarticle" className="wrapper">
        <div className="news-container content">
        <h2>{newsItem.title}</h2>
        <p>{newsItem.intro}</p>
            <img src={newsItem.image} alt={newsItem.title} className="news-image" />
            <div className="news-details">
                <p>Date: {newsItem.date}</p>
                <p>Source: {newsItem.source}</p>
                <p>{newsItem.content}</p>
            </div>
        </div>
    </section>
    );
};

export default NewsPage;