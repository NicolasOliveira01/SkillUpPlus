import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigation';

// 1. Importar a função do serviço
import { generateLearningContent } from '../services/aiService';

// 2. Definir os tipos TypeScript
type ContentScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Content'
>;

type Props = {
  navigation: ContentScreenNavigationProp;
  route: {
    params?: {
      userData?: {
        areaInteresse: string;
        nivelArea: string;
        nome?: string;
      }
    }
  };
};

export default function ContentScreen({ route }: Props) {
  const [conteudo, setConteudo] = useState<any>(null);
  const [carregando, setCarregando] = useState(false);

  // 3. Pegar dados do usuário do RegisterScreen com fallback
  const userData = route.params?.userData || {
    areaInteresse: 'IA',
    nivelArea: 'iniciante',
    nome: 'Usuário'
  };

  // 4. Função que chama a IA
  const carregarConteudoIA = async () => {
    setCarregando(true);
    try {
      const resultado = await generateLearningContent(
        userData.areaInteresse, 
        userData.nivelArea
      );
      setConteudo(resultado);
    } catch (error) {
      console.log('Erro ao carregar conteúdo:', error);
    } finally {
      setCarregando(false);
    }
  };

  // 5. Carregar conteúdo quando a tela abrir
  useEffect(() => {
    carregarConteudoIA();
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>
        Conteúdo para {userData.areaInteresse} - {userData.nivelArea}
      </Text>

      {carregando && (
        <View style={{ alignItems: 'center', marginVertical: 20 }}>
          <ActivityIndicator size="large" />
          <Text style={{ marginTop: 10 }}>IA gerando conteúdo personalizado... 🤖</Text>
        </View>
      )}

      {conteudo && (
        <View>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>
            🎯 Roadmap:
          </Text>
          {conteudo.roadmap.map((passo: string, index: number) => (
            <Text key={index} style={{ marginBottom: 5 }}>• {passo}</Text>
          ))}
          
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 20, marginBottom: 5 }}>
            📺 Vídeo Recomendado:
          </Text>
          <Text>{conteudo.videoTitle}</Text>
          
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 20, marginBottom: 5 }}>
            ❓ Quiz:
          </Text>
          <Text>{conteudo.quiz.length} perguntas para testar seu conhecimento</Text>
        </View>
      )}

      <TouchableOpacity 
        style={{ 
          backgroundColor: '#2563EB', 
          padding: 15, 
          borderRadius: 10, 
          alignItems: 'center',
          marginTop: 30 
        }}
        onPress={carregarConteudoIA}
      >
        <Text style={{ color: 'white', fontWeight: 'bold' }}>🔄 Gerar Novo Conteúdo</Text>
      </TouchableOpacity>
    </View>
  );
}