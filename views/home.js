import React from 'react';
import { View, Text, Button, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import Card from '../card';
import Modal from '../modal';
import globalStyles from '../styles/globalStyles';
import { MaterialIcons } from '@expo/vector-icons';

//Widok strony głównej

export default function Home({navigation}) {
  // stan Modala z formularzem
  const [modalOpen, setModalOpen] = React.useState(false);
  // tablica z recenzją
    const [reviews, setReviews] = React.useState([
        { title: 'FIFA 21', rating: 5, body: 'Nastała jesień, więc czas na kolejną odsłonę serii FIFA. Jak co roku, ekipa EA Sports prezentuje najnowszą odsłonę swojej popularnej, sportowej serii gier i znowu idealnie pasuje do niej słynne powiedzenie Kazimierza Górskiego. Bo seria FIFA, tak jak i sama piłka nożna, to w dużym stopniu ciągle ta sama gra.', key: '1' },
        { title: 'Fable - Zapomniane opowieści', rating: 4, body: 'Wokół tej gry przez cztery lata nieustannie podkręcano atmosferę. Fable z czasem uzyskała miano nadchodzącej rewolucji. Wreszcie otrzymała swoją ostateczną formę. Obyło się jednak bez tych wszystkich cudów, których mieliśmy być świadkami.', key: '2' },
        { title: 'Need For Speed Most Wanted', rating: 3, body: 'Need for Speed: Most Wanted już od wielu miesięcy wzbudzał kontrowersje wśród fanów serii. Obawiano się o to, w jaki sposób panowie z Criterion Games obejdą się ze "świętością", za którą w niektórych kręgach uznawany jest pierwszy Most Wanted. Dziś możemy stwierdzić, że byli oni wyjątkowo bezwzględni.', key: '3' },
      ]);

      //funkcja do dodawania recenzji
      const addReview = (review) => {
        review.key = Math.random().toString(); 
        setReviews((currentReviews) => {
          return [review, ...currentReviews];
        });
        setModalOpen(false);
      };

 
    return (
    <View style={globalStyles.container}>
    <MaterialIcons 
          name='add' 
          size={30} 
          style={styles.add}
          onPress={() => setModalOpen(true)} 
      />
        <FlatList data={reviews} renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('Review', item)}>
            <Card>
                <Text style={globalStyles.cardTitle}>{ item.title }</Text>
            </Card>
            </TouchableOpacity>
        )} />
        
        {/* Modal do wyswietlania widoku formularza */}
        <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} addReview={addReview}/>
    </View>
  );
}

//Style

const styles = StyleSheet.create({
  add: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#000',
    padding: 11,
    borderRadius: 10,
    alignSelf: 'center',
  }
})
