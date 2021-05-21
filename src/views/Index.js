import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.iconepf}>
          <Text style={styles.textpf}>PF</Text>
      </View>
      <View style={styles.viewfome}>
          <Text style={styles.textfome}>Passos Fome</Text>
      </View>
      <View style={styles.viewimage}>
        <Image 
        // ../ volta uma pasta
            source={require("../../assets/images/iconboy.png")} 
            style={styles.imagemfundo}/>
        <Image 
            source={require("../../assets/images/icongirl.png")} 
            style={styles.img}/>
      </View>
      <TouchableOpacity  
        style={styles.viewbottom}>
        <Text style={styles.textbottom}>Começar Agora</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    //preencher espaço disponivel
    flex: 1,
    backgroundColor: '#FA4A0C',
  },

  iconepf:{
    //cordefundo
    backgroundColor: '#FFF',
    //largura
    width: 60,
    //altura
    height: 60,
    //bordas
    borderRadius: 30,
    //ajustar margem a esquerda
    marginLeft: 40,
    //ajustar margem acima
    marginTop: 40,
    //alinhamento vertical
    alignItems: 'center',
    //alinhamento horizontal
    justifyContent: 'center',
  },

  textpf:{
    //aumentar a fonte
    fontSize: 35,
    //deixando em negrito
    fontWeight: 'bold',
    //cor do texto
    color: '#FA4A0C',
  },

  textfome:{
    fontSize: 50,
    color: '#FFF',
    fontWeight: 'bold',
  },

  viewfome:{
    //espaço da largura
    width: 200,
    //ajustar margem a esquerda
    marginLeft: 40,
    marginTop: 20,
  },

  viewimage:{
    width: 500,
    height: 420,   
  },

  imagemfundo:{
    resizeMode: 'contain',
    marginLeft: 195,
    marginTop: 110,
    width: 200,
    height: 300,
  },

  img:{
    resizeMode: 'contain',
    width: 280,
    height: 450,
    marginTop: -400,
  },

  viewbottom:{
    backgroundColor: '#FFF',
    width: 300,
    height: 60,
    marginLeft: 45,
    marginTop: -20,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textbottom:{
    color: '#FA4A0C',
    fontWeight: 'bold',
    fontSize: 20,
  },

});
