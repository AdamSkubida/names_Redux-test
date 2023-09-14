import { useSelector } from "react-redux";
import { getNames } from "../../Redux/selectors";

const NamesList = () => {
  const names = useSelector(getNames);

  return (
    <div>
      <ul>
        {names.map((name) => {
          return <li key={name.id}>{name.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default NamesList;
