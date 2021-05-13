import React, { useContext } from 'react';
import {UserContext} from '../../UserContext';
import { View, StyleSheet, SectionList, Text } from 'react-native';
import PropTypes from 'prop-types';
import NavigationShape from '../../data/shapes/Navigation';
import ButtonStyles from '../../utils/styling/Buttons';
import Navbar from '../../components/Navbar';
import Colors from '../../utils/styling/Colors';
//This is necessary for the carousel
import { Button, Image } from 'react-native-elements';
import Carousel, { Pagination, PaginationLight } from 'react-native-x-carousel';



const WalkThroughScreen = () => {
  const {value, setValue} = useContext(UserContext);
  const CustomBtn =  () => <Button buttonStyle={[ButtonStyles.actionButton]} titleStyle={ButtonStyles.actionButtonTitle}  title="Jump In" onPress={() =>setValue('chimichanga')}></Button>



  const Potato = [
    { text: 'Start by depositing as little as one satoshi. There are 100 million satoshi in 1 Bitcoin!' },
    { text: 'Save your bitcoin with Swym for a full week and have a chance to win a prize.' },
    { text: 'Need access to your Bitcoin? No problem, you can withdraw at anytime.' },
    //  { text: `${value}` }, Uncomment when testing useContext hook
    { text: 'Start winnings by saving with Swym! \n', last:true},
  ];
  
  
  
  const renderItem = Potato => (
    
      
  
    <View key={Potato.text} style={styles.item} >
      
      <Text style={{color: Colors.black,
      fontSize: 25, 
      paddingTop: 20,
      textAlign:'center', fontFamily:'Lato-Light',justifyContent:'space-around',}} >{Potato.text}
      </Text>
      

      <View style={{alignItems:'center', paddingBottom: 45,}}>
      { Potato.last && <CustomBtn />}
      </View>
       
    </View>

   
    
  );

  
   



  return (
    <View style={styles.rootHContainer}>
      <Carousel
        pagination={Pagination}
        renderItem={renderItem}
        data={Potato}
        autoplay={true}
        autoplayInterval={1920}
      />

    </View>

    
  );
};



const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
        backgroundColor: Colors.blue,
        flex: 1,
        justifyContent: 'center',
  },
  item: {
    width: 300,
    height: 400,
    fontSize:30,
    padding:34,
    justifyContent: 'center',
    marginBottom: 42,
  },

  rootHContainer: {
    alignItems: 'center',
    backgroundColor: Colors.blue,
    flex: 1,
    justifyContent: 'center',
  },

actionHButtonsContainer: {
    marginBottom: 48,
  },


logoHNameContainer: {
  marginBottom: 42,
  fontFamily:'Lato-Light',
  },




  
});





WalkThroughScreen.propTypes = {
  navigation: NavigationShape//.isRequired,
};


WalkThroughScreen.defaultProps = {};
 
export default WalkThroughScreen;


