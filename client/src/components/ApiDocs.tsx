import { Collapse, Card } from 'antd';

const { Panel } = Collapse;

const ApiDoc = () => {
    return (
        <Card title="API 文档" style={{ width: '100%' }}>
            <Collapse accordion>
                <Panel header="/api/endpoint1" key="1">
                    <p>接口描述: 这是第一个接口的描述。</p>
                    <p>请求方式: GET</p>
                    <p>请求参数: 无</p>
                    <p>响应示例: {"{ data: 'result' }"}</p>
                </Panel>

                <Panel header="/api/endpoint2" key="2">
                    <p>接口描述: 这是第二个接口的描述。</p>
                    <p>请求方式: POST</p>
                    <p>请求参数: {"{ param1: 'value1', param2: 'value2' }"}</p>
                    <p>响应示例: {"{ data: 'result' }"}</p>
                </Panel>

                {/* 可以根据需要添加更多接口信息 */}
            </Collapse>
        </Card>
    );
};

export default ApiDoc;
