import axios from "axios";

//Get 30 random users from the random user API
export default {
    getUsers: function () {
        return axios.get(`https://randomuser.me/api/?results=30`)
    }
};