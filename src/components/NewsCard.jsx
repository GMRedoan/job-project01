import React from 'react';

const NewsCard = ({ article }) => {
    return (
        <a
        href={article.url}
        target="_blank"
        rel='noreferrer'
        className='border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105'
        >
            {
                article.urlToImage && (
                    <img src={article.urlToImage} alt="news"
                        className='h-48 w-full object-cover' />
                )
            }
            <div className='p-4'>
                <span className='text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded'>General</span>
                <h2 className='font-bold text-lg mt-4'>{article.title}</h2>

                <p className='text-sm text-gray-600 mt-1'>{article.description}</p>

                <div className='text-xs text-gray-500 mt-3 flex justify-between'>
                    <span>{article.source.name}</span>
                    <span>{new Date(article.
                        publishedAt).toDateString()}</span>
                </div>
            </div>
        </a>
    );
};

export default NewsCard;