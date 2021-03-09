import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import { 
  HeaderContainer, 
  LogoContainer, 
  OptionsContainer, 
  OptionDiv } from './header.styles';

const Header = () => {
  const currentUser = useSelector(selectCurrentUser);
  const hidden = useSelector(selectCartHidden);
  return (
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo className='logo' />
      </LogoContainer>
      <OptionsContainer>
        <OptionDiv as={Link} to='/shop'>
          SHOP
        </OptionDiv>
        <OptionDiv as={Link} to='/shop'>
          CONTACT
        </OptionDiv>
        {
          currentUser ? (
            <OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv>
          ) : (
              <OptionDiv as={Link} to='/signin'>SIGN IN</OptionDiv>
            )}
        <CartIcon />
      </OptionsContainer>
      {
        hidden ? null : <CartDropdown />
      }
    </HeaderContainer>
  );
}

export default Header;