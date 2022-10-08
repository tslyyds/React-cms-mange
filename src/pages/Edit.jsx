import React, { useEffect, useState } from "react";
import { PageHeader, Button, Modal } from "antd";
import Moment from "moment";
import E from "wangeditor";

let editor = null
export default function Edit() {
  const [content,setContent] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    editor = new E("#div1");
    editor.config.onchange = (newHtml) =>{
      setContent(newHtml)
    }
    editor.create();
    return ()=>{
      editor.destory()
    }
  }, []);
  return (
    <div>
      <PageHeader
        ghost={false}
        onBack={() => window.history.back()}
        title="文章编辑"
        subTitle={"当前日期：" + Moment(new Date()).format("YYYY-MM-DD")}
        extra={<Button key='1' type="primary" onClick={showModal}>提交文章</Button>}
      />
  
      <div id="div1" style={{ margin: "0 20px 20px"}}></div>
      <Modal zIndex={9999} title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p> 
        <p>Some contents...</p>
      </Modal>
    </div>
  );
}
