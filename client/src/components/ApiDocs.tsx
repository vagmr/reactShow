import { Collapse, Card } from 'antd';

const { Panel } = Collapse;

const ApiDoc = () => {
    return (
        <Card title="API 文档" style={{ width: '100%' }}>
            <Collapse accordion>
                <Panel header="/api/comment" key="1">
                    <p>接口描述: 获取评论</p>
                    <p>请求方式: GET</p>
                    <p>请求参数: 无</p>
                    <p>响应示例: {"{ code: 200, msg: '获取成功', data: [...comments] }"}
                    </p>
                </Panel>

                <Panel header="/api/desc" key="2">
                    <p>接口描述: 获取描述性文字</p>
                    <p>请求方式: GET</p>
                    <p>请求参数: 无</p>
                    <p>响应示例: {"{ code: 200, msg: '获取成功', data: [...desc] }"}</p>
                </Panel>

                <Panel header="/api/register" key="3">
                    <p>接口描述: 用户注册</p>
                    <p>请求方式: POST</p>
                    <p>请求参数: {"{ username: 'user', password: 'pass', email: 'user@example.com' }"}</p>
                    <p>响应示例: {"{ code: 200, msg: '注册成功' }"}</p>
                </Panel>

                <Panel header="/api/login" key="4">
                    <p>接口描述: 用户登录</p>
                    <p>请求方式: POST</p>
                    <p>请求参数: {"{ username: 'user', password: 'pass' }"}</p>
                    <p>响应示例: {"{ code: 200, msg: '登录成功', data: { ...userData } }"}</p>
                </Panel>

                <Panel header="/api/logout" key="5">
                    <p>接口描述: 用户退出登录</p>
                    <p>请求方式: GET</p>
                    <p>请求参数: 无</p>
                    <p>响应示例: {"{ code: 200, msg: '退出登录成功' }"}</p>
                </Panel>
            </Collapse>
        </Card>
    );
};

export default ApiDoc;
