import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getParagraphAsync } from "../redux/paragraphSlice";

export function Output() {
  const format = useSelector(state => state.paragraph.format);
  const paras = useSelector(state => state.paragraph.paras);
  const text = useSelector(state => state.paragraph.text);
  const isLoading = useSelector(state => state.paragraph.isLoading);
  const error = useSelector(state => state.paragraph.error);

  const dispatch = useDispatch();

  useEffect(() => {
    const url = `https://baconipsum.com/api/?type=all-meat&paras=${paras}&start-with-lorem=1&format=${format}`;
    dispatch(getParagraphAsync(url));

  }, [dispatch, format, paras]);

  return (
    <>
      {
        error ?
          <p className="output jumbotron mt-4">{error}</p> :
          isLoading ?
            <p className="output jumbotron mt-4">Loading...</p> :
            <p className="output jumbotron mt-4">{text}</p>
      }

    </>
  );
}