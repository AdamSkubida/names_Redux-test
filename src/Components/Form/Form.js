import { useDispatch } from "react-redux";
import { addName } from "../../Redux/actions";

const Form = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    dispatch(addName(form.elements.name.value));
    form.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name"></input>
        <button type="submit">send</button>
      </form>
    </div>
  );
};

export default Form;
