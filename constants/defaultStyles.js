import { StyleSheet, Platform } from 'react-native';
import FontSize from './fontSize';
import Colors from './colors';
import FontFamily from './fontFamily';

export default StyleSheet.create({
  menuText: {
    fontFamily: FontFamily.menu,
    fontSize: FontSize.menu,
    color: Colors.green,
  },
  mainText: {
    fontFamily: FontFamily.main,
    fontSize: FontSize.main,
    color: Colors.green,
  },
  ruleContainer: {
    marginVertical: 15,
  },
  rowContainer: {
    flexDirection: 'row',
  },
  ruleNrContainer: {
    paddingLeft: 10,
    width: '13%',
  },
  ruleTextContainer: {
    width: '84%',
  },
  scrollContainer: {
    marginBottom: 37,
    // marginTop: 70,
  },
  safeAreaStyle: {
    marginTop: Platform.OS === 'ios' ? 100 : 0,
    paddingTop: 100,
    flex: 1,
  },
  safeAreaStyleTab: {
    marginTop: Platform.OS === 'ios' ? 100 : 0,
    marginBottom: Platform.OS === 'ios' ? 101 : 0,
    paddingTop: 100,
    paddingBottom: 100,
  },
});
