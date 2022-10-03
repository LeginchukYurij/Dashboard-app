import { JobPosition } from './JobPosition';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllVisiblePositions } from 'store/positions/position-selectors';
import { addFilter } from 'store/filter/filter-actions';
import { selectFilters } from 'store/filter/filter-selectors';


const JobList = () => {
  const currentFilters = useSelector(selectFilters);
  const positions = useSelector((state) => selectAllVisiblePositions(state, currentFilters));
  const dispatch = useDispatch();

  const handleAddFilter = (filter) => {
    if (currentFilters.includes(filter)) return;

    dispatch(addFilter(filter))
  };

  return (
    <div className='job-list'>
      {positions.map(item => (
        <JobPosition
          key={item.id}
          handleAddFilter={handleAddFilter}
          {...item}
        />
      ))}
    </div>
  )
}

export { JobList };