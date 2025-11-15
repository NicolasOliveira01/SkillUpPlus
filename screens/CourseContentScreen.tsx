// screens/CourseContentScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigation';

type CourseContentScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'CourseContent'
>;

type Props = {
  navigation: CourseContentScreenNavigationProp;
  route: {
    params: {
      courseId: string;
      area: string;
      nivel: string;
    }
  };
};

export default function CourseContentScreen({ route }: Props) {
  const { courseId, area, nivel } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conteúdo do Curso</Text>
      
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>ID do Curso: {courseId}</Text>
        <Text style={styles.infoText}>Área: {area}</Text>
        <Text style={styles.infoText}>Nível: {nivel}</Text>
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.contentTitle}>📚 Conteúdo Gerado:</Text>
        <Text style={styles.contentText}>
          Aqui será exibido o conteúdo personalizado gerado pelo Gemini 
          para {area} no nível {nivel}.
        </Text>
        <Text style={styles.contentText}>
          Esta é uma versão de teste. A integração com a IA será implementada em breve!
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  infoContainer: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 5,
    color: '#666',
  },
  contentContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  contentTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  contentText: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10,
    color: '#555',
  },
});