import Twit from "../Twit/Twit";

export default function TwitList({ twitsList }) {
  console.log(twitsList);
  return (
    <div>
      <ul>
        {twitsList.map((twit) => (
          <div href={`dashboard/${twit.id}`} key={twit.id}>
            <Twit twit={twit} />
          </div>
        ))}
      </ul>
    </div>
  );
}

export const getServerSideProps = async () => {
  const response = await fetch(
    "https://tuiter-claudia-jordi.herokuapp.com/twits"
  );
  const twitsList = await response.json();

  console.log(twitsList);
  return {
    props: {
      twitsList,
    },
  };
};
