import * as api from '../api'

export const fetchUserPosts = (id) => async(dispatch)=> {
    try {
        const {posts} = await api.fetchTimelinePosts(id);
        dispatch({type: 'FETCHTIMELINE', payload : posts})
    } catch (error) {
        console.log(error);
    }
}