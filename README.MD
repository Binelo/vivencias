# Ecossistemas de Inovação - Localizando Atores

Esta é a parte back-end do programa desenvolvido para a matéria de Vivências 4, contendo as APIs para buscar e manipular os dados. Utilizamos NodeJS/Express com banco PostgreSQL no Supabase.

## Funcionamento do sistema

Para fazer as chamadas, é necessário criar e logar em uma conta. Após o login, copie e cole a chave e coloque
juntamente com a chamada, na aba Auth -> Bearer.  
As operações CRUD estão disponíveis para todas as entidades - Usuário, Evento, Localidade e Segmento.  
Certifique-se de ter o arquivo .env com as variáveis necessárias.  

## Rotas básicas

Requisições do Thunder Client disponíveis na pasta doc.

### Autenticação

1. Login POST (/auth/login) - email e senha

### Usuario

1. Obter todos os usuários GET (/user)
2. Obter usuário por id GET (/user/1)
3. Criar usuário POST (/user/create)
4. Atualizar usuário PATCH (/user/update/1)
5. Apagar Usuário DELETE (/user/delete/4)

### Localidade

1. Obter todas as localidades GET (/localidade)
2. Obter localidade por id GET (/localidade/1)
3. Criar localidade POST (/localidade/create)
4. Atualizar localidade PATCH (/localidade/update/1)
5. Apagar Localidade DELETE (/localidade/delete/2)

### Segmento

1. Obter todos os segmentos GET (/segmento)
2. Obter segmento por id GET (/segmento/1)
3. Criar segmento POST (/segmento/create)
4. Atualizar segmento PATCH (/segmento/update/1)
5. Apagar Segmento DELETE (/segmento/delete/2)

### Evento

1. Obter todos os eventos GET (/evento)
2. Obter evento por id GET (/evento/1)
3. Criar evento POST (/evento/create)
4. Atualizar Evento PATCH (/evento/update/1)
5. Apagar Evento DELETE (/evento/delete/2)
6. Obter Evento por Status GET (/evento/aprovado)
<!-- 7. Atualizar Status do Evento PATCH (/evento/1/aprovado) -->