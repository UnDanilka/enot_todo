import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import "./News.css";

const API_KEY = process.env.REACT_APP_API_KEY;

const fetchNews = async () => {
  const res = await fetch(
    `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${API_KEY}`
  );
  return res.json();
};

const News = () => {
  const { data, status } = useQuery("news", fetchNews);

  const [newsState, setNewsState] = useState<string>();

  useEffect(() => {
    if (status === "success") {
      data.articles.length = 10;
      const news = data.articles;
      const parsedNews = news.map((item: any) => ({
        title: item.title,
        content: item.content,
      }));
      const strArr = parsedNews.map(
        (item: { title: string; content: string }) =>
          `${(item.title, item.content)}`
      );
      const singleStr = strArr.reduce(
        (acc: string, item: string) => acc + item,
        [""]
      );
      setNewsState(singleStr);
    }
  }, [data, status]);

  return (
    <div className="marquee">
      <p>{newsState}</p>
    </div>
  );
};

export default News;
