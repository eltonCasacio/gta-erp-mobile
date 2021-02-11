import React, {useState} from 'react';
import * as S from './styles';

type MenuItemsProps = {
  name: string;
  source: string;
};

type MenuProps = {
  navigation: any;
};

const Menu = ({navigation}: MenuProps) => {
  const [menuItems] = useState([
    {name: 'Registrar Ponto', source: 'RegisterHours'},
    {name: 'Download Holerite', source: 'PayslipDownload'},
    {name: 'Relatório', source: 'Payroll'},
    {name: 'Inf. Empresa', source: 'PersonalData'},
  ]);

  const renderMenusItems = ({name, source}: MenuItemsProps) => (
    <S.NavigatorBox onPress={() => navigation.navigate(source)} key={`${name}`}>
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
