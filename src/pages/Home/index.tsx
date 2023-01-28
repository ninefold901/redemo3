import { Link, Outlet } from 'react-router-dom';
import './index.scss';

const PageHome: React.FC = () => {
  return (
    <div className='page-home'>
      <>
        <div>
          <Link to={'/'}>go to home</Link>
        </div>
        <div>
          <Link to={'/draw'}>go to draw</Link>
        </div>
        <div>
          <Link to={'/editor'}>go to editor</Link>
        </div>
      </>
      <>
        <Outlet />
      </>
    </div>
  );
};

export default PageHome;
