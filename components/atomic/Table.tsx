import { Fragment, useMemo, useState } from 'react';
import {
  Column,
  Row,
  useTable,
  useSortBy,
  useAsyncDebounce,
  useGlobalFilter,
} from 'react-table';

// Define a default UI for filtering
function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}: {
  preGlobalFilteredRows: Row[];
  globalFilter: string;
  setGlobalFilter: (value: string) => void;
  className?: string;
}) {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <label className='grid grid-cols-1 gap-1 my-4'>
      <p>Search</p>
      <input
        className='input input-sm h-10 border-slate-700 focus:border-primary focus:outline-none max-w-xs rounded-sm'
        value={value || ''}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`Search ${count} items`}
      />
    </label>
  );
}

const Table = ({ className = '', tableData }: Props) => {
  const data = useMemo(() => tableData, [tableData]);

  const columns: Column[] = useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Amount',
        accessor: 'amount',
      },
      {
        Header: 'Currency',
        accessor: 'currency',
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    preGlobalFilteredRows,
    setGlobalFilter,
  } = useTable({ columns, data }, useGlobalFilter, useSortBy);

  if (!tableData.length) {
    return null;
  }

  return (
    <div className={`${className} flex flex-col`}>
      <GlobalFilter
        preGlobalFilteredRows={preGlobalFilteredRows}
        globalFilter={state.globalFilter}
        setGlobalFilter={setGlobalFilter}
      />
      <div className='border rounded-lg border-base-300 bg-base-100 text-base-content shadow-md overflow-x-auto max-w-6xl'>
        <table
          className='table table-compact lg:table-fixed lg:table-normal saturate-150 table-zebra w-full bg-transparent'
          {...getTableProps()}
        >
          <thead>
            {headerGroups.map((headerGroup, index) => (
              <Fragment key={index}>
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column, index) => (
                    <Fragment key={index}>
                      <th
                        {...column.getHeaderProps(
                          column.getSortByToggleProps()
                        )}
                        className='first:!relative bg-primary-focus text-secondary-content saturate-50 w-max lg:w-full'
                      >
                        {column.render('Header')}
                        <span className='ml-2'>
                          {column.isSorted
                            ? column.isSortedDesc
                              ? '▼'
                              : '▲'
                            : ''}
                        </span>
                      </th>
                    </Fragment>
                  ))}
                </tr>
              </Fragment>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, index) => {
              prepareRow(row);
              return (
                <Fragment key={index}>
                  <tr
                    {...row.getRowProps()}
                    role='button'
                    className='cursor-pointer hover bg-base-100'
                    onClick={() =>
                      alert('You clicked on ' + JSON.stringify(row.original))
                    }
                    key={index}
                  >
                    {row.cells.map((cell, index) => {
                      return (
                        <Fragment key={index}>
                          <td
                            className='max-w-xs text-ellipsis overflow-hidden bg-transparent'
                            {...cell.getCellProps()}
                          >
                            {cell.render('Cell')}
                          </td>
                        </Fragment>
                      );
                    })}
                    <td></td>
                  </tr>
                </Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

type Props = {
  className?: string;
  tableData: {
    amount: number;
    currency: string;
    name: string;
  }[];
};

export default Table;
