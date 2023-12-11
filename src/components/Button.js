import { useForm } from "../contexts/FormContext";

function ButtonNext({ children, type = "", sub = "", callback }) {
  const { dispatch } = useForm();

  function handleClick(callback) {
    if (!callback) return;

    dispatch({ type: callback });
  }
  return (
    <button type={sub} onClick={() => handleClick(callback)} className={type}>
      {children}
    </button>
  );
}

export default ButtonNext;
