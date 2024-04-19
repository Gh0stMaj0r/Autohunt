import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { NewsItem } from '../News/NewsData';
import { Link } from 'react-router-dom';

import './NewsArticle.scss'

import { IoIosArrowBack } from "react-icons/io";

interface Props {
    news: NewsItem[];
}

const formatDate = (dateString: string) => {
    const [year, month, day] = dateString.split('-');
    return `${day}-${month}-${year}`;
};

const NewsPage: React.FC<Props> = ({ news }) => {
    
    useEffect(() => {
        document.title = "Autohunt - NewsArticle";  
        window.scrollTo(0,0);
    }, []);

    const { id } = useParams<{ id?: string }>(); // Mark id as optional
    const newsItem = id ? news.find(item => item.id === parseInt(id, 10)) : undefined;

    if (!newsItem) {
        return <div className="news-container">News item not found.</div>;
    }

    return (
        <section id="newsarticle" className="wrapper">
        <div className="news-container content">
        <Link className='back-icon' to="/news" replace><IoIosArrowBack />Back</Link>
        <h2>{newsItem.title}</h2>
        <p>{newsItem.intro}</p>
            <img src={newsItem.image} alt={newsItem.title} loading='lazy' className="news-image" />
            <div className="news-details">
                <p>
                    {newsItem.tags.map((tag, index) => (
                    <span key={index} className={`tag ${tag === 'primary' ? 'tag-primary' : ''}`}>{tag}</span>
                    ))}
                </p>
                <p>Published: {formatDate(newsItem.date)}</p>
                <p>Source: {newsItem.source}</p>
                {newsItem.content.split(/\n\s*\n/).map((paragraph, index) => (
                <div key={index}>
                    <p>{paragraph}</p>
                    <br /> {/* Add additional space between paragraphs */}
                </div>
            ))}
            <p>Written by: {newsItem.written}</p>
            </div>
        </div>
    </section>
    );
};

export default NewsPage;