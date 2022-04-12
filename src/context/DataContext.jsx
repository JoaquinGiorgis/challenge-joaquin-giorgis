import Axios from "axios";
import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export default function DataProvider({ children }) {

    const [news, setNews] = useState([]);
    const [article, setArticle] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await Axios({
                    url: "https://firebasestorage.googleapis.com/v0/b/interview-498d3.appspot.com/o/news.json?alt=media&token=63f227b0-7774-4016-b7fe-42507315ac9e",
                });
                setNews(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);


    return (
        <DataContext.Provider value={{ news, setNews, article, setArticle}}>
            {children}
        </DataContext.Provider>
    );
}


