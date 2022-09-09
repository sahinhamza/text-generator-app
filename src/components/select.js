import { useSelector, useDispatch } from "react-redux";
import { changeFormat } from "../redux/paragraphSlice";

export function Select() {
    const format = useSelector(state => state.paragraph.format);

    const dispatch = useDispatch();
    return (
        <div className="select">
            <select className='form-select' value={format} onChange={e => dispatch(changeFormat(e.target.value))}>
                <option value='html'>Yes</option>
                <option value='text'>No</option>
            </select>
        </div>
    );
}