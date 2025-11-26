FROM node:18

WORKDIR /app

# Copier package.json et package-lock.json / installer toutes les dépendances
COPY package*.json ./
RUN npm install

# Copier le code source
COPY . .

EXPOSE 3000

# Lancer le serveur directement avec tsx
CMD ["npm", "run", "start"]
