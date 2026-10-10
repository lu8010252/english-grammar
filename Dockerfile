FROM node:20-alpine
WORKDIR /app
COPY server.js ./
COPY public ./public
ENV PORT=8092 \
    DATA_DIR=/data \
    TZ=Asia/Shanghai
VOLUME ["/data"]
EXPOSE 8092
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s \
  CMD wget -qO- http://127.0.0.1:8092/healthz || exit 1
CMD ["node", "server.js"]
