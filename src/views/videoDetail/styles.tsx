 /**
 * Author: Synsoft Global
 * date: 20-07-2019
 * to create stylesheet for video detail page
 * importing top level dependencies
 */


import { StyleSheet, Dimensions } from 'react-native';
import * as config from '../../../AppConfig/index'
export const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: "center",
    flex: 1,
    margin: 10,
    backgroundColor: config.primaryColor
  },

  topImage: {
    width: "96%",
    height: 250,
    resizeMode: 'cover'
  },

  videoTitle: {
    fontSize: 22,
    fontWeight: '300',
    color: config.blackColor,
    marginTop: 20,
    width: "96%"
  },

  videoDescription: {
    fontSize: 16,
    color: config.grayColor,
    paddingTop: 15,
    width: "96%",
  },

  videoContainer: {
    width: "96%",
    height: 300,
    backgroundColor: config.blackColor,
    marginTop: 30,
    marginBottom:50
  }
});