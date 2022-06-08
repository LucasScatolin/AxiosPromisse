import axios from "axios";

const gitURLAPI = 'https://api.github.com/users/LucasScatolin'

class ApiAxios { 
    static async getDateGitHub(urlProfileApi)
    {
      try{
          const response = new filterApi((await axios.get(urlProfileApi)).data)
          console.log(response);
      }
      catch(e) { e => console.log(e)}; 

    }   
}


class filterApi{
    
    constructor({ login, id, url}){
        this.id = id,
        this.login = login,
        this.url = url
    }
}
  

ApiAxios.getDateGitHub(gitURLAPI);
