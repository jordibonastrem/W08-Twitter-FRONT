import ReactTimeAgo from "react-time-ago";
import TimeAgo from "javascript-time-ago";
import es from "javascript-time-ago/locale/es.json";

TimeAgo.addLocale(es);

export default function Twit({ twit }) {
  return (
    <div className="card text-center">
      <div className="card-body">
        <p className="card-text">{twit.text}</p>
        <button type="button" className="btn btn-primary btn-lg">
          Like
        </button>
        <button type="button" className="btn btn-secondary btn-lg">
          Delete
        </button>
      </div>
      <div className="card-footer text-muted d-flex justify-content-between">
        <div>{twit.likes} likes</div>
        <ReactTimeAgo date={Date.parse(twit.date)} locale="es" />
        {/* <div>{twit.date}</div> */}
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const response = await fetch(
    "https://isdi-blog-posts-api.herokuapp.com/posts"
  );
  const postsList = await response.json();

  return {
    props: {
      Posts: postsList,
    },
  };
};
