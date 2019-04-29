export default fetchDetailNews= (details, img) => {
    return{
        type: 'FETCH_SINGLE_NEWS',
        data: {
            details,
            img
        }
    }
}