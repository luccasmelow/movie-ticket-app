import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      margin: 0,
      paddingTop: 49,
    },
    
    content:{
      padding: 16,
    },
   
    image: {
      width: '100%',
      height: 220,
      resizeMode:'stretch',
    },

    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#333',
      marginTop: 10,
    },
    details: {
      fontSize: 14,
      color: '#666',
      marginTop: 8,
    },
    barcode: {
      width: '100%',
      height: 100,
      resizeMode: 'contain',
    },

    infoContainer: {
      marginBottom: 24,
      paddingHorizontal: 16,
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
 

    dashedLineContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 32,
     
    },
  
    dashedLine: {
      flex: 1,
      marginHorizontal: 30,
      borderBottomWidth: 1,
      borderBottomColor: '#7D7D7D',
      borderStyle: 'dashed',
     
    },
  
    circle: {
      width: 28,
      height: 28,
      borderRadius: 24,
      backgroundColor: '#131016',
     
      margin: -16,
    },
    code: {
      width: '100%',
      height: 60,
      resizeMode:'cover',
    },

    
});
