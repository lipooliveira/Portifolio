
# Use uma imagem oficial do Node.js como base
FROM node:18-alpine

# Crie diretórios para o front-end e back-end
RUN mkdir -p /app/public/

# Defina o diretório de trabalho para o back-end
WORKDIR /app/

# Copie os arquivos do back-end para o contêiner
COPY backend/package*.json ./
COPY backend/out ./

# Instale as dependências do back-end
RUN npm install --production

# Defina o diretório de trabalho para o front-end
WORKDIR /app/public

# Copie os arquivos do front-end para o contêiner
COPY frontend/dist /app/public


WORKDIR /app
EXPOSE 3000
CMD ["node", "index.js"]
