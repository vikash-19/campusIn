import React, { useEffect, useState } from 'react'
import SkDataGridTable from '../../SkSmartUtil/SkDataGridTable/SkDataGridTable';
import MultiSeclectDropdown from '../../SkSmartUtil/SkSmartDropdown/SelectDropdown' 
import SkTooltipWithLabel from '../../Util/SkTooltipWithLabel'

import './TaskViewGridTable.css'


const SmartDatagridTable = ({rows, columns, onRowUpdate }) => {
  const [showDropDown , setShowDropDown] = useState(false) ;
  const [dropDownInfo , setDropDownInfo] = useState(null) ;
  const inputRef = useRef(null) ;

  

  const columnPrototype = {
    'title' : {
      field : 'title',
      headerName : this.field,
      flex : 1.5, 
      editable : true ,
      className : '',
      sortable : true,
      headerClassName : `datagrid__table__column-task-name ${this.className}`,
      cellClassName : 'td name' ,
      renderHeader : (params) => {
        return (<>
          <CustomColumnHeaders {...{} , this.headerName, this.sortable} />
        </>)
      },
      renderCell : (params) => {
        return (<>
          <TitleColumn {...params, this.editable, onRowUpdate}/>
        </>)
      }
    },
  
    'comments' : {
      field : 'commentCount',
      headerName : '',
      width : 50,
      className : '',
      headerClassName : `comments__header ${className}`,
      align : 'center',
      sortable : false ,
      editable : false ,
      renderHeader : (params) => {
        return (<>
          <CustomColumnHeaders {...{} , headerName, this.sortable} />
        </>)
      },
      renderCell: (params) => {
          return <CommentsCount {...params, this.editable}/>
      },
    },
  
    'collaborators' : {
      field: 'collaborators',
      headerName : this.field,
      flex: 0.7,
      className : '',
      cellClassName : `datagrid__table__column-collaborators ${this.className}`,
      editable : true, 
      isOptionSearchable : false,
      sortable : false ,
      isSingleSelect : false, 
      align : center,
      onRequestOptionList : () => {return [];},
      renderHeader : (params) => {
        return (<>
          <CustomColumnHeaders {...{} , headerName, this.sortable} />
        </>)
      },
      renderCell : (params) => {
        return (<>
          <CollaboratorCell {...params, showDropDown, setShowDropDown,
            this.onRequestOptionList, this.isOptionSearchable , inputRef, setDropDownInfo,
            this.isSingleSelect, this.editable, this.isOptionSearchable}
          />
        </>)
      }
    },
  
    'date' : {
      field : 'date',
      headerName : this.field,
      flex : 1 ,
      className : '',
      cellClassName : `datagrid__table__column-date ${className}`,
      editable : true, 
      sortable : true ,
      align : center,
      renderHeader : (params) => {
        return (<>
          <CustomColumnHeaders {...{} , headerName, this.sortable} />
        </>)
      },
      renderCell: (params) => {
        console.log("row===", params?.row)
          return (<DateCell {...params, this.editable, onRowUpdate} />)
      },
    },
  
    'outcomes' : {
      field : 'outcomes',
      headerName : this.field,
      flex : 1 ,
      className : '',
      cellClassName : `${this.className}`,
      editable : false, 
      sortable : false ,
      align : center,
      renderHeader : (params) => {
        return (<>
          <CustomColumnHeaders {...{} , headerName, this.sortable} />
        </>)
      },
      renderCell : (params) => {
        return (<>
          <OutcomeCell {...params} />
        </>)
      }
    },
  
    'single_valued' : {
      field: 'account',
      headerName : this.field,
      flex: 1,
      className : '',
      cellClassName : `datagrid__table__column-account ${className}`,
      editable : true ,
      sortable : true ,
      isSingleSelect : true ,
      align : 'center',
      isOptionSearchable : true,
      onRequestOptionList : () => {return []},
      renderHeader : (params) => {
        return (<>
          <CustomColumnHeaders {...{} , headerName, this.sortable} />
        </>)
      },
      renderCell : (params) => {
        return (<>
          <SingleOrMultiValuedCell {...params, this.editable, showDropDown, 
            setShowDropDown, setDropDownInfo, this.isOptionSearchable, inputRef,
            this.onRequestOptionList, this.isSingleSelect}/>
        </>)
      }
    },
  
    'multi_valued' : {
      field: 'product',
      headerName : this.field,
      flex: 1,
      className : '',
      cellClassName : `datagrid__table__column-product ${className}`,
      editable : true ,
      sortable : true ,
      align : 'center',
      isOptionSearchable : true,
      onRequestOptionList : () => {return []},
      renderHeader : (params) => {
        return (<>
          <CustomColumnHeaders {...{} , headerName, this.sortable} />
        </>)
      },
      renderCell : (params) => {
        return (<>
          <SingleValuedCell {...params, this.editable, showDropDown, setShowDropDown, this.isOptionSearchable, inputRef, 
            this.onRequestOptionList}/>
        </>)
      }
    },
  
    'plain_text' : {
      field : '',
      flex : 1, 
      className : '',
      cellClassName : ` ${className}`,
      headerName : this.field ,
      editable : false ,
      sortable : false ,
    },
  }

  
	const onChangeKeyOptions = (e, option) =>{
    let checkedReferenceList = dropDownInfo.checkedReferenceList ;
		if (e.target) {
      let newCheckedReferenceList = [...checkedReferenceList, option?.value] ;
		}
		else{
      let newCheckedReferenceList = checkedReferenceList.filter(item => item !== option?.value) ;
		}
    setDropDownInfo({...dropDownInfo, checkedReferenceList : newCheckedReferenceList})
	}

  const hidePopup = ()=>{
    let newValue  =  dropDownInfo.referenceList.map((option) => {
      if(dropDownInfo.checkedReferenceList.includes(option.value))
        return option.info;
    })
    if(dropDownInfo.isSingleSelect){
      newValue = newValue[0] ;
    }
    let newRow =  {...dropDownInfo.row ? [dropDownInfo.field]: newValue} ;
    setShowDropDown(false) ;
    onRowUpdate(newRow) ;
  }

  const getMultiSelectDropDownConfig = ()=> {
    return {
      isLoading : false , showSearch : dropDownInfo.isOptionSearchable, 
      onSearch : () => {return ''}, className : '',
      selectOption : dropDownInfo.isSingleSelect ? 'singleSelect' : 'multiSelect' , 
      anchorElTarget : inputRef, hidePopup, 
      referenceList:dropDownInfo.referenceList , checkedReferenceList : dropDownInfo.checkedReferenceList,
      onChangeKey : onChangeKeyOptions 
    }
  }

  columns = columns.map((column) => {
    return {...columnPrototype[column.type], ...column } ;
  })
  
	return (<>
    <div className='datagrid__table__container'>
		  <SkDataGridTable  {...config} getRowId={(row) => generateRandom()} />
			{(showDropDown) && <MultiSeclectDropdown {...getMultiSelectDropDownConfig()} />  	}
		</div>
	</>)
}

