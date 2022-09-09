import { useSelector, useDispatch } from "react-redux";
import { changeParas } from "../redux/paragraphSlice";

export function Text() {
    const paras = useSelector(state => state.paragraph.paras);

    const dispatch = useDispatch();
    return (
        <div className="number">
            <input type='number' value={paras} min={1} onChange={e => dispatch(changeParas(e.target.value))} />
        </div>
    );
}