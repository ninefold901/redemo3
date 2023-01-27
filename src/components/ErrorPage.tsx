import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div id='error-page'>
      <h1>404!</h1>
      <p>i can not find the page</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