function TitleColumn({row, field, value, editable, onRowUpdate, ...props}){
	const [showEditFeaild,setShowEditFeaild] = useState(false);
	const [title,setTitle] = useState(value);
	const [showEdit,setShowEdit] = useState(false);

	const onChangeTaskName = (newValue)=>{
		setTitle(newValue) ;
    let newRow  = {...row , [field] : newValue} ;
    onRowUpdate(newRow) ;
	}
	return (<>editable && <ClickAwayListener onClickAway={() => { setShowEditFeaild(false)}} >
		<div style={{width:"90%"}} onClick={()=>{setShowEditFeaild(true)}}  onMouseOver={()=>{setShowEdit(true)}} onMouseLeave={()=>{setShowEdit(false)}}>
				{showEditFeaild ?<SkSmartInputButton key={'titleName'}  value={title} isRequired={true} placeholder='Task Name' style={{ borderBottom: (props.title === '') ? '1px solid red' : '' }}
				onChange={(e) => {
					if (/^\s/.test(e.target.value)) e.target.value = '';
					onChangeTaskName(e?.target?.value);
				}} />:
				<span className={`${showEdit?"editTitleBorder ":""} editTitle`}>{title}</span>}
		</div>
		</ClickAwayListener>
    !editable && <div className='title__column__cell-nonEditable'>{value}</div>
	</>)
}

function CommentsCount({value}){
  return (<>
    {
      (value <= 0) ?
        <div className='task__view__comment__container'>
            <div className='task__view__comment__container-icon'> </div>
        </div> 
      :
        <div className='task__view__comment__count__container'>
            <div  className='task__view__comment__count__container-icon'>
                <div className='task__view__comment__count__text'>{commentsCount}</div>
            </div>
        </div>
    }
  </>)
}

