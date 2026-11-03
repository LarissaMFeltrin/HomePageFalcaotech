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
- [ ] Adicionar `<link rel="canonical">` e `og:url` com o domínio
- [ ] Adicionar `url` e `image` aos dados da empresa (bloco `application/ld+json`)
- [ ] Criar `public/sitemap.xml` e apontar para ele no `public/robots.txt`
- [ ] Preencher todos os itens entre `[colchetes]` (`grep -n "\[" public/index.html`)

Depois de publicar:

- [ ] Testar os dados da empresa no [Teste de resultados avançados](https://search.google.com/test/rich-results)
- [ ] Cadastrar o site no [Google Search Console](https://search.google.com/search-console) e enviar o sitemap
- [ ] Colocar o endereço do site no perfil da empresa no Google
