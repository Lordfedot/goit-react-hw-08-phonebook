import { useDispatch } from 'react-redux';
import { Input,Label } from './Filter.styled';

import { value } from 'redux/slices/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = e => {
    const input = e.target.value;
    dispatch(value(input));
  };
  return (
    <Label>
      Find contacts by name
      <Input onChange={filterValue} type="text" name="filter" />
    </Label>
  );
};

export default Filter;
