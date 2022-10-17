
// import axios from "axios";
// import React, { useState } from 'react'
// import './NewsLetter.css'

// const NewsLetter = () => {

//     const [ article_title, setArticleTitle ] = useState('')
//     const [ content, setContent ] = useState('')

//     const randomIndex = Math.floor(Math.random() * 100)

//     const news_ApiKey = process.env.REACT_APP_NEWS_API_KEY
//     const getURL = `https://newsapi.org/v2/everything?q=Apple&from=2022-09-05&sortBy=popularity&apiKey=${news_ApiKey}`

//     const fetch_news = () => {
//         axios(getURL).then((response) => {
//             setArticleTitle(response.data.articles[randomIndex].title)
//             setContent(response.data.articles[randomIndex].content)
//             return response.data.articles[randomIndex].title
//         })
//     }

//     //fetch_news()

//     return(
//         <div >
//             <div className="news-div text-center container">
//                 <div className="api-title">Weekly News</div>
//                 <div className="api-result-title">{article_title}</div>
//                 <div className="article-body">{content}</div>

//                 <button className="btn btn-outline-dark btn-lg" onClick={ fetch_news }>Get News</button>
//             </div>
//         </div>
//     )
// }

// export default NewsLetter