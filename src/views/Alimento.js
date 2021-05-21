import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, TextInput, CheckBox } from 'react-native';
import Carousel from 'react-native-snap-carousel' ;

export default function Alimento() {
    //função
    const data=[{
        imagem: 'require(../../assets/images/alimentoone.png)',
        nome: "Tomate Fresco",
        preco: "13,50",
    },
    {
        imagem: 'require(../../assets/images/alimentotwo.png)',
        nome: "Molho de Frango Picante",
        preco: "16,50",
    },
    {
        imagem: 'require(../../assets/images/alimentoone.png)',
        nome: "Carne",
        preco: "18,50",
    },
]
    //função
    const renderItem=({item, index})=>{
        console.log(item.imagem)
        return(
            <View style={styles.carouseltwo}>
            <View style={styles.carousel}>
                <Image source={require("../../assets/images/alimentoone.png")} ></Image>
                <TouchableOpacity>
                    <Text style={styles.alimento}>{item.nome}</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.preço}>{item.preco} R$</Text>
                </TouchableOpacity>
            </View>
            </View>
        )
    }
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.viewimage}>
        <Image 
        // ../ volta uma pasta
            source={require("../../assets/images/traços.png")} 
            style={styles.imgtraço}/>
        <Image 
            source={require("../../assets/images/carrinho.png")} 
            style={styles.imgcarrin}/>
      </View>
        <View>
          <Text style={styles.texttitle}>Delicias</Text>
          <Text style={styles.texttitle}>para você</Text>
        </View>
        <View style={styles.viewinput}>
        <TextInput style={styles.input} placeholder="Procurar" />
        </View>
        <View style={styles.opcao}>
            <TouchableOpacity  
                style={styles.bottom}>
                <Text style={styles.bottomtext}>Comidas</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.bottom}>
                <Text>Bebidas</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.bottom}>
                <Text>Petiscos</Text>
            </TouchableOpacity>
      </View>
      <Carousel 
        layout='default' 
        renderItem={renderItem} 
        sliderWidth={400}
        data={data} 
        itemWidth={200} />

      <View style={styles.opcaotwo}>
          <Image source={require("../../assets/images/casinha.png")}></Image>
          <Image source={require("../../assets/images/heart.png")}></Image>
          <Image source={require("../../assets/images/historico.png")}></Image>
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
    viewimage: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 60,
        marginTop: 50,
    },
    
    imgtraço:{
        marginRight: 150,
    },

    texttitle:{
        color: 'black',
        fontSize: 35,
        fontWeight: 'bold',
        marginLeft: 40,
    },

    viewinput:{
        backgroundColor: '#FFF',
        borderRadius: 30,
        marginTop:30,
        marginLeft: 40,
        marginRight:40,
    },

    opcao:{
        //organiza lado a lado
        flexDirection: 'row',
        marginTop: 40,
        width: '100%',
        justifyContent: 'space-around',
        
    },

    bottomtext:{
        color: '#FA4A0C',
        
      },

    carousel:{
        backgroundColor: '#FFF',
        alignItems: 'center',
        height: 200,
        width: 200,
        marginTop: 70,
        borderRadius: 30,
        

    },

    carouseltwo:{
        alignItems: 'center',
    },

    alimento:{
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        
      },
    
    preço:{
        fontWeight: 'bold',
        color: '#FA4A0C'
    },

    opcaotwo:{
        //organiza lado a lado
        flexDirection: 'row',
        marginBottom: 40,
        width: 400,
        justifyContent: 'space-around',
        
    },

  });
  