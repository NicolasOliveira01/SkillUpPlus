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
    
    // ✅ Atualizar a validação para o novo formato
    if (!parsedContent.conteudo || !parsedContent.questao) {
      throw new Error('Estrutura incompleta na resposta da IA');
    }
    return parsedContent;
    
  } catch (error) {
    console.log('❌ Erro na IA, usando exemplo:', error);
    return getExampleContent(area, nivel);
  }
};

// Fallback atualizado para o novo formato
const getExampleContent = (area: string, nivel: string) => {
  return {
    conteudo: {
      titulo: `Introdução a ${area} - Nível ${nivel}`,
      topicos: [
        `Fundamentos básicos de ${area}`,
        `Conceitos essenciais para nível ${nivel}`,
        `Aplicações práticas no dia a dia`
      ],
      exemplos: [
        `Exemplo prático de ${area} em ação`,
        `Caso real de aplicação de ${area}`
      ]
    },
    questao: {
      pergunta: `Qual é o conceito principal de ${area}?`,
      alternativas: {
        "A": "Uma tecnologia avançada complexa",
        "B": "Um conjunto de técnicas e métodos",
        "C": "Um software específico",
        "D": "Um tipo de hardware",
        "E": "Uma linguagem de programação"
      },
      correta: "B"
    }
  };
};