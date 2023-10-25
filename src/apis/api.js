import axios from 'axios'



const newsApi= axios.create({
    baseURL:'https://newsservicerg.onrender.com/api'
});

export const getArticles = (searchParams) => {
    const order=searchParams.get('order');
    const sort_by=searchParams.get('sort_by')
    console.log("Got ", order," ", sort_by)

    return newsApi.get('/articles',{
        params:{order:order,sort_by:sort_by}
    })
    .then((res)=>{
        return res.data.articles;
    })

};

export const getArticleById = (article_id)=>{
    return newsApi.get(`/articles/${article_id}`)
    .then((res)=>{
        return res.data.article;
    })
}


export const updateArticleVotes = (article_id, votes)=>{
    
    return newsApi.patch(`/articles/${article_id}`,
    {"inc_votes":votes}).then((res)=>{
        return res
    })
}

export const getCommentsById = (article_id)=>{
    return newsApi.get(`/articles/${article_id}/comments`)
    .then((res)=>{
        return res.data.comments;
    })
}

export const postNewComment = (article_id,comment)=>{
    return newsApi.post(`/articles/${article_id}/comments`,
    comment)

}

export const getTopics = ()=>{
    return newsApi.get(`/topics`)
    .then((res)=>{
        return res.data.topics
    })

}