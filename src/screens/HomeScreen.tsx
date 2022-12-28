import React from 'react';
import {FlatList, View} from 'react-native';
// import Icon from 'react-native-vector-icons/dist/Ionicons'
import {styles} from '../theme/AppTheme';
import FlatListMenuItem from '../components/FlatListMenuItem';
import {menuItems} from '../data/menuItemsData';
import HeaderTitle from '../components/HeaderTitle';
import ItemSeparator from '../components/ItemSeparator';

const HomeScreen = () => {
  

  return (
    <View style={{...styles.globalMargin, flex: 1}}>
      <FlatList
        data={menuItems}
        renderItem={({item}) => <FlatListMenuItem menuItem={item} />}
        keyExtractor={item => item.name}
        ListHeaderComponent={() => <HeaderTitle title="Opciones de Menú" />}
        ItemSeparatorComponent={()=><ItemSeparator/>}
      />
    </View>
  );
};

export default HomeScreen;
