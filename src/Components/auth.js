export default function createHeaders() {
    const auth = localStorage.getItem("User_Info");
    const authParse = JSON.parse(auth)
    const config = {
      headers: {
        Authorization: `Bearer ${authParse.token}`
      }
    };
    return config
}