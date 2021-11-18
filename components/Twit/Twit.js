import ReactTimeAgo from "react-time-ago";
import TimeAgo from "javascript-time-ago";
import es from "javascript-time-ago/locale/es.json";
import PropTypes, { number } from "prop-types";

TimeAgo.addLocale(es);


const Twit = ({ twit }) => {

export default function Twit({ twit }) {
  const onDelete = async (event) => {
    await fetch(
      // eslint-disable-next-line no-underscore-dangle
      `https://tuiter-claudia-jordi.herokuapp.com/twits/${twit.id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    event.preventDefault();
  };


  return (
    <div className="card text-center mb-3">
      <div className="card-body">
        <p className="card-text">{twit.text}</p>
        <button type="button" className="btn btn-primary btn-sm">
          Like
        </button>

        <button
          onClick={onDelete}
          type="button"
          className="btn btn-secondary btn-lg"
        >
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
};

export const getServerSideProps = async () => {
  const response = await fetch(
    "https://tuiter-claudia-jordi.herokuapp.com/twits"
  );
  const postsList = await response.json();
  console.log(postsList);
  return {
    props: {
      Posts: postsList,
    },
  };
};

Twit.propTypes = {
  twit: PropTypes.shape({
    text: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    date: PropTypes.number.isRequired,
  }),
};

export default Twit;
