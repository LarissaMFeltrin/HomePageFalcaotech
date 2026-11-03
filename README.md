# Site Falcon Tech

Site institucional de uma página em HTML, CSS e JavaScript, sem build e sem banco de dados.

## Rodar localmente

```bash
cd public
python3 -m http.server 8090
```

Depois abra http://localhost:8090.

## Publicar

Envie só o conteúdo de `public/` para o servidor. As imagens recebidas do cliente ficam só na máquina local e não são versionadas.

Antes de publicar no domínio definitivo:

- [ ] Remover `<meta name="robots" content="noindex, nofollow">` de `public/index.html`
- [ ] Trocar a imagem de `og:image` por uma URL completa com o domínio
- [ ] Preencher todos os itens entre `[colchetes]` (`grep -n "\[" public/index.html`)
