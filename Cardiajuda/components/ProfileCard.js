import React from 'react';

import {
  View,
  Text,
  Image,
  useWindowDimensions,
} from 'react-native';

import {
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

import styles from '../styles/styles';

export default function ProfileCard({ dados }) {

  const { width } = useWindowDimensions();

  const cardWidth = Math.min(width * 0.94, 445);

  return (
    <View style={[styles.profileCard, { width: cardWidth }]}>

      {/* NOME */}
      <Text
        style={[
          styles.profileName,
          dados.tipo === 'medico' && styles.profileNameMedico,
        ]}
      >
        {dados.nome}
      </Text>


      {/* INFORMAÇÕES DO USUÁRIO */}
      <View
        style={[
          styles.userInformation,
          dados.tipo === 'medico' &&
            styles.userInformationMedico,
        ]}
      >

        {/* NOME COMPLETO */}
        <View style={styles.userInfoLine}>

          <Ionicons
            name="person"
            size={22}
            color="#FFFFFF"
          />

          <Text
            style={styles.whiteUnderline}
            numberOfLines={1}
            adjustsFontSizeToFit
            minimumFontScale={0.55}
          >
            Nome completo
          </Text>

        </View>


        {/* NÚMERO DE TELEFONE */}
        {dados.tipo === 'medico' && (

          <View style={styles.userInfoLine}>

            <Ionicons
              name="call"
              size={21}
              color="#FFFFFF"
            />

            <Text
              style={styles.whiteUnderline}
              numberOfLines={1}
              adjustsFontSizeToFit
              minimumFontScale={0.50}
            >
              Número de telefone
            </Text>

          </View>

        )}

      </View>


      {/* FOTO */}
      <View style={styles.photoWrapper}>

        <View style={styles.photoCircle}>

          <Image
            source={require('../foto_perfil.png')}
            style={styles.profileImage}
            resizeMode="cover"
          />

        </View>


        {/* CÂMERA */}
        <View style={styles.cameraButton}>

          <Ionicons
            name="camera-outline"
            size={29}
            color="#89008F"
          />

        </View>

      </View>


      {/* LINHA BRANCA */}
      <View style={styles.separator} />


      {/* INFORMAÇÕES INFERIORES */}
      <View style={styles.profileBottom}>

        <ProfileInfo
          icon={
            <Ionicons
              name="calendar"
              size={27}
              color="#FFFFFF"
            />
          }
          text="idade"
        />

        <View style={styles.divider} />

        <ProfileInfo
          icon={
            <MaterialCommunityIcons
              name="water"
              size={31}
              color="#FFFFFF"
            />
          }
          text="T.sanguíneo"
        />

        <View style={styles.divider} />

        <ProfileInfo
          icon={
            <MaterialCommunityIcons
              name="ruler"
              size={28}
              color="#FFFFFF"
            />
          }
          text="Altura"
        />

      </View>

    </View>
  );
}


function ProfileInfo({ icon, text }) {

  return (

    <View style={styles.profileInfo}>

      {icon}

      <Text
        style={styles.profileInfoText}
        numberOfLines={1}
        adjustsFontSizeToFit
        minimumFontScale={0.55}
      >
        {text}
      </Text>

    </View>

  );
}