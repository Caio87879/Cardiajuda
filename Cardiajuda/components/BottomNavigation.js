import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import {
  Ionicons,
} from '@expo/vector-icons';

import styles from '../styles/styles';


export default function BottomNavigation({
  tela,
  setTela,
}) {

  return (

    <View style={styles.bottomNavigation}>


      {/* INÍCIO */}
      <BottomItem
        icon="home-outline"
        label="Início"
      />


      {/* CONSULTA */}
      <BottomItem
        icon="calendar-outline"
        label="Consulta"
      />


      {/* SAÚDE */}
      <BottomItem
        icon="heart-outline"
        label="Saúde"
        active={tela === 'paciente'}
        onPress={() =>
          setTela('paciente')
        }
      />


      {/* MÉDICO */}
      <BottomItem
        icon="search-outline"
        label="Médico"
        active={tela === 'medico'}
        onPress={() =>
          setTela('medico')
        }
      />

    </View>
  );
}


// =====================================================
// ITEM
// =====================================================

function BottomItem({
  icon,
  label,
  onPress,
}) {

  return (

    <TouchableOpacity
      style={styles.bottomItem}
      onPress={onPress}
      activeOpacity={0.7}
    >

      <Ionicons
        name={icon}
        size={37}
        color="#111111"
      />

      <Text style={styles.bottomLabel}>
        {label}
      </Text>

    </TouchableOpacity>

  );
}