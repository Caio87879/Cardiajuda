import React from 'react';

import {
  View,
  Text,
  useWindowDimensions,
} from 'react-native';

import styles from '../styles/styles';

export default function DetailsCard({ dados }) {

  const { width } = useWindowDimensions();

  const cardWidth = Math.min(width * 0.90, 420);

  return (
    <View
      style={[
        styles.detailsCard,
        { width: cardWidth },
      ]}
    >

      {/* TÍTULO — SOMENTE PACIENTE */}
      {dados.tipo === 'paciente' && (
        <View style={styles.dataTitleBox}>

          <Text style={styles.dataTitle}>
            Visualize os Dados do Paciente
          </Text>

        </View>
      )}


      {/* INFORMAÇÃO PRINCIPAL */}
      <DetailRow
        label={dados.campoPrincipal}
        value={dados.valorPrincipal}
        type="principal"
      />


      {/* CONSULTAS */}
      <DetailRow
        label="Consultas feitas"
        value={dados.consultas}
        type="numero"
      />


      {/* GÊNERO */}
      <DetailRow
        label="Gênero"
        value={dados.genero}
        type="genero"
      />


      {/* AVALIAÇÃO */}
      <View style={styles.ratingRow}>

        <Text style={styles.ratingLabel}>
          Avaliação
        </Text>

        <View style={styles.stars}>

          <Text style={styles.star}>★</Text>
          <Text style={styles.star}>★</Text>
          <Text style={styles.star}>★</Text>
          <Text style={styles.star}>★</Text>
          <Text style={styles.star}>★</Text>

        </View>

      </View>


      {/* ALERTA — SOMENTE PACIENTE */}
      {dados.tipo === 'paciente' && (
        <DetailRow
          label="Atenção Necessária"
          value={dados.alerta}
          type="alerta"
        />
      )}

    </View>
  );
}


function DetailRow({ label, value, type }) {

  return (
    <View style={styles.detailRow}>

      <Text
        style={styles.detailLabel}
        numberOfLines={1}
        adjustsFontSizeToFit
        minimumFontScale={0.65}
      >
        {label}
      </Text>


      <View
        style={[
          styles.valueBox,

          type === 'principal' &&
            styles.valuePrincipal,

          type === 'numero' &&
            styles.valueNumero,

          type === 'genero' &&
            styles.valueGenero,

          type === 'alerta' &&
            styles.valueAlerta,
        ]}
      >

        <Text
          style={styles.valueText}
          numberOfLines={1}
          adjustsFontSizeToFit
          minimumFontScale={0.50}
        >
          {value}
        </Text>

      </View>

    </View>
  );
}