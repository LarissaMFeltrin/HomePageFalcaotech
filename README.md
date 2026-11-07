# Site Falcon Tech

Site institucional de uma página em HTML, CSS e JavaScript, sem build e sem banco de dados.

## Rodar localmente

```bash
cd public
python3 -m http.server 8090
```

Depois abra http://localhost:8090.

## Publicar

Domínio: https://falcontechautomotivo.com.br

O site fica no servidor aaPanel, clonado em `/www/wwwroot/falcontech`, com a raiz do site apontando para `/www/wwwroot/falcontech/public`. Assim só o conteúdo de `public/` fica acessível. As imagens recebidas do cliente ficam só na máquina local e não são versionadas.

Para atualizar depois de juntar algo na `main`:

```bash
cd /www/wwwroot/falcontech && git pull
```

Pendente:

- [ ] Preencher a assinatura da história (`[assinatura da autora]`)

Depois de publicar:

- [ ] Testar os dados da empresa no [Teste de resultados avançados](https://search.google.com/test/rich-results)
- [ ] Cadastrar o site no [Google Search Console](https://search.google.com/search-console) e enviar o sitemap
- [ ] Colocar o endereço do site no perfil da empresa no Google
