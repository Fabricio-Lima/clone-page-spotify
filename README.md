## IMPORTANTE ⚠️

Para fazer uso desse projeto, você deve ter uma conta Premium no Spotify. 
Caso contrário, a aplicação não irá funcionar corretamente.

## OBJETIVO 📝

- Listagem de playlists (com a imagem da playlist correspondente) e suas músicas.
- Player com função de play / pause, controle de volume, avançar / retroceder.

## TECNOLOGIAS 🚀

- Next.js
- NextAuth
- TypeScript
- Tailwind
- Recoil
- Spotify API
- Middleware

## COMO USAR 🧑‍💻

1. Faça um cadastro no `developer.spotify.com/` e crie um novo app.

2. Em seguida, na paǵina inicial do seu app, copie as seguintes chaves: `Client ID e Client Secret`.

3. Faça o clone do repositório do `clone-page-spotify` y em sua máquina, abra o projeto e crie um arquivo `.env.local.`.

4. Dentro do arquivo .env.local, crie as seguintes variáveis com os seguintes valores:

```bash
NEXTAUTH_URL="URL_DO_PROJETO"(ex: http://localhost:3000)

NEXT_PUBLIC_CLIENT_ID="CHAVE_CLIENT_ID"

NEXT_PUBLIC_CLIENT_SECRET="CHAVE_CLIENT_SECRET"

JWT_SECRET="TOKEN_SECRET"
```

5. Acesse `developer.spotify.com/` faça login e abra seu app. Na paǵina inicial, abra o editor de configurações
e navegue até `Redirects URI`, e insira o valor da variável `NEXTAUTH_URL` em `VALOR_DA_VARIAVEL/api/auth/callback/spotify` 
(ex: http://localhost:3000/api/auth/callback/spotify)

6. Abra o app do Spotify oficial (Spotify Web Player, Spotify Desktop ou Spotify Mobile) e execute uma música qualquer.

7. Após todos processos anteriores, execute os seguintes comandos: `yarn run build e yarn start` para uso em producão
ou `yarn dev` para uso em modo de desenvolvimento.
