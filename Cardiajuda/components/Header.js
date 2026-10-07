
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import {
  Ionicons,
} from '@expo/vector-icons';

import styles from '../styles/styles';


export default function Header({ titulo }) {

  return (

    <View style={styles.header}>

      {/* BOTÃO VOLTAR */}
      <TouchableOpacity
        style={styles.backButton}
        activeOpacity={0.7}
      >

        <Ionicons
          name="chevron-back"
          size={40}
          color="#89008F"
        />

      </TouchableOpacity>


      {/* LOGO */}
      <Image
        source={require('../logo_cardiajuda.png')}
        style={styles.logo}
        resizeMode="contain"
      />


      {/* TÍTULO */}
      <Text style={styles.headerTitle}>
        {titulo}
      </Text>

    </View>

  );
}