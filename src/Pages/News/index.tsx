import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NewsItem } from './NewsData';

import './News.scss'

interface Props {
    news: NewsItem[];
}

const formatDate = (dateString: string) => {
    const [year, month, day] = dateString.split('-');
    return `${day}-${month}-${year}`;
};

const News: React.FC<Props> = ({ news }) => {

    useEffect(() => {
        document.title = "Autohunt - News";  
        window.scrollTo(0,0);
    }, []);

    // Sort the news items by date in descending order
    const sortedNews = [...news].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return (
        <section id="news" className="wrapper">
        <div className="news-container content">
            <div className="intro">
                <h1>Auto Industry News</h1>
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
                        <p>{formatDate(item.date)} - {item.source}</p>
                        <p>
                            {item.tags.map((tag, index) => (
                                <span key={index} className={`tag ${tag === 'primary' ? 'tag-primary' : ''}`}>{tag}</span>
                            ))}
                        </p>
                        <p>{item.intro}</p>
                        {new Date(item.date) <= new Date() && (
                            <>
                                <Link to={`/news/${item.id}`} className="read-more button">Read More</Link>
                            </>
                        )}
                            {new Date(item.date) > new Date() && (
                            <>
                                <p className='coming-soon button read-more'>Publish: {formatDate(item.date)}</p>
                            </>
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