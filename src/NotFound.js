import { Link } from "react-router-dom";
const NotFound = () => {
  return ( 
    <div className="not-found">
      <h2>对不起</h2>
      <p>页面好像逃走了</p>
      <p>点击这里:</p>
      <Link to="/">回到首页</Link>
    </div>
   );
}
 
export default NotFound;