FROM node:14-alpine

WORKDIR /app
ARG NPM_USERNAME
ARG NPM_PASSWORD
ARG NPM_EMAIL

COPY .npmrc ./
COPY package.json ./
COPY yarn.lock ./
COPY tsconfig.json ./
COPY src ./src
RUN npm install -g npm-cli-login
RUN npm-cli-login -u $NPM_USERNAME -p $NPM_PASSWORD -e $NPM_EMAIL -r https://registrynpm.storefrontcloud.io
RUN yarn && yarn build

CMD ["yarn", "start"]
