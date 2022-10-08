import { List, Skeleton,  Pagination, Button  } from "antd";
import React, { useState, useEffect } from "react";
import { ArticleListApi } from "../request/api";
import Moment from 'moment'


export default function ListList() {
  const [list, setList] = useState([]);
  const [count, seCount] = useState();//一页条数
  const [num, setNum] = useState();//第几页
  const [total, setTotal] = useState();

  useEffect(() => {
    ArticleListApi({
      num:num,
      count:count
    }).then((res) => {
      if (res.errCode === 0) {
        console.log(res.data)
        const { arr, count, num, total } = res.data;
        setList(arr);
        seCount(count);
        console.log(count)
        setNum(num);
        setTotal(total)
      }
    });
  });
  const onChange=(pages)=>{
    console.log(pages)
  }
  return (
    <div className="title_link" style={{padding:'20px'}}>
      <List
        className="demo-loadmore-list"
        itemLayout="horizontal"
        dataSource={list}
        renderItem={(item) => {
          return (
            <List.Item
              actions={[<Button type="primary" size="small">编辑</Button>,<Button type="danger" >删除</Button>]}
            >
              <Skeleton title={false} loading={false} active>
                <List.Item.Meta
                  title={<a href="!">{item.title}</a>}
                  description={item.subTitle}
                />
                <div>{Moment(item.date).format("YYYY-MM-DD hh:mm:ss")}</div>
              </Skeleton>
            </List.Item>
          );
        }}
      />
      <Pagination style={{float:'right',margin:'20px 0px'}} current={num} onChange={onChange} tota={total}/>
    </div>
  );
}
