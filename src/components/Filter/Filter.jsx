import { useDispatch, useSelector } from 'react-redux';
import { Input, TextFilter } from './Filter.styled';
import { setValueFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

export const Filter = () => {
    const dispatch = useDispatch();
    const valueFilter = useSelector(selectFilter);

    const changeFilter = ({ target }) => {
        dispatch(setValueFilter(target.value));
    };

    return (
        <label>
        <TextFilter>Find contacts by name</TextFilter>
        <Input
            type="text"
            name="filter"
            value={valueFilter}
            onChange={changeFilter} />
        </label>
    )
};