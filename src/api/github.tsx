import axios from 'axios';


export const getGithubIssues = async () => {

    try{
        const data = await axios.get('https://api.github.com/repos/vmg/redcarpet/issues?state=all');
        return data.data;
       
    } catch (error) {
        console.error(error);
    }
}



export const getGithubDetailPage = async (url:string) => {
    try{
        const data = await axios.get(url);
        return data.data;
       
    } catch (error) {
        console.error(error);
    }
}