function CollaboratorCell({row, field, value, editable, isSingleSelect,  isOptionSearchable, onRequestOptionList, showDropDown, setShowDropDown, setDropDownInfo, inputRef, ...props}){
  const [popUpRefNumber, setPopUpRefNumber] = useState(new Date().getTime() + (Math.random() * 100) + '');

  const showMultiSelectDropDown = (e) =>{ 
    let checkedReferenceList =  onRequestCheckedOptionList ? onRequestCheckedOptionList() : [] ;
    let referenceList = onRequestOptionList ? onRequestOptionList() : [] ;
    setDropDownInfo({row , field, value, referenceList, checkedReferenceList, isSingleSelect, isOptionSearchable}) ;
    inputRef.current = e.currentTarget ;
    setShowDropDown(true);

  }

  return (<>
    <div className='custom__column__cell__collaborators-container' onClick={(e)=> editable && showMultiSelectDropDown(e)}>
      <div className='custom__column__cell__collaborators-add' 
			onClick={() => {
				setShowDropDown(true);
				}}>+</div>
      <div className='custom__column__cell__collaborators-show'>
        <Collaborators 
          popUpRefNumber={popUpRefNumber} setPopUpRefNumber={setPopUpRefNumber} 
          collaborators={value}  
        />
      </div>
    </div>
  </>)
}


function SingleOrMultiValuedCell ({row, field, value, editable, isSingleSelect,  isOptionSearchable, onRequestOptionList, showDropDown, setShowDropDown, setDropDownInfo, inputRef, ...props}){
  const element = useRef(null) ;
  let checkedReferenceListLabel ;
  if(isSingleSelect){
    checkedReferenceListLabel = [{value : getId ? getId(value) : value ?.id, label : getLabel ? getLabel(value) : value?.name}] ;
  }
  else{
    checkedReferenceListLabel = value.map((item) => {
      return {value : getId ? getId(value) : value ?.id, label : getLabel ? getLabel(value) : value?.name} ;
    })
  }

  const showMultiSelectDropDown = (e) =>{ 
    let checkedReferenceList = onRequestCheckedOptionList ? onRequestCheckedOptionList(value) : [] ;
    let referenceList = onRequestOptionList ? onRequestOptionList() : [];
    setDropDownInfo({row , field, value, referenceList, checkedReferenceList, isSingleSelect, isOptionSearchable}) ;
    inputRef.current = e.currentTarget ;
		if(!showDropDown){
			setReferenceList && setReferenceList(referenceList) ;
		}
    setShowDropDown(true);
  }
  return(
    <div className='access_setting__cell access_tabel_content' ref={element} onClick={(e)=> editable && showMultiSelectDropdown(e)}>
      <SkTooltipWithLabel anchorElTarget={element ?.current} tooltipClass={"optionToolTip access_setting_tooltip"} list={checkedReferenceListLabel} popLength={15} placement='top'/>
    </div>
  )
}

function DateCell({row, field, value, onRowUpdate}){
  const onChangeOfDate = (date)=>{    
    if(date && date !== value){
      let newRow = {...row, [field] : date} ;
      onRowUpdate(newRow) ;
    }
  }
  const CustomInput = React.forwardRef((props, ref) => (
    <div className='custom__column__cell__date-container' ref={ref} onClick={props.onClick}>
        {props.value ? moment(props?.value).format("MMM D h:mm A"): ''}
    </div>
  ));
  return (<>
    {editable && <div>
      <DatePicker disabled={false} minDate={new Date()} className='custom__column__cell__date-picker'
        popperPlacement='bottom'
        popperModifiers={[{
            name: 'offset',
            options: {
                offset: [5, 5],
            },
        },
        {
            name: 'preventOverflow',
            options: {
                rootBoundary: 'viewport',
                tether: false,
                altAxis: true,
            },
        }]}
        customInput =  {<CustomInput value={value}/>}  
        selected={value ? new Date(value) : null}
        onChange={(date) =>
          onChangeOfDate(date)
        }
      />
      </div>}
    {!editable && <CustomInput value={value}/>}
  </>)

}

function OutcomeCell({row, field , value}){
  return (<>
    <div 
      style={{backgroundColor :outcome?.color}}
      className='custom__column__cell__outcome'>
        {value}
    </div>
  </>)
}

export default SmartDatagridTable
