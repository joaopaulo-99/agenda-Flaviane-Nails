# Agenda Flaviane Nails

## 📖 Descrição

A Agenda Flaviane Nails é um aplicativo mobile desenvolvido em React Native para auxiliar no gerenciamento de agendamentos de clientes de manicure. O sistema permite que os usuários realizem agendamentos, consultem horários disponíveis, editem informações pessoais e entrem em contato via WhatsApp.

---

## 🎯 Objetivo

Facilitar o processo de agendamento de serviços, proporcionando uma experiência simples, rápida e organizada para os clientes.

---

## ✨ Funcionalidades

- Login de usuário
- Cadastro e edição de perfil
- Agendamento de serviços
- Seleção de datas e horários disponíveis
- Visualização de agendamentos
- Edição de agendamentos
- Exclusão de agendamentos
- Integração com WhatsApp
- Exibição automática dos dados do cliente
- Controle de horários ocupados

---

## 📱 Telas do Aplicativo

### Cliente

- Login
- Tela Inicial
- Meu Perfil
- Serviços
- Novo Agendamento
- Meus Agendamentos

### Administrador

- Dashboard
- Gerenciamento de Agendamentos

---

## 🛠 Tecnologias Utilizadas

- React Native
- JavaScript
- Expo
- React Navigation
- AsyncStorage

---

## 📂 Estrutura do Projeto

```text
src/
├── screens/
│   ├── client/
│   └── admin/
├── components/
├── assets/
├── App.js
└── package.json
```

---

## 🚀 Como Executar o Projeto

### Instalar Dependências

```bash
npm install
```

### Executar o Projeto

```bash
npx expo start
```

### Executar no Celular

1. Instale o aplicativo Expo Go.
2. Execute o projeto.
3. Escaneie o QR Code exibido no terminal ou navegador.

---

## 💾 Armazenamento de Dados

O aplicativo utiliza o AsyncStorage para armazenar localmente:

- Dados do perfil do usuário
- Informações dos agendamentos

---

## 🔒 Funcionalidades de Segurança

- Validação de campos obrigatórios
- Controle de horários indisponíveis
- Tratamento de erros durante o salvamento de dados

---

## 🎓 Projeto Acadêmico

Projeto desenvolvido para a disciplina de Desenvolvimento Mobile como requisito acadêmico.

---