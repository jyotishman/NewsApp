const initialState = {
    fetchNews: false,
    data: '',
    detailNews: ''
}

const NewsReducer = (state = initialState, action) => {
    const newState = { ...state };

    switch(action.type) {
        case 'FETCH_NEWS':
            newState.fetchNews = true,
            newState.data =  action.data
            return newState;
        case 'FETCH_SINGLE_NEWS':
            newState.fetchNews = true,
            newState.detailNews = action.data.details,
            newState.detailImg = action.data.img
            return newState;

        default: 
            return newState;

    }
}
export default NewsReducer;