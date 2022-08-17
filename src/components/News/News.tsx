import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import "./News.css";

const fetchNews = async () => {
  const res = await fetch(
    "https://newsapi.org/v2/everything?q=bitcoin&apiKey=28fbe73b30544837bac170f1bdb89308"
  );
  return res.json();
};

const News = () => {
  const { data, status } = useQuery("news", fetchNews);
  console.log(data);

  const [newsState, setNewsState] = useState();

  useEffect(() => console.log(newsState), [newsState]);

  useEffect(() => {
    if (status === "success") {
      data.articles.length = 10;
      const news = data.articles;
      const parsedNews = news.map((item: any) => ({
        title: item.title,
        content: item.content,
      }));
      const strArr = parsedNews.map(
        (item: any) => `${(item.title, item.content)}`
      );
      const singleStr = strArr.reduce(
        (acc: any, item: any) => acc + item,
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
