import { Graph } from '@antv/x6';
import { register } from '@antv/x6-react-shape';
import { waitUntil } from '@/utils';
import './index.scss';

const NodeComponent = () => {
  return <div>111</div>;
};

register({
  shape: 'custom-react-node',
  width: 100,
  height: 100,
  component: NodeComponent,
});

const PageDraw: React.FC = () => {
  waitUntil(
    () => document.getElementById('container'),
    (ele) => {
      const graph = new Graph({
        container: ele,
        width: 800,
        height: 500,
        background: {
          color: '#F2F7FA',
        },
      });

      graph.addNode({
        shape: 'custom-react-node',
        x: 60,
        y: 100,
      });
    }
  );

  return (
    <div className='page-draw'>
      <div id='container'></div>
    </div>
  );
};

export default PageDraw;
