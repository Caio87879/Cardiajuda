import React, { useState } from 'react';
import {
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';

import Header from './components/Header';
import ProfileCard from './components/ProfileCard';
import DetailsCard from './components/DetailsCard';
import BottomNavigation from './components/BottomNavigation';

import {
  paciente,
  medico,
} from './data/dados';

import styles from './styles/styles';


export default function App() {

  const [tela, setTela] = useState('paciente');

  const dados =
    tela === 'paciente'
      ? paciente
      : medico;


  return (
    <SafeAreaView style={styles.safeArea}>

      <StatusBar
        barStyle="dark-content"
        backgroundColor="#FFFFFF"
      />

      <View style={styles.app}>

        {/* CONTEÚDO PRINCIPAL */}
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >

          {/* CABEÇALHO */}
          <Header
            titulo={dados.titulo}
          />

          {/* CARD DO PACIENTE / MÉDICO */}
          <ProfileCard
            dados={dados}
          />

          {/* INFORMAÇÕES */}
          <DetailsCard
            dados={dados}
          />

        </ScrollView>


        {/* MENU INFERIOR */}
        <BottomNavigation
          tela={tela}
          setTela={setTela}
        />

      </View>

    </SafeAreaView>
  );
}