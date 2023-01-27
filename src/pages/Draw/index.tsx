import './index.scss';
interface PageDrawPropsType {
  a: string;
}
const PageDraw: React.FC<PageDrawPropsType> = (
  props: PageDrawPropsType
) => {
  const { a } = props;
  console.log(a);
  return (
    <>
      <div className='page-draw'>Draw.</div>
    </>
  );
};

export default PageDraw;
