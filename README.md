# Sistema de Gestão de Estoque

Resumo
- Aplicação React para gestão de estoque (cadastro de produtos, movimentações, alertas de reposição).
- Frontend em React. Pode usar Vite ou Create React App dependendo da configuração no package.json.

Pré-requisitos
- Node.js (recomenda-se versão 16+). Baixe em https://nodejs.org/
- npm (vem com Node) ou yarn (opcional).
- Git (opcional, para clonar o repositório).

Instalar dependências (Windows - PowerShell / CMD)
1. Abra o terminal integrado do VS Code (Ctrl+`) ou PowerShell/CMD.
2. Navegue até a pasta do projeto:
   cd "provaSaep\sistema"
3. Instale dependências:
   - Com npm:
     npm install
   - Com yarn:
     yarn

script de execução
- Executar atravez do:
  - Se existir "dev": use `npm run dev`

Comandos comuns
- Rodar em desenvolvimento:
  npm run dev
  ou
  npm start

- Build de produção:
  npm run build

- Rodar testes:
  npm test
  ou
  npm run test

- Rodar lint (se existir):
  npm run lint

Executar no Windows (exemplos)
- PowerShell / CMD:
  cd "provaSaep\sistema"
  npm install
  npm run dev

Como rodar localmente no VS Code
1. Abrir pasta no VS Code: File -> Open Folder -> selecione a pasta do projeto.
2. Abrir terminal integrado (Ctrl+`).
3. Rodar os comandos de instalação e dev acima.
4. Abra o navegador em http://localhost:3000 ou na porta indicada pelo terminal.

Adicionar novas dependências
- Com npm:
  npm install nome-pacote
- Com yarn:
  yarn add nome-pacote

Dúvidas / problemas comuns
- Erro de versão do Node: instale a versão recomendada.
- Porta ocupada: mude a porta no script de dev ou feche processo que está usando a porta.
- Dependências faltando: rode `npm install` novamente.
- existem algumas partes faltante por falta de tempo