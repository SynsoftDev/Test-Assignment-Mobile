
 /**
 * Author: Synsoft Global
 * date: 20-07-2019
 * App navigator to configure our app navigation
 * importing top level dependencies
 */


import {createStackNavigator ,createAppContainer} from 'react-navigation';


import VideoList from './views/videoList/VideoList';
import VideoDetail from './views/videoDetail/VideoDetail';

const AppNavigator = createStackNavigator({
    VideoList: VideoList,
    VideoDetail: VideoDetail
},
{
    initialRouteName: "VideoList"
});

export default createAppContainer(AppNavigator);
