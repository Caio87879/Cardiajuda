import {
  StyleSheet,
} from 'react-native';

const ROXO = '#89008F';
const ROXO_ESCURO = '#26002A';
const ROSA_CLARO = '#FDEDF8';
const BRANCO = '#FFFFFF';
const PRETO = '#111111';

const styles = StyleSheet.create({

  // ===================================================
  // TELA
  // ===================================================

  safeArea: {
    flex: 1,
    backgroundColor: BRANCO,
  },

  app: {
    flex: 1,
    backgroundColor: BRANCO,
  },

  scroll: {
    flex: 1,
    backgroundColor: BRANCO,
  },

  scrollContent: {
    paddingBottom: 20,
  },


  // ===================================================
  // HEADER
  // ===================================================

  header: {
    height: 150,
    width: '100%',
    alignItems: 'center',
    backgroundColor: BRANCO,
    position: 'relative',
  },

  logo: {
    width: 265,
    height: 55,
    marginTop: 8,
  },

  headerTitle: {
    fontSize: 23,
    color: PRETO,
    marginTop: 7,
    fontWeight: '400',
  },

  backButton: {
    position: 'absolute',
    left: 12,
    top: 70,
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },


  // ===================================================
  // CARD SUPERIOR
  // ===================================================

  profileCard: {
    height: 296,

    alignSelf: 'center',

    backgroundColor: ROXO,

    borderWidth: 3,
    borderColor: ROXO_ESCURO,

    borderRadius: 20,

    position: 'relative',

    shadowColor: '#000',

    shadowOffset: {
      width: 6,
      height: 7,
    },

    shadowOpacity: 0.28,

    shadowRadius: 0,

    elevation: 7,
  },


  // ===================================================
  // NOME
  // ===================================================

  profileName: {
    position: 'absolute',

    left: 34,
    top: 17,

    color: BRANCO,

    fontSize: 32,

    textDecorationLine: 'underline',

    fontWeight: '400',

    zIndex: 5,
  },

  profileNameMedico: {
    left: 55,
  },


  // ===================================================
  // INFORMAÇÕES DO USUÁRIO
  // ===================================================

  userInformation: {
    position: 'absolute',

    right: 10,
    top: 52,

    width: 185,

    zIndex: 4,
  },

  userInformationMedico: {
    right: 9,
    top: 43,

    width: 200,

    zIndex: 4,
  },

  userInfoLine: {
    flexDirection: 'row',

    alignItems: 'center',

    height: 39,

    width: '100%',
  },

  whiteUnderline: {
    color: BRANCO,

    fontSize: 18,

    textDecorationLine: 'underline',

    marginLeft: 5,

    flex: 1,

    flexShrink: 1,

    includeFontPadding: false,
  },


  // ===================================================
  // FOTO
  // ===================================================

  photoWrapper: {
    position: 'absolute',

    left: 27,
    top: 66,

    width: 140,
    height: 145,

    justifyContent: 'center',

    alignItems: 'center',

    zIndex: 3,
  },

  photoCircle: {
    width: 134,
    height: 134,

    borderRadius: 67,

    backgroundColor: BRANCO,

    borderWidth: 3,
    borderColor: BRANCO,

    overflow: 'hidden',

    justifyContent: 'center',

    alignItems: 'center',
  },

  profileImage: {
    width: 130,
    height: 130,

    borderRadius: 65,
  },


  // ===================================================
  // CÂMERA
  // ===================================================

  cameraButton: {
    position: 'absolute',

    right: -12,
    bottom: 0,

    width: 56,
    height: 42,

    backgroundColor: BRANCO,

    borderRadius: 7,

    justifyContent: 'center',

    alignItems: 'center',

    borderWidth: 1,

    borderColor: '#DDDDDD',

    zIndex: 10,
  },


  // ===================================================
  // LINHA BRANCA
  // ===================================================

  separator: {
    position: 'absolute',

    left: 15,
    right: 15,

    bottom: 66,

    height: 9,

    borderRadius: 8,

    backgroundColor: BRANCO,

    transform: [
      {
        rotate: '1deg',
      },
    ],
  },


  // ===================================================
  // INFORMAÇÕES INFERIORES
  // ===================================================

  profileBottom: {
    position: 'absolute',

    left: 9,
    right: 9,

    bottom: 0,

    height: 65,

    flexDirection: 'row',

    alignItems: 'center',
  },

  profileInfo: {
    flex: 1,

    minWidth: 0,

    flexDirection: 'row',

    justifyContent: 'center',

    alignItems: 'center',
  },

  profileInfoText: {
    color: BRANCO,

    fontSize: 18,

    marginLeft: 4,

    flexShrink: 1,

    includeFontPadding: false,
  },

  divider: {
    width: 2,

    height: 62,

    backgroundColor: BRANCO,
  },


  // ===================================================
  // CARD INFERIOR
  // ===================================================

  detailsCard: {
    minHeight: 399,

    alignSelf: 'center',

    backgroundColor: ROXO,

    borderWidth: 3,

    borderColor: ROXO_ESCURO,

    borderRadius: 20,

    marginTop: 21,

    paddingTop: 67,

    paddingHorizontal: 12,

    paddingBottom: 25,

    shadowColor: '#000',

    shadowOffset: {
      width: 6,
      height: 7,
    },

    shadowOpacity: 0.28,

    shadowRadius: 0,

    elevation: 7,
  },


  // ===================================================
  // TÍTULO "VISUALIZE OS DADOS"
  // ===================================================

  dataTitleBox: {
    position: 'absolute',

    top: 10,

    left: 12,
    right: 12,

    height: 40,

    backgroundColor: BRANCO,

    borderWidth: 2,

    borderColor: ROXO_ESCURO,

    borderRadius: 15,

    justifyContent: 'center',

    alignItems: 'center',

    zIndex: 5,
  },

  dataTitle: {
    color: PRETO,

    fontSize: 17,

    fontWeight: '700',

    fontFamily: 'serif',

    textAlign: 'center',

    includeFontPadding: false,
  },


  // ===================================================
  // LINHAS DOS DADOS
  // ===================================================

  detailRow: {
    width: '100%',

    minHeight: 40,

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 4,
  },

  detailLabel: {
    color: BRANCO,

    fontSize: 25,

    flex: 1,

    flexShrink: 1,

    includeFontPadding: false,
  },


  // ===================================================
  // CAIXAS DOS VALORES
  // ===================================================

  valueBox: {
    height: 35,

    marginLeft: 5,

    borderWidth: 3,

    borderColor: ROXO_ESCURO,

    borderRadius: 20,

    justifyContent: 'center',

    alignItems: 'center',

    paddingHorizontal: 9,

    flexShrink: 1,
  },

  valuePrincipal: {
    minWidth: 125,

    maxWidth: 150,
  },

  valueNumero: {
    minWidth: 65,

    maxWidth: 75,
  },

  valueGenero: {
    minWidth: 145,

    maxWidth: 160,
  },

  valueAlerta: {
    minWidth: 80,

    maxWidth: 90,
  },

  valueText: {
    color: BRANCO,

    fontSize: 20,

    includeFontPadding: false,

    flexShrink: 1,
  },


  // ===================================================
  // AVALIAÇÃO
  // ===================================================

  ratingRow: {
    flexDirection: 'row',

    alignItems: 'center',

    marginTop: 2,
  },

  ratingLabel: {
    color: BRANCO,

    fontSize: 25,

    includeFontPadding: false,
  },

  stars: {
    flexDirection: 'row',

    marginLeft: 6,

    flexShrink: 1,
  },

  star: {
    color: BRANCO,

    fontSize: 27,

    lineHeight: 33,

    marginRight: 0,
  },


  // ===================================================
  // MENU INFERIOR
  // ===================================================

  bottomNavigation: {
    height: 77,

    width: '100%',

    backgroundColor: ROSA_CLARO,

    borderTopWidth: 1,

    borderTopColor: '#F0D8E9',

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'space-around',
  },

  bottomItem: {
    width: '25%',

    height: 77,

    alignItems: 'center',

    justifyContent: 'center',
  },

  bottomLabel: {
    color: PRETO,

    fontSize: 12,

    fontWeight: '600',

    marginTop: 1,
  },

});

export default styles;