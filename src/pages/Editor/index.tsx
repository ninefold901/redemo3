import * as monaco from 'monaco-editor';
import { waitUntil } from '@/utils';
import './worker';
import './index.scss';

const PageEditor: React.FC = () => {
  waitUntil(
    () => document.getElementById('editor-container'),
    (ele) => {
      monaco.editor.create(ele, {
        value: "function hello() {\n\talert('Hello world!');\n}",
        language: 'javascript',
      });
    }
  );
  return (
    <div className='page-editor'>
      <div id='editor-container' style={{ height: '100%' }}></div>
    </div>
  );
};

export default PageEditor;
