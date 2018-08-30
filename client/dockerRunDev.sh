IMAGE=node:8-alpine
npm i
docker run -it --rm -p 3000:3000 -v $(pwd):/app $IMAGE npm start --prefix /app