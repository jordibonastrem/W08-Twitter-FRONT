const FormTwit = () => {
  const initialValues = {
    title: "",
    body: "",
  };

  const [postData, setPostData] = useState(initialValues);
  const changeData = (event) => {
    setPostData({
      ...postData,
      [event.target.id]: event.target.value,
    });
  };
  const onSubmitPost = (event) => {
    console.log(postData);
    event.preventDefault();
    axios.post(process.env.REACT_APP_API_URL, postData);
  };

  return (
    <div className="form-style">
      <form onSubmit={onSubmitPost}>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Twit
        </button>
      </form>
    </div>
  );
};

export default FormTwit;
