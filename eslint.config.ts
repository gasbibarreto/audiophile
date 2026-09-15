import pluginVue from 'eslint-plugin-vue'
import { withVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import eslintConfigPrettier from '@vue/eslint-config-prettier'

export default withVueTs(
  // Ignora globalmente pastas de build, dependências e relatórios
  {
    ignores: ['**/dist/**', '**/node_modules/**', '**/coverage/**'],
  },

  // 1. Aplica as regras essenciais/recomendadas do Vue 3
  ...pluginVue.configs['flat/recommended'],

  // 2. Aplica as regras recomendadas do TypeScript adaptadas para arquivos Vue
  vueTsConfigs.recommended,

  // 3. Suas customizações de regras (opcional)
  {
    rules: {
      'vue/multi-word-component-names': 'off', // Exemplo de regra customizada
    },
  },

  // 4. Desativa regras do ESLint que conflitam com o Prettier (deve ser o último elemento)
  eslintConfigPrettier,
)
