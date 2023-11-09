import { Card, Avatar } from 'antd';
import {
    PictureOutlined,
    UserOutlined
} from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { getUserInfoApi } from '../api/getMethod';

const CommentList = () => {
    const [infoList, setInfoList] = useState([]);
    /* 异步请求方法 */
    const getInfoData = async () => {
        try {
            const res = await getUserInfoApi();
            setInfoList(res.data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    useEffect(() => {
        getInfoData();
    }, []);
    return (
        <>
            {/* 评论列表 */}
            <Card title="评论列表" style={{ width: '100%' }}>
                {/* 评论项 */}

                {infoList.map(el => {
                    return (
                        <Card.Grid style={{ width: '100%', textAlign: 'center' }} key={el.id}>
                            <Avatar src={el.avater} size={64} icon={<UserOutlined />} />
                            <p>{el.name}</p>
                            <p>{el.comment}</p>
                            <p>
                                {el.cover ?
                                    (<img style={{ height: "auto", width: "100%" }} src={el.cover} />) :
                                    (<PictureOutlined />)
                                }
                            </p>
                        </Card.Grid>
                    )
                })}
                {/* 可以根据需要添加更多评论项 */}
            </Card>
        </>
    );
}
export default CommentList;