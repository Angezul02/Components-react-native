import React from 'react'
import { SectionList, Text, View } from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import ItemSeparator from '../components/ItemSeparator';
import { styles } from '../theme/AppTheme';

interface Casas {
    casa: string;
    data: string[];
}

const casas: Casas[] = [
    {
      casa: "DC Comics",
      data: ["Batman", "Superman", "Robin", "Mujer maravilla", "Flash", "Acuaman", "Linterna Verde", "Gatubela", "Lex Luthor", "Hiedra Venenosa" ]
    },
    {
      casa: "Marvel Comics",
      data: ["Antman", "Thor", "Spiderman","Ironman", "Capitan America","Loky", "Hulk", "Thanos", "Pantera Negra", "Doctor Strange", "Bruja Scarlata", "Danvers", "Nick Fury", "Barton", "Vision", "Falcon", "Gamora", "Okoye", "Groot", "Natasha Romanoff" ]
    },
    {
      casa: "Anime",
      data: ["Kenshin", "Goku", "Saitama","krilin", "Gohan", "Vegueta", "Naruto", "Ash Ketchum", "Chihiro", "Sailor Moon" ]
    }
];

const Item = ({ casa }:any) => (
    <View >
      <Text>{casa}</Text>
    </View>
  );

const SectionListScreen = () => {
  return (
    <View style={{...styles.globalMargin, flex:1}}>
        {/* // <HeaderTitle title='Section List'/> */}
        
        <SectionList
            sections={casas}
            keyExtractor={(item, index)=> item + index}
            renderItem={({item})=><Item casa={item}/>}
            ListHeaderComponent={()=><HeaderTitle title="Section List"/>}
            ListFooterComponent={()=>
                <View style={{marginBottom:100}}>                
                    <HeaderTitle title={"Total de casas: " + casas.length}/>
                </View>
            }
            stickySectionHeadersEnabled={true}
            renderSectionHeader= {({section})=>(
            <View style={{backgroundColor:"white"}}>
                <HeaderTitle title={section.casa}/>
            </View>)
            }
            renderSectionFooter={({section})=>(
                <HeaderTitle title={"Total: "+ section.data.length}/>
            )}
            SectionSeparatorComponent={()=><ItemSeparator/>}
            ItemSeparatorComponent={()=><ItemSeparator/>}

            showsVerticalScrollIndicator={false}
        />

        
    </View>
  )
}

export default SectionListScreen