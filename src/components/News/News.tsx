import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import "./News.css";

const fetchNews = async () => {
  const res = await fetch(`https://hp-api.herokuapp.com/api/characters`);
  return res.json();
};

const News = () => {
  const { data, status } = useQuery("news", fetchNews);

  const [newsState, setNewsState] = useState<string>();

  useEffect(() => {
    if (status === "success") {
      console.log(data);
      const string = data.reduce(
        (acc: string, obj: any) => acc + `${obj.name}, `,
        ""
      );
      setNewsState(string);
    }
  }, [data, status]);

  return (
    <div className="marquee">
      <p>{newsState}</p>
    </div>
  );
};

export default News;
