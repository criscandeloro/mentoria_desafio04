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

Node.js (Ambiente de execução)

Express (Framework Web)

Mocha & Chai (Framework de testes e biblioteca de asserções)

Supertest (Biblioteca para testes de integração HTTP)

Swagger (OpenAPI 3.0) (Documentação interativa da API)

GitHub Actions (Automação de CI/CD)

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

### 4. Documentação Swagger

Com o servidor rodando, você pode visualizar e testar os endpoints através da interface do Swagger:

👉 http://localhost:3000/api-docs

### 5. Como rodar os testes

Os testes automatizados validam o "caminho feliz" e as mensagens de erro das regras de negócio utilizando Mocha e Chai.

Para executar os testes, utilize o comando:

```bash
npm test
```
### Estrutura do Projeto
```bash
├── .github/workflows/  # Pipeline de Integração Contínua (CI)
├── src/
│   ├── controllers/    # Orquestração das requisições e respostas
│   ├── services/       # Implementação das Regras de Negócio
│   ├── models/         # Estrutura de dados e persistência em memória
│   └── app.js          # Configuração do Express, Swagger e Rotas
├── test/
│   └── pet.test.js     # Testes de integração (Mocha + Chai + Supertest)
├── package.json        # Dependências e scripts do projeto
└── README.md           # Documentação do projeto
```


