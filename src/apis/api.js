import axios from 'axios'

const newsApi= axios.create({
    baseURL:'https://newsservicerg.onrender.com/api'
});


export const postUser=(user)=>{

    return newsApi.post(`/users`,user)
    .then((res)=>{
        return res
    })

}


export const postArticle =(article)=>{
    return newsApi.post(`/articles`,article)
    .then((res)=>{
        console.log(res)
    })

}

export const getArticles = (searchParams={order:'asc',sort_by:'created_at'}) => {
    const order=searchParams.get('order');
    const sort_by=searchParams.get('sort_by');
    return newsApi.get('/articles',{
        params:{order:order,sort_by:sort_by, limit:50}
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

};


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

export const deleteComment = (comment_id)=>{
    return newsApi.delete(`/comments/${comment_id}`)
    .then((res)=>{
        return res.data.topics
    })

}

export const getUsers =()=>{
    return newsApi.get(`/users`)
    .then((res)=>{
        return res.data.users
    })

}

export const updateCommentVotes = (comment_id, votes)=>{
    
    return newsApi.patch(`/comments/${comment_id}`,
    {"inc_votes":votes}).then((res)=>{
        return res
    })
}