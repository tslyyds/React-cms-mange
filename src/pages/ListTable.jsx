import React,{useState,useEffect} from "react";
import { Space, Table, Button } from "antd";
import './less/ListTable.less'
import Moment from 'moment'
import { ArticleListApi } from "../request/api";

function MyTitle(props){
  return(
    <>
    <a href={'http://codesohigh.com:8765/article/'+props.id } target='_blank' className="title_link">{props.title}</a>
    <p style={{fontSize:'10px'}}>{props.subTitle}</p>
  </>
  )
}
export default function ListTable() {
  const [arrList,setArrList] = useState('')
  const [pagination,setPagination] = useState({current:1,pageSize:3,total:0})
  let arr=[]
  const getArticleList = (current,pageSize)=>{
    ArticleListApi({
      num:current,
      current:pageSize
    }).then((res)=>{
      let {count,num,total} = res.data
      setPagination({
        current:num,
        pageSize:count,
        total
      })
      if(res.errCode===0){
        let newList = JSON.parse(JSON.stringify(res.data.arr))
        newList.map(item=>{
          let obj={
            key:item.id,
            date:Moment(item.date).format("YYYY-MM-DD hh:mm:ss"),
            mytitle:<MyTitle id={item.id} title={item.title} subTitle={item.subTitle}></MyTitle>
          }
          arr.push(obj)
        })
        setArrList(arr)
      }
    })
  }
  useEffect(()=>{
    console.log(pagination.current,pagination.pageSize)
    getArticleList(pagination.current,pagination.pageSize)
  },[])
  const columns = [
    {
      dataIndex: "mytitle",
      key: "mytitle",
      width:'70%',

    },
    {
      dataIndex: "date",
      key: "date",
      render: (text) => (
        <>
          <span>{text}</span>
        </>
      ),
    },
    {
      key: "action",
      render: (record) => (
        <>
        <Space size="middle">
          <Button type="primary" size="small" onClick={()=>console.log(record.key)}>
            编辑
          </Button>
          <Button type="danger" size="small" onClick={()=>console.log(record.key)}>
            删除
          </Button>
        </Space>
        </>
      ),
    },
  ];
  const pageChange=(arg)=>{
    getArticleList(arg.current,arg.pageSize)

  }
  return (
    <div>
      <Table showHeader={false} 
      columns={columns} 
      dataSource={arrList} 
      pagination={pagination}
      onChange={pageChange} />;
    </div>
  );
}
