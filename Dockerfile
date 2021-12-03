FROM node:16.13-alpine AS build
WORKDIR /app
COPY package.json ./
RUN yarn install
COPY . /app
RUN yarn build

FROM node:16.13-alpine
WORKDIR /app
RUN npm install -g webserver.local
COPY --from=build /app/build ./build
EXPOSE 3000
CMD webserver.local -d ./build