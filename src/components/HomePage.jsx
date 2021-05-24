import './HomePage.scss';
import Menuitem from './MenuItem';

const HomePage = () => (
    <div class='homepage'>
        <div className='directory-menu'>
            <Menuitem name='HATS'/>
            <Menuitem name='JACKETS'/>
            <Menuitem name='SNEAKERS'/>
            <Menuitem name='WOMEN'/>
            <Menuitem name='MEN'/>
            
        </div>
    </div>
);

export default HomePage;