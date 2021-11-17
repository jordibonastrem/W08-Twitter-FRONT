import Twit from "../Twit/Twit";
import { useEffect, useState } from "react";


const TwitList = () => {
  const [twits, setTwits] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch(
        "https://tuiter-claudia-jordi.herokuapp.com/twits"
      );
      const twitList = await res.json();
      setTwits(twitList);
    })();
  }, [setTwits]);

  console.log("en el map" + twits);

  return (
    <div>
      <ul>
        {twits.map((twit) => (
          <div href={`dashboard/${twit.id}`} key={twit.id}>
            <Twit twit={twit} />
          </div>
        ))}
      </ul>
    </div>
  );

};

export default TwitList;
