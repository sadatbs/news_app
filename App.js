import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {getNews} from './src/components/news';
import { FlatList } from 'react-native';
import {Article} from './src/components/article';

export default function App() {
 //let news = getNews();
 const [articles, setArticles] = useState([]);
 const [refresh, setRefresh] = useState(true);

 useEffect(() => {
   fetchNews();
 }, [refresh])

 const fetchNews = async ()=>{

  const response = await getNews().then((response)=>{
    setArticles(response);
    setRefresh(false);
    console.log("sadat                 is ", articles);
  });
  
 }

const handleRefresh = () => {
  setRefresh(true);
  fetchNews();
}

  return (
    <View>
      <Text>sadat</Text>
    <FlatList
    data={articles}
    renderItem={({ item }) => <Article article={item} />}
    keyExtractor={item => item.url}
    refreshing={refresh}
    onRefresh={handleRefresh}
  />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
