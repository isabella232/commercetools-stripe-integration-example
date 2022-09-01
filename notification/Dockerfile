FROM node:14-alpine

WORKDIR /app
ARG CLOUD_USERNAME
ARG CLOUD_PASSWORD
ARG NPM_EMAIL

COPY .npmrc ./
COPY package.json ./
COPY yarn.lock ./
COPY tsconfig.json ./
COPY src ./src
RUN npm install -g npm-cli-login
RUN npm-cli-login -u $CLOUD_USERNAME -p $CLOUD_PASSWORD -e $NPM_EMAIL -r https://registrynpm.storefrontcloud.io
RUN yarn && yarn build

CMD ["yarn", "start"]
