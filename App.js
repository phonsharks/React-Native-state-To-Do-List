import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { Component } from "react";
import style from "./style";
import { second } from 'react-native'
export default class App extends Component {

  //burada this.state durumuyla erişebileceğimiz duruma yönelik ilerledim
  constructor() {
    /* super() fonksiyonu burada erişilebilirliği sağlamakta*/
    super();
    this.state = {
      text: "",
      data: [],
    };
  }


  //ara dilimlere fonksiyon desteği ile işlem yapabilirim.Durum bazlı değişim olabilir.
  handleSave = () => {
    const {text,data}=this.state;
    data.push(text)
    this.setState({data,text:""})
  };



  //render edilecek olan tüm durum burada olmaktadır.
  render() {
    const { text ,data} = this.state;
    return (
      <View style={{ flex: 1, paddingTop: 100 }}>
        <View>
          <Text style={style.title}>To-Do-App</Text>
          <View style={style.secondview}>
            <TextInput
              style={style.ınput}
              onChangeText={(text) => this.setState({ text })}
              value={text}
            />
            <TouchableOpacity style={style.btn} onPress={this.handleSave}>
              <Text style={style.secondtxt}>Ekle</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          {data.map((item)=>{
            return (<Text key={item}>{item}</Text>)
          })}
        </View>
      </View>
    );
  }
}
