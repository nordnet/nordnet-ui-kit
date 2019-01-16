TableContentWrapper:

      const React = require('react');
      const pageSize = 3;

      const columns = [{
        key: 'name',
        baseKey: 'name',
        headerLabel: 'Name',
        useBase: true,
        sortable: true,
        type: 'string',
        firstMobileRow: true,
        responsiveProps: {
          flexOrder: 1,
          flexBasisMobile: 100,
        },
      },{
        key: 'species',
        baseKey: 'description',
        headerLabel: 'Species',
        useBase: false,
        sortable: false,
        type: 'string',
        responsiveProps: {
          flexOrder: 3,
          flexBasisMobile: 50,
        },
      },{
        key: 'color',
        baseKey: 'description',
        useBase: false,
        sortable: false,
        type: 'fancyString',
        responsiveProps: {
          flexOrder: 2,
          flexBasisMobile: 50,
        }
      },{
        key: 'height',
        baseKey: 'description',
        headerLabel: 'Height Column',
        useBase: false,
        sortable: false,
        type: 'string',
        width: '50px',
        thProps: {
          ellipsis: false,
        },
        responsiveProps: {
          flexOrder: 5,
          flexBasisMobile: 50,
        },
      },{
        key: 'bottomRowPadding',
        padding: true,
        responsiveProps: {
          hiddenOnDesktop: true,
          flexOrder: 4,
          flexBasisMobile: 50,
          key: 'tradeButtonPadding',
        },
      },
      ]

      const rowData = [[{
        id: 1,
        name: 'Bob',
        description: {
          species: 'cat',
          color: 'blue',
          height: 20
        }
      },{
        id: 2,
        name: 'Alice',
        description: {
          species: 'dog',
          color: 'brown',
          height: 25
        }
      },{
        id: 3,
        name: 'Karen',
        description: {
          species: 'cat',
          color: 'green',
          height: 10
        }
      }],[{
        id: 4,
        name: 'Jerome',
        description: {
          species: 'giraffe',
          color: 'black',
          height: 22
        }
      },{
        id: 5,
        name: 'Steve',
        description: {
          species: 'horse',
          color: 'pink',
          height: 13
        }
      }]]
      const nrResults = 5;

      const localization = {
          noData: "No data for you!",
          prevButton: "Previous",
          nextButton: "Next",
          caption: "Smart table",
          expand: "Expand",
          sorting: {
            asc: "ascending",
            desc: "descending",
            ariaLabel: ({ field, dir }) =>
            `sorting on ${field} in ${dir} order`
          }
         };


        const renderTd = ({col, rowData}) => {
          switch(col.type) {
            case 'fancyString':
              return <span style={{color: rowData[col.baseKey][col.key]}}>{col.useBase ? rowData[col.baseKey] : rowData[col.baseKey][col.key]}</span>
            case 'string':
            defualt:
              return <span>{col.useBase ? rowData[col.baseKey] : rowData[col.baseKey][col.key]}</span>
          }
        }
      class TableContentWrapperExample extends React.PureComponent {
        constructor(props){
          super(props)
          this.state = { page: 1, sortField: '', sortOrder: '' };
        }

        render() {
          const {page, sortField, sortOrder} = this.state
          return (
             <TableContentWrapper
                columns={columns}
                pageSize={pageSize}
                nrResults={nrResults}
                rowData={rowData[page - 1]}
                page={page}
                sortField={sortField}
                sortOrder={sortOrder}
                pageChangeHandler={(page) => this.setState({page:page})}
                sortHandler={({ key, nextSortDir }) => this.setState({sortField: key, sortOrder: nextSortDir})}
                loading={false}
                // paginationNode={Link}
                localization={localization}
                // urlGenerator={this.generateUrl}
                rowKeyPath="id"
                renderTd={renderTd}
                borderlessRows={[2]}
            />
          );
        }
      }

      <TableContentWrapperExample />
