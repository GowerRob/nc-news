import axios from 'axios'

const newsApi= axios.create({
    baseURL:'https://newsservicerg.onrender.com/api'
});

export const getArticles = () => {
    return newsApi.get('/articles')
    .then((res)=>{
        return res.data.articles;
    })

};

