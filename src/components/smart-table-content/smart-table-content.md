SmartTableComponent:

      const React = require('react');
      const pageSize = 3;

      const columns = [{
        baseKey: 'name',
        headerLabel: 'Name',
        useBase: true,
        sortable: true,
        type: 'string'
      },{
        key: 'species',
        baseKey: 'description',
        headerLabel: 'Species',
        useBase: false,
        sortable: false,
        type: 'string'
      },{
        key: 'color',
        baseKey: 'description',
        headerLabel: 'Color',
        useBase: false,
        sortable: false,
        type: 'fancyString',
      }]
      const rowData = [[{
        id: 1,
        name: 'Bob',
        description: {
          species: 'cat',
          color: 'blue',
        }
      },{
        id: 2,
        name: 'Alice',
        description: {
          species: 'dog',
          color: 'brown',
        }
      },{
        id: 3,
        name: 'Karen',
        description: {
          species: 'cat',
          color: 'green',
        }
      }],[{
        id: 4,
        name: 'Jerome',
        description: {
          species: 'giraffe',
          color: 'black',
        }
      },{
        id: 5,
        name: 'Steve',
        description: {
          species: 'horse',
          color: 'pink',
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


        const getTdContent = (col, row) => {
          switch(col.type) {
            case 'string':
              return <span>{col.useBase ? row[col.baseKey] : row[col.baseKey][col.key]}</span>
            case 'fancyString':
              return <span style={{color: row[col.baseKey][col.key]}}>{col.useBase ? row[col.baseKey] : row[col.baseKey][col.key]}</span>
          }
        }
      class SmartTableExample extends React.PureComponent {
        constructor(props){
          super(props)
          this.state = { page: 1, sortField: '', sortOrder: '' };
        }

        render() {
          const {page, sortField, sortOrder} = this.state
          return (
             <SmartTableContent
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
                getTdContent={getTdContent}
            />
          );
        }
      }

      <SmartTableExample />
