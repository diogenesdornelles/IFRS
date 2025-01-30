#!/bin/bash

# Navegar para a pasta backend
cd ./backend

# Verificar se node_modules existe, caso contrário, instalar as dependências
if [ ! -d "node_modules" ]; then
  echo "node_modules não encontrado na pasta backend. Instalando dependências..."
  npm install -y
fi

# Rodar o backend
npm run dev &

# Voltar para o diretório raiz
cd ..

# Navegar para a pasta frontend
cd ./frontend

# Verificar se node_modules existe, caso contrário, instalar as dependências
if [ ! -d "node_modules" ]; then
  echo "node_modules não encontrado na pasta frontend. Instalando dependências..."
  npm install -y
fi

# Rodar o frontend
npm run dev
