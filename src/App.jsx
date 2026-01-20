import { useEffect, useState } from 'react'
import './App.css'
import CountrySelect from './components/CountrySelect'
import NewsCard from './components/NewsCard'

function App() {
  const [country, setCountry] = useState("us")
  const [articles, setArticles] = useState([])

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=${country}&category=business&apiKey=${import.meta.env.VITE_API_KEY}`
    )
    .then((res) => res.json())
    .then((data) => {
      setArticles(data.articles || [])
    })
    .catch((error) => {
      console.log(error);
    })
  },[country])
 
  return (
    <div className='max-w-6xl mx-auto p-4'>
      <h1 className='text-3xl font-bold mb-4'>Top Headlines</h1>
      <CountrySelect onChange={setCountry}></CountrySelect>
      <div className='grid grid-cols-3 gap-5 mt-6'>
        {
          articles.map((article, index) => (
            <NewsCard key={index} article={article}></NewsCard>
          ))
        }
      </div>
    </div>
   )
}

export default App
