import React,{useState} from 'react'
import TableComponent from '../table/TableComponent';
import makeData from '../table/makeData'
import SliderColumnFilter from '../table/SliderFilter';
import NumberRangeColumnFilter from '../table/NumberRangeColumnFilter';
import SelectColumnFilter from '../table/SelectColumnFilter';
import filterGreaterThan from '../table/filterGreaterThan';

function CollectorList() {
   
    const [data, setData] = useState(
       React.useMemo(() => makeData(100000), [])
    );

    const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        columns: [
          {
            Header: 'First Name',
            accessor: 'firstName',
          },
          {
            Header: 'Last Name',
            accessor: 'lastName',
            // Use our custom `fuzzyText` filter on this column
            filter: 'fuzzyText',
          },
        ],
      },
      {
        Header: 'Info',
        columns: [
          {
            Header: 'Age',
            accessor: 'age',
            Filter: SliderColumnFilter,
            filter: 'equals',
          },
          {
            Header: 'Visits',
            accessor: 'visits',
            Filter: NumberRangeColumnFilter,
            filter: 'between',
          },
          {
            Header: 'Status',
            accessor: 'status',
            Filter: SelectColumnFilter,
            filter: 'includes',
          },
          {
            Header: 'Profile Progress',
            accessor: 'progress',
            Filter: SliderColumnFilter,
            filter: filterGreaterThan,
          },
        ],
      },
    ],
    []
  );

    return (
        <div>
            <TableComponent data={data} columns={columns}  />
        </div>
    )
}

export default CollectorList
