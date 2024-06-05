import axios from "axios"

const API_URL = "https://665ec60f1e9017dc16f15708.mockapi.io/api/v1/"

class AuthService {
    login(phone, password) {
        console.log(phone + password)
        return axios.get(API_URL + `users?phone=${phone}&password=${password}`).then(response => {
            if (response.data) {
                localStorage.setItem("user", JSON.stringify(response.data))
            }
            return response.data;
        })
    }

    logout() {
        localStorage.removeItem("user")
    }

    register(userName, phoneNumber, password) {
        return axios.post(API_URL + "users", {
            "user_name": userName,
            "phone": phoneNumber,
            "password": password
        })
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem("user"))
    }
}

const auth = new AuthService()
export default auth