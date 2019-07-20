
 /**
 * Author: Synsoft Global
 * date: 20-07-2019
 * App config is used to add static gloabal varialbes 
 * importing top level dependencies
 */

'use strict';

export const apiCallBaseUrl = "https://hopessong-test-assignment.herokuapp.com/"

import {Dimensions} from 'react-native';
const window = Dimensions.get('window');
exports.windowHeight = window.height;
exports.windowWidth = window.width;

export const primaryColor = '#ffffff';
export const backgroundColor = '#f2f2f2';
export const transparentColor = 'transparent';
export const blackColor = '#000000';