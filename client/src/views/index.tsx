/* eslint-disable @typescript-eslint/no-explicit-any */
import '../style/index.scss'
import { useHistory } from "react-router-dom";
import { getDescApi } from '../api/getMethod'
import { useEffect, useState } from 'react';
const Index = () => {
    const history = useHistory();
    const [itemList, setItemList] = useState([])
    //提示的显示
    const [isShow, setIsShow] = useState(false);
    const handelShow = () => {
        setIsShow(true);
        setTimeout(() => {
            setIsShow(false);
        }, 1000)
    }
    const getDescData = async () => {
        const res = await getDescApi()
        setItemList(res.data.data)
    }
    useEffect(() => {
        getDescData()
    }, [])
    return (
        <div className='page'>
            <div className='content'>
                <h1>项目起始页</h1>
                <p>本项目由vagmr开发,前端使用react,后端使用nodejs构建</p>
                <p>copyright@2023</p>
                <button
                    style={{ padding: '10px 20px', background: '#007bff', color: '#fff', border: 'none', borderRadius: '4px' }}
                    onClick={() => history.push('/login')}
                >
                    Get Started
                </button>
                {isShow ? (<i className='info pos'>还在开发中....</i>) : (<i className='pos author'>Powered by vagmr</i>)}
            </div>
            <div className='itemList'>
                {itemList.map((el: any) => {
                    return (<div className='item' key={el.id} onClick={() => handelShow()}>
                        <h1><span>{el.pic}</span> {el.profile}</h1>
                        <p>{el.content}</p>
                    </div>)
                })}
            </div>
            <footer className=''></footer>
        </div>
    );
};

export default Index;

