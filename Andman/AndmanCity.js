import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Icon,
  Button,
  Image,
  ScrollView,
  ImageBackground,

} from 'react-native'
import { connect } from 'react-redux';
class AndmanCity extends Component {

  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }


 render() {
   return (



<ScrollView>
     <View style={styles.container}>
     <View style={styles.container1}>
     <Image
     style={{width: 280, height: 170,marginLeft:40,marginTop:30,}}

          source={require('../images/AndmanCity/portblair.jpg')}>

          </Image>
          <TouchableOpacity
            style={styles.button1}
            onPress={()=>this.props.navigation.navigate('Patna')}
          >
            <Text>PORT BLAIR</Text>

          </TouchableOpacity>
          </View>
          <View style={styles.container2}>
          <Image
          style={{width: 280, height: 170,marginLeft:40,marginTop:20}}
               source={require('../images/AndmanCity/BARRENISLAND.jpg')}>

               </Image>
               <TouchableOpacity
                 style={styles.button2}
                 onPress={()=>this.props.navigation.navigate('#')}
               >
                 <Text>BARREN ISLAND</Text>

               </TouchableOpacity>
               </View>
<View style={styles.container1}>
               <Image
               style={{width: 280, height: 170,marginLeft:40,marginTop:20}}
                    source={require('../images/AndmanCity/NEILISLAND.jpg')}>

                    </Image>
                    <TouchableOpacity
                      style={styles.button1}
                      onPress={()=>this.props.navigation.navigate('#')}
                    >
                      <Text>NEIL ISLAND </Text>

                    </TouchableOpacity>
                    </View>
                    <View style={styles.container2}>
                    <Image
                    style={{width: 280, height: 170,marginLeft:40,marginTop:20}}
                         source={require('../images/AndmanCity/CINQUEISLAND.jpg')}>

                         </Image>
                         <TouchableOpacity
                           style={styles.button2}
                           onPress={()=>this.props.navigation.navigate('#')}
                         >
                           <Text>CINQUE ISLAND</Text>

                         </TouchableOpacity>
                         </View>
                         <View style={styles.container1}>
                         <Image
                         style={{width: 280, height: 170,marginLeft:40,marginTop:20}}
                              source={require('../images/AndmanCity/VIPERISLAND.jpg')}>

                              </Image>
                              <TouchableOpacity
                                style={styles.button1}
                                onPress={()=>this.props.navigation.navigate('#')}
                              >
                                <Text>VIPER ISLAND</Text>

                              </TouchableOpacity>
                              </View>
                              <View style={styles.container2}>
                              <Image
                              style={{width: 280, height: 170,marginLeft:40,marginTop:20}}
                                   source={require('../images/AndmanCity/HALVELOCKISLAND.jpg')}>

                                   </Image>
                                   <TouchableOpacity
                                     style={styles.button2}
                                     onPress={()=>this.props.navigation.navigate('#')}
                                   >
                                     <Text>HALVELOCK ISLAND</Text>

                                   </TouchableOpacity>
                                   </View>




       <View style={[styles.countContainer]}>
         <Text style={[styles.countText]}>
            { this.state.count !== 0 ? this.state.count: null}
          </Text>
        </View>
      </View>
      </ScrollView>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',


  },
  container1: {
    flex: 1,
    justifyContent: 'center',

backgroundColor:'#E7826D',

  },


  container2: {
    flex: 1,
    justifyContent: 'center',

backgroundColor:'#807674'
  },


  button1: {
    alignItems: 'center',
    backgroundColor: '#E7826D',
    padding: 20,
    marginTop:5,

  },
  button2: {
    alignItems: 'center',
    backgroundColor: '#807674',
    padding: 20,
    marginTop:5,

  },



  countContainer: {
    alignItems: 'center',
    padding: 10
  },
  countText: {
    color: '#FF0000'
  }
})

export default AndmanCity;
