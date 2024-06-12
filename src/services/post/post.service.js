import axios from "axios"

const API_URL = "https://665ec60f1e9017dc16f15708.mockapi.io/api/v1/"

class PostService {

    getPosts(searchParams) {

        const params = new URLSearchParams();
        params.append('value', searchParams.value);
        params.append('roomType', searchParams.roomType);
        params.append('city', searchParams.city);
        params.append('rentType', searchParams.rentType);
        params.append('price', searchParams.price);
        params.append('area', searchParams.area);
        params.append('page', searchParams.page);
        console.log(params.toString())

        const paramsA = new URLSearchParams();
        return axios.get(API_URL + `posts?${paramsA.toString()}`).then(response => {
            return response.data;
        }).catch(error => {
            console.error('Error during getting posts:', error);
            throw error;
        });
    }
}

const post = new PostService()
export default post