import { useSelector, useDispatch } from 'react-redux';
import { clearFilter, removeFilter } from 'store/filter/filter-actions';
import { selectFilters } from 'store/filter/filter-selectors';

import { Badge } from 'UI/Badge';
import { Card } from 'UI/Card';
import { Stack } from 'UI/Stack';


const FilterPanel = () => {

  const filters = useSelector(selectFilters);
  const dispatch = useDispatch();

  if (!filters.length) {
    return null;
  }

  const handleRemoveFilter = (filter) => {
    dispatch(removeFilter(filter));
  }

  const handleClearFilter = () => {
    dispatch(clearFilter);
  }

  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {filters.map(filter =>
            <Badge
              onClear={() => handleRemoveFilter(filter)}
              variant="clearable"
            > {filter} </Badge>
          )}
        </Stack>

        <button
          onClick={handleClearFilter}
          className='link'
        >Clear</button>
      </div>
    </Card>
  )
}

export { FilterPanel };