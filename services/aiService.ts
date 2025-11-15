import { GoogleGenAI } from "@google/genai";

// ✅ Nova inicialização
const ai = new GoogleGenAI({
  apiKey: "AIzaSyB_pVKXy-5Tk7QtHGxSbS_yN_kpQZlMFUk"
});

import { getPrompt } from '../prompts/prompts';

export const generateLearningContent = async (area: string, nivel: string) => {
  try {
    console.log('🎯 Chamando Gemini para:', area, nivel);
    
    const specificPrompt = getPrompt(area, nivel);
    
    if (!specificPrompt) {
      console.log('⚠️ Prompt não encontrado, usando fallback');
      return getExampleContent(area, nivel);
    }
    
    // ✅ Nova sintaxe da API com tratamento de erro
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: specificPrompt
    });
    
    // ✅ Verificar se a resposta tem texto
    if (!response.text) {
      throw new Error('Resposta da IA veio vazia');
    }
    
    const text = response.text;
    console.log('📨 Resposta da IA:', text);
    
    const cleanJson = text.replace(/```json|```/g, '').trim();
    const parsedContent = JSON.parse(cleanJson);
    
    // Validação básica
    if (!parsedContent.roadmap) {
      throw new Error('Estrutura incompleta na resposta da IA');
    }
    
    return parsedContent;
    
  } catch (error) {
    console.log('❌ Erro na IA, usando exemplo:', error);
    return getExampleContent(area, nivel);
  }
};

// Fallback mantido
const getExampleContent = (area: string, nivel: string) => {
  return {
    roadmap: [
      `1. Aprender fundamentos de ${area}`,
      `2. Praticar conceitos básicos como ${nivel}`,
      "3. Desenvolver projeto simples",
      "4. Estudar tópicos intermediários", 
      "5. Buscar certificações ou projetos avançados"
    ]
  };
};