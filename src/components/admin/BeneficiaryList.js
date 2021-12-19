import React,{useState} from 'react'
import TableComponent from '../table/TableComponent';
import makeData from '../table/makeData'

function BeneficiaryList() {
   
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
          },
        ],
      },
      {
        Header: 'Info',
        columns: [
          {
            Header: 'Age',
            accessor: 'age',
          },
          {
            Header: 'Visits',
            accessor: 'visits',
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

export default BeneficiaryList
