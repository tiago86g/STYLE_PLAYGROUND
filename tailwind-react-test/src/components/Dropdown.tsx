import { Link } from 'react-router-dom';

interface DropdownProps {
  isOpen: boolean;
  toggle: any; //avoid any
}

export const Dropdown: React.FC<DropdownProps> = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? 'grid grid-rows-3 text-center items-center bg-primary'
          : 'hidden'
      }
      onClick={toggle}
    >
      <Link to="/" className="p-4">
        Home
      </Link>
      <Link to="/about" className="p-4">
        About
      </Link>
      <Link to="/menu" className="p-4">
        Menu
      </Link>
    </div>
  );
};
