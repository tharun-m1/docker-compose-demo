FROM node:20-alpine

WORKDIR /app

COPY ./package.json ./package.json
COPY ./pnpm-lock.yaml ./pnpm-lock.yaml

RUN npm install -g pnpm
RUN npm install -g typescript
RUN pnpm install

COPY . .




RUN pnpx prisma generate
RUN pnpm run build

EXPOSE 3000

CMD [ "pnpm", "run", "dev:docker" ]