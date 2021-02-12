import axios from "axios";
 
export default {
    createUser: async function(user) {
        return await axios.post("/api/createUser", user);
    }
}
