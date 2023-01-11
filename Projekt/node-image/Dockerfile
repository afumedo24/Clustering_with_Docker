FROM node:15
LABEL MAINTAINER="ahmed.abdaal@stud.th-deg.de"
LABEL MAINTAINER="jenny.roetzer@stud.th-deg.de"
WORKDIR /app
COPY package.json .

ARG NODE_ENV
RUN if [ "$NODE_ENV" = "development" ]; \
        then npm install; \
        else npm install --only=production; \
        fi

COPY . ./
ENV PORT 3000
CMD ["node", "index.js"]