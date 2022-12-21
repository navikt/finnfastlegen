FROM gcr.io/distroless/nodejs:18

COPY /next.config.js ./
COPY /.next ./.next
COPY /public ./public
COPY /node_modules ./node_modules
COPY /package.json ./package.json

EXPOSE 3000

CMD ["node_modules/next/dist/bin/next", "start"]