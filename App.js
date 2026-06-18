import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Modal } from 'react-native';

export default function LoginScreen() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

const [modalVisible, setModalVisible] = useState(false);
const [modalMessage, setModalMessage] = useState('');

const handleLogin = () => {
  if (email === 'a@gmail.com' && password === '123456') {
    setModalMessage('Correcto');
    setModalVisible(true);
  } else {
    setModalMessage('Incorrecto, vuelva a intentarlo');
    setModalVisible(true);
  }
};
 return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.headerText}>Login App (Apellido, Apellido)</Text>
      </View>

      <Image
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg' }}
        style={styles.logo}
        resizeMode="contain"
      />

      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>INGRESAR</Text>
      </TouchableOpacity>

      <Text style={styles.link}>Olvidaste la clave?</Text>
      <Text style={styles.link}>Crear Cuenta</Text>


      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.5)'
        }}>
          <View style={{
            backgroundColor: 'white',
            padding: 20,
            borderRadius: 10,
            alignItems: 'center'
          }}>
            <Text style={{ fontSize: 18, marginBottom: 10 }}>{modalMessage}</Text>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={{ color: '#6A0DAD', fontWeight: 'bold' }}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    backgroundColor: '#6A0DAD',
    width: '100%',
    padding: 15,
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  logo: {
    width: 200,
    height: 100,
    marginVertical: 20,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginVertical: 8,
  },
  button: {
    backgroundColor: '#6A0DAD',
    padding: 15,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  link: {
    color: '#6A0DAD',
    marginTop: 5,
  },
});