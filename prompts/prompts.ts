export type AreaKey = 'ia' | 'sustentabilidade' | 'softSkills' | 'gestao' | 'analiseDados' | 'ti';
export type NivelKey = 'iniciante' | 'intermediario' | 'avancado';

export const prompts: Record<AreaKey, Record<NivelKey, string>> = {
    ia: {
        iniciante: `
            Crie um roadmap para INICIANTES em IA/Machine Learning:

            CONCEITOS FUNDAMENTAIS:
            - O que é Machine Learning e como funciona
            - Diferença entre IA, ML e Deep Learning
            - Introdução a redes neurais simples
            - Exemplos práticos de IA no dia a dia
            - Como o ChatGPT e modelos de linguagem funcionam

            FERRAMENTAS: Python básico, Google Colab, ChatGPT, Jupyter Notebook
            PRÉ-REQUISITOS: Lógica de programação, matemática do ensino médio
            PROJETOS: Classificador de imagens simples, chatbot básico com API

            FORMATO JSON EXATO:
            {
                "roadmap": [
                    "1. Aprender Python básico e bibliotecas como Pandas/NumPy",
                    "2. Entender conceitos de ML: treinamento, teste, validação",
                    "3. Praticar com datasets simples (Iris, MNIST) no Google Colab",
                    "4. Criar primeiro modelo de classificação com Scikit-learn",
                    "5. Desenvolver chatbot simples usando APIs como OpenAI"
                ]
            }

            Retorne APENAS o JSON, sem markdown, sem texto adicional.
        `,      
        intermediario: `
            Crie um roadmap para nível INTERMEDIÁRIO em IA/Machine Learning:

            TÓPICOS TÉCNICOS AVANÇADOS:
            - Algoritmos de ML supervisionado (regressão, classificação) e não-supervisionado (clustering)
            - Frameworks: TensorFlow, PyTorch, Scikit-learn
            - Processamento de linguagem natural (NLP) básico com transformers
            - Fine-tuning de modelos pré-treinados (BERT, GPT)
            - Métricas de avaliação: precisão, recall, F1-score, AUC-ROC
            - Feature engineering e seleção de características

            FERRAMENTAS: Python avançado, Jupyter, Git, APIs de IA, Docker básico
            PROJETOS: Sistema de recomendação, análise de sentimentos, classificação de texto
            PRÁTICAS: Versionamento de modelos, deploy simples com Flask/FastAPI

            FORMATO JSON EXATO:
            {
                "roadmap": [
                    "1. Dominar TensorFlow/PyTorch para redes neurais customizadas",
                    "2. Implementar algoritmos de NLP: tokenização, embeddings, transformers",
                    "3. Realizar fine-tuning em modelos como BERT para tarefas específicas",
                    "4. Desenvolver pipeline completo de ML: dados → treino → deploy",
                    "5. Criar API REST para servir modelos de ML em produção"
                ]
            }

            Retorne APENAS o JSON, sem markdown, sem texto adicional.
        `,
        avancado: `
            Crie um roadmap para nível AVANÇADO em IA/Machine Learning:

            ESPECIALIZAÇÕES TÉCNICAS:
            - Deep Learning avançado: arquiteturas Transformer, GANs, Autoencoders
            - Computer Vision: detecção de objetos, segmentação semântica
            - NLP avançado: modelos de linguagem de grande escala, RAG
            - MLOps: pipelines de CI/CD, monitoramento de modelos, drift detection
            - Ética e viés em IA: fairness, explainable AI (XAI)
            - Otimização: pruning, quantization, distributed training

            FERRAMENTAS: Docker, Kubernetes, cloud platforms (AWS SageMaker, GCP AI), MLflow
            PROJETOS: Modelo de linguagem customizado, sistema de CV em tempo real, pipeline MLOps
            CICLO COMPLETO: Pesquisa → Desenvolvimento → Deploy → Monitoramento

            FORMATO JSON EXATO:
            {
                "roadmap": [
                    "1. Desenvolver arquiteturas neurais customizadas para problemas complexos",
                    "2. Implementar sistemas de RAG (Retrieval-Augmented Generation) para LLMs",
                    "3. Construir pipelines MLOps com monitoramento contínuo e retreinamento",
                    "4. Otimizar modelos para deploy em edge devices e mobile",
                    "5. Publicar pesquisas ou contribuir para projetos open-source de IA"
                ]
            }

            Retorne APENAS o JSON, sem markdown, sem texto adicional.
        `,
    },
    sustentabilidade: {
        iniciante: `
            Crie um roadmap para INICIANTES em Sustentabilidade/ESG:

            CONCEITOS FUNDAMENTAIS:
            - O que é ESG (Environmental, Social, Governance)
            - Pilares da sustentabilidade: ambiental, social, econômico
            - Energias renováveis: solar, eólica, hidrelétrica, biomassa
            - Economia circular e gestão de resíduos
            - Mudanças climáticas e aquecimento global
            - Desenvolvimento sustentável e ODS (Objetivos de Desenvolvimento Sustentável)

            ÁREAS DE ATUAÇÃO: Consultoria ambiental, gestão de resíduos, energia renovável
            CERTIFICAÇÕES: ISO 14001 básico, LEED Green Associate
            PROJETOS: Plano de sustentabilidade para pequena empresa, gestão de resíduos domésticos

            FORMATO JSON EXATO:
            {
                "roadmap": [
                    "1. Compreender os 3 pilares do ESG: Ambiental, Social e Governança",
                    "2. Estudar fontes de energia renovável e suas aplicações práticas",
                    "3. Aprender sobre economia circular e gestão de resíduos sólidos",
                    "4. Desenvolver plano de sustentabilidade para pequena empresa/local",
                    "5. Conhecer certificações básicas e relatórios de sustentabilidade"
                ]
            }

            Retorne APENAS o JSON, sem markdown, sem texto adicional.
        `,
        intermediario: `
            Crie um roadmap para nível INTERMEDIÁRIO em Sustentabilidade/ESG:

            TÓPICOS TÉCNICOS AVANÇADOS:
            - Análise de materialidade e stakeholders
            - Metodologias de relatórios GRI e SASB
            - Gestão de carbono e pegada ambiental
            - Economia de baixo carbono e créditos de carbono
            - Due diligence socioambiental em investimentos
            - Indicadores de desempenho ESG (KPIs)
            - Supply chain sustentável e logística reversa

            FERRAMENTAS: Software de gestão ambiental, calculadoras de pegada de carbono
            CERTIFICAÇÕES: ISO 14001, ISO 50001, LEED AP
            PROJETOS: Relatório de sustentabilidade corporativo, plano de descarbonização

            FORMATO JSON EXATO:
            {
                "roadmap": [
                    "1. Desenvolver relatórios de sustentabilidade seguindo padrões GRI",
                    "2. Implementar sistema de gestão ambiental baseado na ISO 14001",
                    "3. Calcular pegada de carbono corporativa e elaborar plano de redução",
                    "4. Realizar due diligence ESG para análise de investimentos",
                    "5. Gerenciar projetos de energia renovável e eficiência energética"
                ]
            }

            Retorne APENAS o JSON, sem markdown, sem texto adicional.
        `,
        avancado: `
            Crie um roadmap para nível AVANÇADO em Sustentabilidade/ESG:

            ESPECIALIZAÇÕES E LIDERANÇA:
            - Estratégia corporativa de sustentabilidade integrada ao negócio
            - Finanças sustentáveis e green bonds
            - Inovação em tecnologias verdes e cleantech
            - Políticas públicas e advocacy em sustentabilidade
            - Gestão de riscos climáticos e adaptação
            - Economia regenerativa e biodiversidade
            - Transição energética justa e estratégia net-zero

            LIDERANÇA: CSO (Chief Sustainability Officer), consultor sênior, policymaker
            CERTIFICAÇÕES: CFA ESG, SASB FSA, cursos avançados em mudanças climáticas
            IMPACTO: Transformação organizacional, influência em políticas públicas

            FORMATO JSON EXATO:
            {
                "roadmap": [
                    "1. Desenvolver estratégia corporativa de descarbonização e net-zero",
                    "2. Estruturar operações de finanças sustentáveis e green bonds",
                    "3. Liderar transformação organizacional rumo à economia circular",
                    "4. Engajar em políticas públicas e fóruns internacionais de sustentabilidade",
                    "5. Inovar em modelos de negócio regenerativos e impacto positivo"
                ]
            }

            Retorne APENAS o JSON, sem markdown, sem texto adicional.
        `,
    },
    softSkills: {
        iniciante: `
            Crie um roadmap para INICIANTES em Soft Skills:

            HABILIDADES FUNDAMENTAIS:
            - Comunicação clara e objetiva verbal e escrita
            - Escuta ativa e empatia no ambiente profissional
            - Trabalho em equipe e colaboração básica
            - Gestão de tempo simples e organização pessoal
            - Apresentações eficazes e não-verbal communication
            - Resolução básica de conflitos interpessoais

            PRÁTICAS ESSENCIAIS: 
            - Dar e receber feedback construtivo
            - Participação ativa em reuniões
            - Networking profissional básico
            - Adaptabilidade a diferentes personalidades

            FERRAMENTAS: Trello, Google Calendar, técnicas de Pomodoro, agenda organizacional
            DESENVOLVIMENTO: Cursos online, prática diária, mentoria, auto-reflexão

            FORMATO JSON EXATO:
            {
                "roadmap": [
                    "1. Desenvolver comunicação clara: escuta ativa e fala objetiva",
                    "2. Praticar trabalho em equipe: colaboração e divisão de tarefas",
                    "3. Aprender gestão de tempo: priorização e técnicas Pomodoro",
                    "4. Treinar apresentações: estruturação e linguagem corporal",
                    "5. Desenvolver inteligência emocional: autoconhecimento e empatia"
                ]
            }

            Retorne APENAS o JSON, sem markdown, sem texto adicional.
        `,
        intermediario: `
            Crie um roadmap para nível INTERMEDIÁRIO em Soft Skills:

            HABILIDADES AVANÇADAS:
            - Liderança de equipes e gestão de pessoas
            - Negociação e persuasão em contextos complexos
            - Gestão de conflitos e mediação profissional
            - Comunicação assertiva e difícil conversations
            - Pensamento crítico e resolução de problemas complexos
            - Gestão de estresse e resiliência profissional
            - Influência e impacto organizacional

            APLICAÇÃO PRÁTICA:
            - Liderar projetos multifuncionais
            - Facilitação de reuniões e workshops
            - Mentoria e desenvolvimento de outros colaboradores
            - Gestão de relacionamento com stakeholders
            - Tomada de decisão em situações de incerteza

            FORMATO JSON EXATO:
            {
                "roadmap": [
                    "1. Desenvolver liderança: motivação de equipe e delegação eficaz",
                    "2. Dominar negociação: técnicas win-win e resolução de impasses",
                    "3. Aprimorar comunicação assertiva: feedback difícil e limites",
                    "4. Cultivar pensamento crítico: análise de problemas complexos",
                    "5. Fortalecer resiliência: gestão de estresse e adaptação a mudanças"
                ]
            }

            Retorne APENAS o JSON, sem markdown, sem texto adicional.
        `,
        avancado: `
            Crie um roadmap para nível AVANÇADO em Soft Skills:

            EXCELÊNCIA E LIDERANÇA EXECUTIVA:
            - Liderança inspiradora e visão estratégica
            - Gestão de mudança organizacional e transformação cultural
            - Comunicação executiva e influência em alto nível
            - Desenvolvimento de talentos e sucessão organizacional
            - Inteligência emocional avançada e autoconsciência
            - Tomada de decisão executiva sob pressão
            - Networking estratégico e building alliances
            - Oratória de alto impacto para grandes audiências

            IMPACTO ORGANIZACIONAL:
            - Moldar cultura organizacional e valores
            - Liderar através de crises e ambiguidade
            - Desenvolver próximas gerações de líderes
            - Influenciar direção estratégica da organização
            - Representar organização em fóruns executivos

            FORMATO JSON EXATO:
            {
                "roadmap": [
                    "1. Desenvolver liderança executiva: visão estratégica e tomada de decisão",
                    "2. Dominar comunicação de alto impacto: discursos e apresentações executivas",
                    "3. Liderar transformação cultural: gestão de mudança organizacional",
                    "4. Cultivar inteligência emocional avançada: autoconsciência e regulação",
                    "5. Construir legado: desenvolvimento de sucessores e cultura duradoura"
                ]
            }

            Retorne APENAS o JSON, sem markdown, sem texto adicional.
        `,
    },
    gestao: {
        iniciante: `
            Crie um roadmap para INICIANTES em Gestão:

            FUNDAMENTOS DA GESTÃO:
            - Ciclo de vida de projetos: iniciação, planejamento, execução, monitoramento, encerramento
            - Metodologias ágeis: Scrum básico, Kanban, cerimônias e artefatos
            - Liderança de equipes pequenas e gestão de tarefas
            - Planejamento e execução de projetos simples
            - Gestão de stakeholders e comunicação básica
            - Ferramentas de gestão e produtividade

            FERRAMENTAS: Trello, Asana, Excel, Google Workspace
            METODOLOGIAS: Scrum básico, Kanban, gestão tradicional simples
            PROJETOS: Gerenciar projeto simples de 2-3 pessoas, organização de eventos
            COMPETÊNCIAS: Organização, comunicação, básico de negociação

            FORMATO JSON EXATO:
            {
                "roadmap": [
                    "1. Aprender fundamentos de gestão de projetos e ciclo de vida",
                    "2. Dominar metodologias ágeis: Scrum básico e Kanban prático",
                    "3. Desenvolver habilidades de liderança para equipes pequenas",
                    "4. Praticar planejamento: cronogramas, recursos e orçamentos simples",
                    "5. Gerenciar primeiro projeto completo do início ao fim"
                ]
            }

            Retorne APENAS o JSON, sem markdown, sem texto adicional.
        `,
        intermediario: `
            Crie um roadmap para nível INTERMEDIÁRIO em Gestão:

            GESTÃO AVANÇADA E ESTRATÉGICA:
            - Gestão de portfólio e múltiplos projetos simultâneos
            - Metodologias híbridas: ágil + tradicional para diferentes contextos
            - Gestão de riscos e análise qualitativa/quantitativa
            - Orçamentação avançada e controle de custos
            - Gestão de mudança organizacional e resistência
            - Métricas de desempenho: KPIs, OKRs, dashboards
            - Liderança de equipes multifuncionais e remotas

            FERRAMENTAS: Jira, MS Project, Power BI, Slack avançado
            CERTIFICAÇÕES: PMP, Scrum Master, ITIL Intermediate
            PROJETOS: Projetos de médio porte, gestão de equipes de 5-10 pessoas

            FORMATO JSON EXATO:
            {
                "roadmap": [
                    "1. Gerenciar portfólio de projetos com recursos compartilhados",
                    "2. Implementar gestão de riscos proativa e planos de contingência",
                    "3. Desenvolver orçamentos complexos e controle financeiro rigoroso",
                    "4. Liderar equipes multifuncionais e gestão de desempenho",
                    "5. Aplicar frameworks como OKRs para alinhamento estratégico"
                ]
            }

            Retorne APENAS o JSON, sem markdown, sem texto adicional.
        `,
        avancado: `
            Crie um roadmap para nível AVANÇADO em Gestão:

            LIDERANÇA EXECUTIVA E ESTRATÉGICA:
            - Gestão estratégica e alinhamento com objetivos organizacionais
            - Transformação digital e gestão da inovação
            - Governança corporativa e compliance
            - Gestão de crise e business continuity planning
            - Liderança executiva: diretor, VP, C-level
            - M&A (Fusões e Aquisições) e due diligence
            - Desenvolvimento organizacional e gestão do talento
            - Orçamento corporativo e alocação de capital

            COMPETÊNCIAS EXECUTIVAS:
            - Tomada de decisão estratégica sob incerteza
            - Relacionamento com board e investidores
            - Visão sistêmica e pensamento estratégico
            - Liderança através de transformações profundas
            - Desenvolvimento de sucessores e pipeline de liderança

            FORMATO JSON EXATO:
            {
                "roadmap": [
                    "1. Formular e executar estratégia organizacional de longo prazo",
                    "2. Liderar transformações digitais e iniciativas de inovação disruptiva",
                    "3. Gerenciar relações com investidores e governança corporativa",
                    "4. Dirigir operações em escala global e gestão multicultural",
                    "5. Desenvolver próxima geração de líderes e cultura organizacional"
                ]
            }

            Retorne APENAS o JSON, sem markdown, sem texto adicional.
        `,
    },
    analiseDados: {
        iniciante: `
            Crie um roadmap para INICIANTES em Análise de Dados:

            CONCEITOS ESSENCIAIS:
            - Estatística descritiva: média, mediana, moda, desvio padrão, variância
            - Visualização de dados básica: gráficos de barras, linhas, pizza, dispersão
            - Excel para análise: fórmulas, tabelas dinâmicas, filtros, funções estatísticas
            - SQL básico: SELECT, WHERE, JOIN, GROUP BY, ORDER BY
            - Introdução à storytelling com dados e relatórios simples
            - Qualidade de dados e limpeza básica

            FERRAMENTAS: Excel, Google Sheets, SQLite, Google Data Studio, Tableau Public
            PROJETOS: Dashboard de vendas, análise de customer behavior, relatório de marketing
            PRÁTICAS: Limpeza de dados simples, criação de relatórios básicos, interpretação de métricas

            FORMATO JSON EXATO:
            {
                "roadmap": [
                    "1. Dominar Excel: tabelas dinâmicas, funções estatísticas e visualização",
                    "2. Aprender SQL básico: consultas, filtros e junções em bancos relacionais",
                    "3. Desenvolver dashboards simples com Google Data Studio ou Power BI",
                    "4. Praticar estatística descritiva para análise exploratória de dados",
                    "5. Criar relatórios de negócio com insights acionáveis e visualizações"
                ]
            }

            Retorne APENAS o JSON, sem markdown, sem texto adicional.
        `,
        intermediario: `
            Crie um roadmap para nível INTERMEDIÁRIO em Análise de Dados:

            TÓPICOS TÉCNICOS AVANÇADOS:
            - Análise exploratória avançada (EDA) com Python/Pandas
            - Estatística inferencial: testes de hipótese, intervalos de confiança, p-value
            - SQL avançado: subqueries, window functions, CTEs, otimização de queries
            - Visualização com Python: Matplotlib, Seaborn, Plotly, Dash
            - Limpeza e tratamento de dados em larga escala: missing data, outliers
            - Análise de séries temporais: tendências, sazonalidade, forecasting básico
            - Business Intelligence avançado: modelagem dimensional, ETL simples

            FERRAMENTAS: Python, Pandas, Jupyter Notebook, SQL Server/PostgreSQL, Tableau/Power BI
            PRÁTICAS: Versionamento com Git, documentação técnica, deploy de dashboards
            PROJETOS: Análise de cohort, dashboard interativo, pipeline ETL básico

            FORMATO JSON EXATO:
            {
                "roadmap": [
                    "1. Dominar Python para análise: Pandas, NumPy e bibliotecas de visualização",
                    "2. Implementar estatística inferencial para tomada de decisão baseada em dados",
                    "3. Desenvolver queries SQL complexas para extração e transformação de dados",
                    "4. Criar dashboards interativos e relatórios automatizados com Tableau/Power BI",
                    "5. Construir pipelines ETL simples e processos de qualidade de dados"
                ]
            }

            Retorne APENAS o JSON, sem markdown, sem texto adicional.
        `,
        avancado: `
            Crie um roadmap para nível AVANÇADO em Análise de Dados:

            ESPECIALIZAÇÕES TÉCNICAS:
            - Machine Learning para análise: regressão, classificação, clustering, ensemble methods
            - Estatística multivariada e análise fatorial
            - Big Data: Spark, Hadoop, processamento distribuído
            - Data Warehousing e arquitetura de dados: Kimball, Inmon
            - ETL avançado e orquestração: Airflow, dbt, data pipelines
            - Otimização e A/B testing em escala
            - Storytelling com dados avançado e data storytelling executivo
            - MLOps e deploy de modelos em produção

            FERRAMENTAS: Python avançado, Spark, Airflow, cloud platforms (AWS, GCP, Azure), Docker
            ARQUITETURA: Design de data lakes, data mesh, sistemas distribuídos
            LIDERANÇA: Gestão de equipes de analytics, estratégia de dados organizacional

            FORMATO JSON EXATO:
            {
                "roadmap": [
                    "1. Desenvolver e deployar modelos de machine learning para problemas de negócio",
                    "2. Arquitetar soluções de Big Data e data pipelines escaláveis",
                    "3. Liderar estratégia de dados organizacional e governança de dados",
                    "4. Implementar sistemas de experimentação (A/B testing) em escala",
                    "5. Otimizar performance de queries e infraestrutura de dados corporativa"
                ]
            }

            Retorne APENAS o JSON, sem markdown, sem texto adicional.
        `,
    },
    ti: {
        iniciante: `
            Crie um roadmap para INICIANTES em Tecnologia da Informação:

            FUNDAMENTOS TÉCNICOS:
            - Redes de computadores: conceitos básicos, TCP/IP, DNS, HTTP/HTTPS
            - Sistemas operacionais: Windows e Linux (comandos básicos, administração)
            - Suporte técnico e helpdesk: troubleshooting, atendimento ao usuário
            - Segurança da informação básica: antivírus, firewalls, boas práticas
            - Virtualização e cloud computing: conceitos de IaaS, PaaS, SaaS
            - Hardware: componentes, montagem, manutenção preventiva
            - Backup e recuperação de dados: estratégias básicas

            CERTIFICAÇÕES: CompTIA A+, ITIL Foundation, Microsoft Fundamentals
            FERRAMENTAS: Active Directory básico, ferramentas de monitoramento, Office 365
            CARREIRAS: Suporte técnico, helpdesk, administrador de sistemas júnior

            FORMATO JSON EXATO:
            {
                "roadmap": [
                    "1. Dominar fundamentos de redes: protocolos, configuração e troubleshooting",
                    "2. Aprender administração de sistemas Windows e Linux básica",
                    "3. Desenvolver habilidades de suporte técnico e atendimento ao usuário",
                    "4. Implementar segurança básica: antivírus, backups e políticas",
                    "5. Praticar virtualização e conceitos de cloud computing"
                ]
            }

            Retorne APENAS o JSON, sem markdown, sem texto adicional.
        `,
        intermediario: `
            Crie um roadmap para nível INTERMEDIÁRIO em Tecnologia da Informação:

            ESPECIALIZAÇÕES TÉCNICAS:
            - Administração de servidores: Windows Server, Linux Server
            - Redes avançadas: switching, routing, VLANs, VPNs, segurança de rede
            - Cloud computing: AWS, Azure ou GCP (serviços core)
            - Virtualização avançada: VMware, Hyper-V, containers (Docker)
            - Segurança: firewalls, IDS/IPS, gestão de vulnerabilidades
            - Scripting e automação: PowerShell, Bash, Python para administração
            - Monitoramento e performance: Zabbix, Nagios, Grafana

            CERTIFICAÇÕES: CCNA, AWS Solutions Architect, RHCSA, Security+
            FERRAMENTAS: Docker, Ansible, Git, ferramentas de monitoring enterprise
            CARREIRAS: Administrador de sistemas, analista de cloud, engenheiro de redes

            FORMATO JSON EXATO:
            {
                "roadmap": [
                    "1. Especializar-se em administração de servidores Windows/Linux enterprise",
                    "2. Dominar redes corporativas: switching, routing e segurança avançada",
                    "3. Implementar soluções cloud: AWS/Azure com arquitetura bem fundamentada",
                    "4. Desenvolver automação com scripting e ferramentas DevOps básicas",
                    "5. Gerenciar segurança corporativa: firewalls, compliance e políticas"
                ]
            }

            Retorne APENAS o JSON, sem markdown, sem texto adicional.
        `,
        avancado: `
            Crie um roadmap para nível AVANÇADO em Tecnologia da Informação:

            ARQUITETURA E LIDERANÇA TÉCNICA:
            - Arquitetura de soluções: design de sistemas escaláveis e resilientes
            - DevOps e SRE: CI/CD, infraestrutura como código, GitOps
            - Segurança avançada: SOC, gestão de identidade, compliance, pentesting
            - Cloud native: microservices, Kubernetes, service mesh, serverless
            - Gestão de datacenters e infraestrutura híbrida
            - Transformação digital e estratégia tecnológica
            - Orçamento e gestão de vendors em escala enterprise
            - Liderança técnica e gestão de equipes de TI

            CERTIFICAÇÕES: CCIE, AWS/Azure Solutions Architect Professional, CISSP, PMP
            FERRAMENTAS: Kubernetes, Terraform, Jenkins, SIEM, ferramentas enterprise
            CARREIRAS: Arquiteto de soluções, Engenheiro DevOps Sênior, CTO, Diretor de TI

            FORMATO JSON EXATO:
            {
                "roadmap": [
                    "1. Arquitetar soluções enterprise: cloud híbrida, microservices, alta disponibilidade",
                    "2. Liderar transformação DevOps: CI/CD, infraestrutura como código, SRE",
                    "3. Dirigir estratégia de segurança: SOC, compliance, gestão de riscos corporativos",
                    "4. Gerenciar orçamentos multimilionários e relações com vendors estratégicos",
                    "5. Desenvolver estratégia tecnológica alinhada aos objetivos de negócio"
                ]
            }

            Retorne APENAS o JSON, sem markdown, sem texto adicional.
        `,
    }
}

export const areaMap: Record<string, AreaKey> = {
  'ia': 'ia',
  'sustentabilidade': 'sustentabilidade', 
  'softSkills': 'softSkills',
  'gestao': 'gestao',
  'analiseDados': 'analiseDados',
  'ti': 'ti'
};

export function getPrompt(area: string, nivel: string): string | null {
  const areaKey = areaMap[area];
  if (areaKey && prompts[areaKey] && nivel in prompts[areaKey]) {
    return prompts[areaKey][nivel as NivelKey];
  }
  return null;
}