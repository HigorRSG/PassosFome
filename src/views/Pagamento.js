import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, TextInput, ViewPropTypes } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

export default function Pagamento(props) {
    console.log(props)
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.viewfome}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
                <Image source={require("../../assets/images/voltar.png")} />
            </TouchableOpacity>
            <Text style={styles.textpedido}>Pedido</Text>
        </View>
        <View style={styles.viewfometwo}>
            <Text style={styles.textpagamento}>Pagamento</Text>
        </View>
        <View style={styles.viewfometwo}>
            <Text style={styles.textforma}>Forma de pagamento</Text>
        </View>
        <View style={styles.escolha}>
            <View style={styles.escolhatwo}>
                <CheckBox/>
                <Text>Cartão</Text>
            </View>
            <View style={styles.escolhatwo}>
                <CheckBox/>
                <Text>Conta do banco</Text>
            </View>
        </View>
        <View style={styles.viewfomethree}>
            <Text style={styles.textforma}>Entrega</Text>
        </View>
        <View style={styles.escolha}>
            <View style={styles.escolhatwo}>
                <CheckBox/>
                <Text>Entregar em Casa</Text>
            </View>
            <View style={styles.escolhatwo}>
                <CheckBox/>
                <Text>Retirar na loja</Text>
            </View>
        </View>
        <View style={styles.viewfometwo}>
            <Text style={styles.textforma}>Total</Text>
            <Text style={styles.textformatwo}>00,00 R$</Text>
        </View>
        <View style={styles.login}>
            <TouchableOpacity  
            style={styles.viewbottomtwo} onPress={()=>props.navigation.navigate('Index')}>
            <Text style={styles.textbottomtwo}>Finalizar Pedido</Text>
            </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({

    container: {
      //preencher espaço disponivel
      flex: 1,
      backgroundColor: '#F2F2F2',
    },

    textpedido:{
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        marginLeft: 100,
        marginTop: -5,
      },

      viewfome:{
        paddingTop: 40,
        paddingLeft: 50,
        flexDirection: 'row',
      },

      textpagamento:{
        fontSize: 40,
        color: 'black',
        fontWeight: 'bold',
        marginRight: 100,
      },

      viewfometwo:{
          marginTop: 20,
          marginLeft: 50,
          flexDirection: 'row',
      },

      textforma:{
        fontSize: 15,
        color: 'black',
        fontWeight: 'bold',
        
      },

      escolhatwo:{
        backgroundColor: '#FFF',
        alignItems: 'center',
        height: 60,
        width: 300,
        marginTop: 20,
        borderRadius: 30,
        flexDirection: 'row',
        

    },

    escolha:{
        alignItems: 'center',
    },

    viewfomethree:{
        marginTop: 20,
        marginLeft: 50,
    },

    escolhathree:{
        backgroundColor: '#FFF',
        alignItems: 'center',
        height: 150,
        width: 300,
        marginTop: 20,
        borderRadius: 30,
        

    },

    textformatwo:{
        fontSize: 15,
        color: 'black',
        fontWeight: 'bold',
        marginLeft: 200,
        fontSize: 20,
        
      },

      viewbottomtwo:{
        backgroundColor: '#FA4A0C',
        width: 300,
        height: 60,
        marginLeft: 45,
        marginTop: 50,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
      },
    
      textbottomtwo:{
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 20,
      },
  });
  