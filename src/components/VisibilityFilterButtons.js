import styled from '@emotion/styled/macro';
import { useSelector, useDispatch } from 'react-redux';

import { getVisibilityFilter } from '../redux/selectors';
import { VisibilityFilters, setVisibilityFilter } from '../redux/actions';

const VisibilityFiltersContainer = styled.div`
  margin: 10px 0;
`;

function VisibilityFilterButtons() {
  const activeFilter = useSelector(getVisibilityFilter);
  const dispatch = useDispatch();
  return (
    <VisibilityFiltersContainer>
      <button
        onClick={() => dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ALL))}
        disabled={activeFilter === VisibilityFilters.SHOW_ALL}
      >
        Show all
      </button>
      <button
        onClick={() => dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))}
        disabled={activeFilter === VisibilityFilters.SHOW_COMPLETED}
      >
        Show completed
      </button>
      <button
        onClick={() => dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ACTIVE))}
        disabled={activeFilter === VisibilityFilters.SHOW_ACTIVE}
      >
        Show active
      </button>
    </VisibilityFiltersContainer>
  );
}

export default VisibilityFilterButtons;
