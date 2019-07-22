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
    color: config.blackColor,
    paddingTop: 15,
    width: "96%",
  },

  videoContainer: {
    width: "96%",
    height: 300,
    backgroundColor: config.blackColor,
    marginTop: 30,
    marginBottom:50
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  controls: {
    backgroundColor: 'transparent',
    borderRadius: 5,
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  
  },
  progress: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 3,
    overflow: 'hidden',
  },
  innerProgressCompleted: {
    height: 10,
    backgroundColor: '#cccccc',
  },
  innerProgressRemaining: {
    height: 10,
    backgroundColor: '#2C2C2C',
  },
 
  fullScreen: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  }
});