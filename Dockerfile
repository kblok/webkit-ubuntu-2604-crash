ARG UBUNTU=26.04
FROM node:22-bookworm-slim AS node
FROM ubuntu:${UBUNTU}
COPY --from=node /usr/local /usr/local
RUN apt-get update && apt-get install -y ca-certificates
WORKDIR /t
COPY package.json repro.mjs ./
RUN npm install && npx playwright install --with-deps webkit
CMD ["node", "repro.mjs"]
