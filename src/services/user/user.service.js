import axios from "axios"

const API_URL = "https://665ec60f1e9017dc16f15708.mockapi.io/api/v1/"

class UserService {
    getUser(phone, password) {
        console.log(phone + password)
        return axios.get(API_URL + `users?phone=${phone}&password=${password}`).then(response => {
            if (response.data) {
                localStorage.setItem("user", JSON.stringify(response.data))
            }
            return response.data;
        }).catch(error => {
            console.error('Error during login:', error);
            throw error;
          });
    }
}

const user = new UserService()
export default user