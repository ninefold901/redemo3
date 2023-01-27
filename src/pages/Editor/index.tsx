import './index.scss';
interface PageEditorPropsType {
  a: string;
}
const PageEditor: React.FC<PageEditorPropsType> = (
  props: PageEditorPropsType
) => {
  const { a } = props;
  console.log(a);
  return (
    <>
      <div className='page-editor'>Editor.</div>
    </>
  );
};

export default PageEditor;
