import React, {useState} from 'react';
import * as S from './styles';

type MenuItemsProps = {
  name: string;
  source: string;
};
const Menu = () => {
  const [menuItems] = useState([
    {name: 'Indicar amigos', source: 'indicator'},
    {name: 'Depositar', source: 'deposit'},
    {name: 'Transferir', source: 'transfer'},
    {name: 'Ajustar Limite', source: 'ajust'},
    {name: 'Cartão virtual', source: 'card'},
    {name: 'Pagar', source: 'payment'},
    {name: 'Bloquear cartão', source: 'block'},
  ]);

  const renderMenusItems = ({name}: MenuItemsProps) => (
    <S.NavigatorBox key={`${name}`}>
      {/* <Icon height={40} width={40} source={source} /> */}
      <S.Title>{name}</S.Title>
    </S.NavigatorBox>
  );

  return (
    <S.NavigatorContent>
      <S.ScrollNavigator horizontal showsHorizontalScrollIndicator={false}>
        {menuItems.map(renderMenusItems)}
      </S.ScrollNavigator>
    </S.NavigatorContent>
  );
};

export default Menu;
