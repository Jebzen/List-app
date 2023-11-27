import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <Outlet />
    </>
  );
  /*
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
  */
}
