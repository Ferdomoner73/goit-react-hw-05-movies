import { Outlet } from 'react-router-dom';
import { LinkItem, LinkList, Link } from './layout.styled';

export const Layout = () => {
  return (
    <>
      <header>
        <LinkList>
          <LinkItem>
            <Link to="/">Home</Link>
          </LinkItem>
          <LinkItem>
            <Link to="/movies">Movies</Link>
          </LinkItem>
        </LinkList>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
