import axios from "axios";


export default fetchNews= () => {

    return (dispatch, getState) => {
        axios.get('https://newsapi.org/v2/top-headlines?' +
        'country=us&' +
        'apiKey=6ecbd334a72d4a0d8ae5727274910636')
        .then(function(response) {
            let data = response.data.articles;
            dispatch(success(data));
        })
    }
    function success(data) {
        return{
            type: 'FETCH_NEWS',
            data,
            detailPost: 'data'
        }
    }
    
}