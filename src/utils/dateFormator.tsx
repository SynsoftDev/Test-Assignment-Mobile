 /**
 * Author: Synsoft Global
 * date: 20-07-2019
 * date formator is to format dates 
 * Retrieving data from apis
 * importing top level dependencies
 */



import Moment from 'moment';

// to get year from date string 
export const getYearFromDate = (date: string) => {
    Moment.locale('en');
    return Moment(date).format('YYYY')
}