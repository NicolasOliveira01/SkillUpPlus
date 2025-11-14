import { GoogleGenerativeAI } from '@google/generative-ai';

// 1. Configure sua chave do Gemini (grátis)
const genAI = new GoogleGenerativeAI('AIzaSyB_pVKXy-5Tk7QtHGxSbS_yN_kpQZlMFUk');

// 2. Função principal que você vai chamar
export const generateLearningContent = async (area: string, nivel: string) => {
  try {
    console.log('🎯 Chamando Gemini para:', area, nivel);
    
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    // 3. Prompt que envia para a IA
    const prompt = `
      Para área: ${area} e nível: ${nivel}
      
      Crie um conteúdo de aprendizado em JSON com:
      {
        "roadmap": ["passo 1", "passo 2", "passo 3", "passo 4", "passo 5"],
        "videoUrl": "https://www.youtube.com/link-para-video",
        "videoTitle": "Título do Vídeo Recomendado",
        "quiz": [
          {
            "question": "Pergunta 1?",
            "options": ["Opção A", "Opção B", "Opção C", "Opção D"],
            "correctAnswer": 0
          }
        ]
      }
      
      Retorne APENAS o JSON, sem texto adicional.
    `;

    // 4. Chamada para a API do Gemini
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    console.log('📨 Resposta da IA:', text);
    
    // 5. Processa a resposta
    const cleanJson = text.replace(/```json|```/g, '').trim();
    return JSON.parse(cleanJson);
    
  } catch (error) {
    console.log('❌ Erro na IA, usando exemplo:', error);
    // Se der erro, retorna conteúdo de exemplo
    return getExampleContent(area, nivel);
  }
};

// 6. Conteúdo de exemplo (fallback)
const getExampleContent = (area: string, nivel: string) => {
  return {
    roadmap: [
      `1. Aprender fundamentos de ${area}`,
      `2. Praticar conceitos básicos como ${nivel}`,
      "3. Desenvolver projeto simples",
      "4. Estudar tópicos intermediários", 
      "5. Buscar certificações ou projetos avançados"
    ],
    videoUrl: "https://www.youtube.com/watch?v=abc123",
    videoTitle: `Introdução a ${area} - Nível ${nivel}`,
    quiz: [
      {
        question: `Por onde começar em ${area}?`,
        options: ["Pelos fundamentos", "Por projetos complexos", "Pela teoria avançada", "Por ferramentas"],
        correctAnswer: 0
      }
    ]
  };
};