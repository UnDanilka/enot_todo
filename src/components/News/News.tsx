import React, { useEffect, useState } from "react";
import "./News.css";

const News = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=bitcoin&apiKey=28fbe73b30544837bac170f1bdb89308"
    )
      .then((res) => res.json())
      .then((res) => {
        res.articles.length = 10;
        const news = res.articles;
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
        setData(singleStr);
      });
  }, []);

  return (
    <div className="marquee">
      <p>{data}</p>
    </div>
  );
};

export default News;
