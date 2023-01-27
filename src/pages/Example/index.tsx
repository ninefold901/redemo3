import './index.scss';
interface PageExamplePropsType {
  a: string;
}
const PageExample: React.FC<PageExamplePropsType> = (
  props: PageExamplePropsType
) => {
  const { a } = props;
  console.log(a);
  return (
    <>
      <div className='page-example'>example.</div>
    </>
  );
};

export default PageExample;
