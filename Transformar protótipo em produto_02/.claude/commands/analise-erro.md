⏺ Baseado na solução implementada, aqui está um prompt estruturado que você pode usar sempre que
   um guia UserGuiding não estiver abrindo corretamente:

  🔧 Prompt para Diagnosticar e Corrigir Problemas de UserGuiding

  Estou com problemas no UserGuiding - o card-[NÚMERO] não está abrindo o guia corretamente.

  Por favor, faça uma análise completa seguindo estes passos:

  1. **DIAGNÓSTICO INICIAL:**
     - Verifique se há conflitos de ID de projeto UserGuiding entre index.html e App.tsx
     - Identifique se há carregamento duplicado de scripts UserGuiding
     - Analise se o card tem tanto DOM event listener quanto React onClick handler

  2. **VERIFICAÇÃO DO CARD ESPECÍFICO:**
     - Card afetado: [NÚMERO DO CARD]
     - Título do curso: [TÍTULO DO CURSO]
     - ID do guia UserGuiding: [ID DO GUIA se conhecido]

  3. **IMPLEMENTAR CORREÇÕES:**
     - Remover carregamento duplicado de UserGuiding do React se existir
     - Adicionar DOM event listener para o card problemático (padrão similar ao card-5)
     - Adicionar/melhorar React onClick handler com logs de debug
     - Garantir que ambas as abordagens usam o mesmo ID de projeto

  4. **PADRÃO DE INTEGRAÇÃO NECESSÁRIO:**
     ```javascript
     // DOM Event Listener
     const handleCard[X]Click = () => {
       if (typeof window !== "undefined" && (window as any).userGuiding) {
         try {
           (window as any).userGuiding.previewGuide([GUIDE_ID]);
           console.log("UserGuiding guide triggered via DOM event listener for card-[X]");
         } catch (error) {
           console.error("Error triggering UserGuiding via DOM event for card-[X]:", error);
         }
       } else {
         console.warn("UserGuiding not available for DOM event card-[X]");
       }
     };

     // React Handler
     if (course.title === "[TÍTULO DO CURSO]" || course.id === "[X]") {
       console.log("🎯 Card-[X] clicked! Course:", course.title, "ID:", course.id);
       triggerUserGuiding([GUIDE_ID], "Card-[X]");
     }

  5. VALIDAÇÃO FINAL:
    - Testar build: npm run build
    - Verificar console do browser para logs de debug
    - Confirmar que o guia abre corretamente

  Informações do projeto:
  - Projeto UserGuiding ID: FDH106677CLKID (no index.html)
  - Cards já funcionando: 5 (151928), 6 (152142), 9 (152030)

  ## 🎯 Versão Simplificada para Uso Rápido:

  O card-[NÚMERO] com o curso "[TÍTULO]" não está abrindo o guia UserGuiding [ID_DO_GUIA].

  Preciso que você:
  1. Adicione DOM event listener para este card
  2. Adicione React onClick handler com logs de debug
  3. Use o padrão dos cards funcionais (5, 6, 9)
  4. Teste que não há conflitos de carregamento UserGuiding

  Implemente a mesma estrutura que foi usada para corrigir os cards 6 e 9.

  ## 📋 Template de Informações para Fornecer:

  Sempre que usar o prompt, substitua estas informações:

  - **[NÚMERO DO CARD]**: Ex: 8
  - **[TÍTULO DO CURSO]**: Ex: "Customização de Restrições no Assistente"
  - **[ID DO GUIA]**: Ex: 152030 (se conhecido)
  - **Sintomas específicos**: Ex: "não abre", "erro no console", "carrega mas não exibe"

  Este prompt garante que a mesma metodologia sistemática seja aplicada para resolver problemas
  futuros de UserGuiding.


