 /**
 * Author: Synsoft Global
 * date: 20-07-2019
 * to create styles for listing 
 * importing top level dependencies
 */

import {
  StyleSheet,Dimensions
} from 'react-native';

import * as config from '../../../AppConfig/index'

export const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems:"center",
    flex: 1,
    backgroundColor:config.backgroundColor
  },
  dropDownContainer: {
    width:"95%",
    height:50,
    justifyContent: 'center'
  },
  flatList: {
    width:"95%",
    backgroundColor: config.backgroundColor,
    marginTop:10
  },
  cardView: {
    width: "48%", 
    margin: 5,
    backgroundColor:config.primaryColor,
    padding:5,
    borderRadius:6,
  },

  videoTitle:{
    fontSize: 19,
    fontWeight: 'bold',
    color:config.blackColor,
    marginTop: 5
  },

  videoDescription:{
    fontSize: 16,
    color:config.blackColor,
    paddingTop:5,
    marginBottom:5
  },
  
  imageThumbnail: {
    height: 120, 
    borderRadius: 5
  },
});