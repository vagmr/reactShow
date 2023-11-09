import { Result, Button } from 'antd';
import { useHistory } from 'react-router-dom';

const NotFound = () => {
    const history = useHistory();

    const handleBackHome = () => {
        history.push('/'); // 使用history.push将页面导航到主页面的路径
    };

    return (
        <Result
            status="404"
            title="页面未找到"
            subTitle="Sorry, the page you visited does not exist.请确认您输入的网址是否正确。"
            extra={<Button type="primary" onClick={handleBackHome}>回到首页</Button>}
        />
    );
};

export default NotFound;