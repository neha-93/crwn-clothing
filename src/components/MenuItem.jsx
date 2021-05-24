import './MenuItem.scss';

const Menuitem = (props) => (
  <div className="menu-item">
    <div className="content">
      <h1 className="title">{props.name}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default Menuitem;
