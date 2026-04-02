# Desafio #4 - API de Cadastro de Pets 🐾

Este projeto faz parte da **Mentoria Júlio de Lima**. O objetivo é construir uma API simples para cadastro de pets, aplicando regras de negócio específicas e garantindo a qualidade através de testes automatizados.

## 👤 Autores
- **Nome:** Cristine Candeloro
- **LinkedIn:** [https://www.linkedin.com/in/cristinecandeloro](https://www.linkedin.com/in/cristinecandeloro)

- **Nome:** Ruben Ueber
- **LinkedIn:** [https://www.linkedin.com/in/rubenueber/](https://www.linkedin.com/in/rubenueber/)

- **Nome:** Luiz Neto
- **LinkedIn:** [https://www.linkedin.com/in/luiz-neto-qa/](https://www.linkedin.com/in/luiz-neto-qa/)

## 🛠️ Tecnologias Utilizadas
- **Node.js** (Ambiente de execução)
- **Express** (Framework para a API)
- **Jest** (Framework de testes)
- **Supertest** (Biblioteca para testes de integração HTTP)

---

## 📋 Regras de Negócio Implementadas
A API de cadastro de pets possui as seguintes restrições:
1. **Peso Máximo:** A empresa não aceita pets com peso acima de **50 kg**.
2. **Idade Mínima:** A empresa não aceita pets com idade menor que **2 anos**.

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
Certifique-se de ter o **Node.js** instalado em sua máquina.

### 1. Clonar o repositório
```bash
git clone [https://github.com/criscandeloro/mentoria_desafio04.git](https://github.com/criscandeloro/mentoria_desafio04.git)
cd mentoria_desafio04
```

### 2. Instalar as dependências
```bash
npm install
```
### 3. Rodar a API

Para iniciar o servidor localmente:
```bash
npm start
```
A API estará disponível em http://localhost:3000.


### 4. Como rodar os testes

Os testes automatizados validam o "caminho feliz" (cadastro com sucesso) e os cenários de erro das regras de negócio.

Para executar os testes com o Jest, utilize o comando:

```bash
npm test
```
### Estrutura do Projeto
```bash
├── src/
│   └── app.js          # Código fonte da API e regras de negócio
├── test/
│   └── pet.test.js     # Testes automatizados (Jest + Supertest)
├── package.json        # Configurações do projeto e dependências
└── README.md           # Documentação do projeto
```


