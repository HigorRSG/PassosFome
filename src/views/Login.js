import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';

export default function Login() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
        <View style={styles.viewfome}>
          <Text style={styles.textfome}>Passos</Text>
          <Text style={styles.textfome}>Fome</Text>
        <View style={styles.opcao}>
            <TouchableOpacity  
                style={styles.bottom}>
                <Text style={styles.bottomtext}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.bottom}>
                <Text style={styles.bottomtext}>Cadastrar</Text>
            </TouchableOpacity>
      </View>
      </View> 
      <View style={styles.login}>
          <Text style={styles.textlog}>Endereço de email</Text>
          <TextInput style={styles.input} />
          <Text style={styles.textlogtwo}>Password</Text>
          {/* secureTextEntry={true} fazer senhas */}
          <TextInput style={styles.inputtwo} secureTextEntry={true} />
          <TouchableOpacity>
                <Text style={styles.textbottom}>Esqueceu a senha?</Text>
            </TouchableOpacity>
            <TouchableOpacity  
        style={styles.viewbottomtwo}>
        <Text style={styles.textbottomtwo}>Entrar</Text>
      </TouchableOpacity>
      </View>
      </ScrollView>
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({

    container: {
      //preencher espaço disponivel
      flex: 1,
      backgroundColor: '#F2F2F2',
    },

    textfome:{
        fontSize: 50,
        color: '#FA4A0C',
        fontWeight: 'bold',
      },

      viewfome:{
        paddingTop: 50,
        backgroundColor: '#FFF',
        height: 250,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
      },

      bottom:{
        backgroundColor: '#FFF',
        width: 150,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
      },
    
      bottomtext:{
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
      },

      opcao:{
          //organiza lado a lado
          flexDirection: 'row',
          marginTop: 40,
          width: '100%',
          justifyContent: 'space-around',
      },

      login:{
          flex: 1,
          
          
      },
      textlog:{
          color: '#000000',
          marginTop: 120,
          marginLeft: 50,
      },

      input:{
          marginTop: -10,
          marginLeft: 50,
          borderBottomColor: 'black',
          borderBottomWidth: 1,
          width: 300
      },

      textlogtwo:{
        color: '#000000',
        marginTop: 50,
        marginLeft: 50,
    },

    inputtwo:{
        marginTop: -10,
        marginLeft: 50,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width: 300
    },
    
    textbottom:{
        color: '#FA4A0C',
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: 25,
        marginLeft: 50,
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
  