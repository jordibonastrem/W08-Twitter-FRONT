import { useState, useEffect } from "react";

const FormTwit = () => {
  const initialValues = {
    text: "",
  };

  const [tuitData, setPostData] = useState(initialValues);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const changeData = (event) => {
    setPostData({
      ...tuitData,
      [event.target.id]: event.target.value,
    });
  };
  const onSubmitPost = (event) => {
    event.preventDefault();
    axios.post(process.env.REACT_APP_API_URL, tuitData);
  };

  useEffect(() => {
    setButtonDisabled(tuitData.text === "");
  }, [tuitData.text]);

  return (
    <div className="form-style">
      <form onSubmit={onSubmitPost}>
        <div className="form-group">
          <label htmlFor="text">Write twit</label>
          <textarea
            className="form-control"
            id="text"
            maxLength="200"
            rows="4"
            cols="50"
            value={tuitData.text}
            onChange={changeData}
          ></textarea>
        </div>
        <button
          disabled={buttonDisabled}
          type="submit"
          className="btn btn-primary"
        >
          Twit
        </button>
      </form>
    </div>
  );
};

export default FormTwit;
