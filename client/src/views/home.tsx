import { Layout, Menu } from 'antd';
import {
    UserOutlined,
    SettingOutlined,
} from '@ant-design/icons';
import ApiDoc from '../components/ApiDocs';
import CommentList from '../components/comList';
import { Switch, Route, Link } from 'react-router-dom'
import '../style/home.scss'


const { Header, Sider, Content } = Layout;

const HomeCom = () => {

    return (
        <Layout style={{ minHeight: '100vh' }}>
            {/* 左侧菜单栏 */}
            <Sider width="25%">

                <Menu theme="dark" style={{ position: "fixed" }} mode="vertical" defaultSelectedKeys={['1']}>
                    <Menu.Item key="0" className='info' >
                        <div id='v1'>
                            <img src="https://iili.io/J9BjFkb.jpg" />
                            <h4 className='name'>用户名：vagmr</h4>
                            <h4></h4>
                        </div>
                    </Menu.Item>
                    <Menu.Item key="1" icon={<UserOutlined />}>
                        <Link to="/home">评论列表</Link>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<SettingOutlined />}>
                        <Link to="/home/apiDoc">Api文档</Link>
                    </Menu.Item>
                </Menu>
            </Sider>

            {/* 右侧内容区域 */}
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }} />

                <Content style={{ margin: '16px' }}>
                    {/* 嵌套路由使用,switch可以省略 */}
                    <Switch >
                        <Route path="/home" exact component={CommentList} />
                        <Route path="/home/apiDoc" component={ApiDoc} />
                    </Switch>
                </Content>
            </Layout>
        </Layout>
    );
};

export default HomeCom;
