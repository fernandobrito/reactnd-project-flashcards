import { lightgray, purple, white } from '../utils/colors';

export default styles = {
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: purple,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: white,
    fontSize: 22,
    textAlign: 'center',
  },
  textInput: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: lightgray,
    marginVertical: 20,
    paddingBottom: 5,
    paddingHorizontal: 5,
    backgroundColor: '#eeeeee'
  }
};
