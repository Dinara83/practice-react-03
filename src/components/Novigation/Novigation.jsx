import { NavigationLink } from './novigation.styled';

const Novigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavigationLink to={'/'}>Home</NavigationLink>
        </li>
        <li>
          <NavigationLink to={'events'}>Events</NavigationLink>
        </li>
		<li>
		<NavigationLink to={'search'}>Search</NavigationLink>
		</li>
      </ul>
    </nav>
  );
};

export default Novigation;
