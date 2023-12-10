import { useForm } from "../contexts/FormContext";

function ButtonNext({ children, type = "", callback }) {
  const { dispatch } = useForm();

  return (
    <button onClick={() => dispatch({ type: callback })} className={type}>
      {children}
    </button>
  );
}

export default ButtonNext;
