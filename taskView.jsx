
const TestTaskView  = ({activeTab})=>{


	const testRows = [
		{id : '1' , title : 'Abc' , commentsCount : 0  , account : {id : '1' , name : 'Account 1'} , 
			product : [{id : '1', name : 'Product 1'}, {id : '2', name : 'Product 2'}] , date : '01/01/2023',  outcome: {name : 'Adoption', color :'#FF7E72'}, collaborators : [{id : 1, name : 'Hii'}]}
	]


	const [rows , setRows] = useState(testRows) ;

	const productList = [
		{id : '1' , value : '1' , label : 'Product-A' , info:{id : '1' , name : 'Product-A'}},
		{id : '2' , value : '2' , label : 'Product-B' , info:{id : '2' , name : 'Product-B'}},
		{id : '3' , value : '3' , label : 'Product-C' , info:{id : '3' , name : 'Product-C'}},
		{id : '4' , value : '4' , label : 'Product-D' , info:{id : '4' , name : 'Product-D'}},
	]

	const accountList = [
		{id : '1' , value : '1' , label : 'Account-A' , info:{id : '1' , name : 'Account-A'}},
		{id : '2' , value : '2' , label : 'Account-B' , info:{id : '2' , name : 'Account-B'}},
		{id : '3' , value : '3' , label : 'Account-C' , info:{id : '3' , name : 'Account-C'}},
		{id : '4' , value : '4' , label : 'Account-D' , info:{id : '4' , name : 'Account-D'}},
	]

	const columns = [
		{type : 'title', field : 'title', headerName : 'Title'},
		{type : 'comments', field : 'commentsCount'},
		{type  : 'collaborators', field : 'collaborators', headerName : 'Collaborator'},
		{type : 'single_valued', field : 'account', headerName : 'Account', onRequestOptionList : () => {return accountList}},
		{type : 'multi_valued', field : 'product', headerName : 'Product', onRequestOptionList : ()=> {return productList; }},
		{type : 'date', field : 'date', headerName : 'Date'},
		{type : 'outcome' , field : 'outcome', headerName : 'Outcome'},
	]

	const onRowUpdate = (updatedRow)=> {
		let newRows = cloneDeep(rows) ;
		let index = newRows.findIndex( obj => obj.id === updatedRow.id) ;
		newRows.splice(index , 1 , updatedRow) ;
		console.log('hiii... updated row', newRows) ;
		setRows(newRows) ; 
	}

	return (<>
		<div className='task__view__table-container'>
			<div className='task__view__table'>
				<div  className='expandable__list__container'>
					<div className='expandable__list__title__container'>
						<ExpandableListTitle title='Due Today' onChange={() => {console.log('Hi')}} isOpen={true} />
					</div>
					<div>
						<SmartDatagridTable  columns={columns} rows={rows} onRowUpdate={onRowUpdate} />
					</div>
				</div>
			</div>
		</div>
	</>)
}


export default  TestTaskView ;
