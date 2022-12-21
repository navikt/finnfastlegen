FROM gcr.io/distroless/nodejs:18

COPY /next.config.js ./
COPY /.next ./.next
COPY /public ./public
COPY /node_modules ./node_modules
COPY /package.json ./package.json

CMD ["npm", "start"]

EXPOSE 8080