# Culturalia — Site Institucional

> 👋 **É a Hílary?** Abre o arquivo [`HILARY.md`](./HILARY.md) — tem o passo-a-passo simples pra você começar (instalar 3 programas, clonar o site, rodar `/setup` no Claude Code, pronto).
>
> Este arquivo aqui é a **documentação técnica para desenvolvedores**.

---

## Status atual (configurado em 21/05/2026)

| Serviço | Status | URL / Referência |
|---------|--------|-----------------|
| Site ao vivo (Vercel) | ✅ Ativo | https://culturalia.vercel.app |
| Domínio próprio | ✅ Ativo | https://culturalia.art.br |
| Painel de conteúdo (Sanity Studio) | ✅ Ativo | https://culturalia.sanity.studio |
| Repositório do código | ✅ Ativo | https://github.com/culturalia/culturalia |
| Google Analytics 4 | ✅ Configurado | ID: `G-EJQQE8K20L` — conta Google da Hílary |
| Webhook Sanity → Vercel | ✅ Ativo | Publicar no Studio dispara rebuild automático |
| WhatsApp no site | ✅ Configurado | +55 (11) 93618-8087 |

**Contas utilizadas:**
- **Vercel:** conta `culturalia` (e-mail: contato@culturalia.art.br)
- **Sanity:** conta Google da Hílary — projeto ID `hsr0zxgk`
- **GitHub:** https://github.com/culturalia
- **Hostgator:** domínio `culturalia.art.br` — DNS apontando para `76.76.21.21`

**Variáveis de ambiente já configuradas na Vercel** (não precisa setar de novo):
`PUBLIC_SANITY_PROJECT_ID` · `PUBLIC_SANITY_DATASET` · `PUBLIC_SANITY_API_VERSION` · `PUBLIC_GA_MEASUREMENT_ID` · `PUBLIC_WHATSAPP_NUMBER`

Site estático da **Culturalia Produções** — produtora artística e cultural sediada em São Paulo/SP.

Construído com **Astro + Sanity (CMS) + Vercel**.

---

## Stack

| Camada            | Tecnologia                                              |
|-------------------|---------------------------------------------------------|
| Framework         | [Astro 4](https://astro.build) (static site generator)  |
| Linguagem         | TypeScript                                              |
| CSS               | CSS puro com design tokens (CSS variables)              |
| Tipografia        | Google Fonts (Bowlby One SC, Poppins, Red Hat Display)  |
| CMS               | [Sanity v3](https://sanity.io) (Studio em `/sanity`)    |
| Hospedagem        | [Vercel](https://vercel.com)                            |
| Analytics         | Google Analytics 4 (via Partytown — sem prejudicar performance) |
| SEO               | Open Graph, JSON-LD, sitemap automático, robots.txt     |

---

## Estrutura do projeto

```
site/
├── public/                  # Assets estáticos
│   ├── logos/               # Logos em PNG (color, navy, cream, cream-mono)
│   ├── images/              # Espaço para fotos do portfólio
│   ├── og-default.png       # Imagem de compartilhamento (1200×630)
│   ├── favicon.png
│   └── robots.txt
├── src/
│   ├── components/          # Header, Footer, WhatsAppButton, Shapes, Analytics
│   ├── layouts/Layout.astro # Layout base (SEO, fontes, scripts)
│   ├── lib/
│   │   ├── config.ts        # 🔑 EDITAR AQUI: textos, contatos, serviços, shows
│   │   └── sanity.ts        # Cliente Sanity + queries
│   ├── pages/               # 1 arquivo = 1 rota
│   │   ├── index.astro      # Home
│   │   ├── sobre.astro
│   │   ├── servicos.astro
│   │   ├── portfolio.astro
│   │   ├── agenda.astro
│   │   ├── contato.astro
│   │   ├── privacidade.astro
│   │   ├── termos.astro
│   │   └── 404.astro
│   └── styles/global.css    # Design tokens + utilitários
├── sanity/                  # Studio para edição de conteúdo
│   ├── sanity.config.ts
│   └── schemas/             # event.ts, show.ts
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── .env.example             # Copiar para .env e preencher
```

---

## Como rodar localmente

### Pré-requisitos
- Node.js 18+ (recomendado 20+)
- npm (ou pnpm/yarn)

### Passos

```bash
# 1. Instalar dependências
cd site
npm install

# 2. Configurar variáveis de ambiente
cp .env.example .env
# (edite .env com seus valores reais — veja seção abaixo)

# 3. Rodar em modo dev
npm run dev
# → abre em http://localhost:4321

# 4. Build de produção (gera /dist)
npm run build

# 5. Preview do build local
npm run preview
```

---

## Variáveis de ambiente (`.env`)

```env
# Sanity (opcional até configurar o CMS)
PUBLIC_SANITY_PROJECT_ID=seu_project_id
PUBLIC_SANITY_DATASET=production
PUBLIC_SANITY_API_VERSION=2024-01-01

# Google Analytics 4
PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# WhatsApp (sem espaços/parênteses)
PUBLIC_WHATSAPP_NUMBER=5511936188087
```

> Se `PUBLIC_GA_MEASUREMENT_ID` não estiver preenchido, o script de Analytics simplesmente não é renderizado — o site funciona normalmente.

---

## Onde editar o conteúdo

### Textos institucionais
Arquivo único: **`src/lib/config.ts`**
- `SITE` — nome, slogan, descrição, ano de fundação, cidade
- `CONTACT` — WhatsApp, e-mail, mensagem padrão
- `SOCIAL` — Instagram (e outras redes futuras)
- `NAV` — itens do menu
- `FOUNDER` — bio da Hílary
- `SERVICES` — lista de 5 serviços
- `FEATURED_SHOWS` — espetáculos do portfólio

### Eventos / agenda (via CMS)
Editar pelo Sanity Studio (ver seção [Sanity](#sanity-cms)).

### Cores e tipografia
**`src/styles/global.css`** — todas as variáveis estão no topo (`:root { ... }`).

---

## Sanity CMS

O Studio fica em `/sanity` e permite editar Eventos e Espetáculos pelo painel.

### Setup inicial

```bash
# 1. Criar projeto em https://sanity.io/manage (gratuito até 100k requests/mês)

# 2. Instalar Sanity CLI (uma vez)
npm install -g sanity@latest

# 3. Instalar dependências do Studio
cd sanity
npm install

# 4. Login e linkar com o projeto criado
sanity login
sanity init --env=.env.studio
# (ou edite sanity.config.ts manualmente colocando o projectId)

# 5. Rodar o Studio localmente (porta 3333)
npm run dev

# 6. Deploy do Studio (gratuito em culturalia.sanity.studio)
npm run deploy
```

Após o deploy, a Hílary acessa `https://culturalia.sanity.studio` (ou a URL escolhida) para criar/editar eventos e espetáculos. O site Astro busca esses dados em build time.

---

## Deploy na Vercel

### Opção 1 — via dashboard (Recomendada)

1. Subir o projeto para um repositório Git (GitHub/GitLab).
2. Acessar https://vercel.com e clicar em **"Add New → Project"**.
3. Selecionar o repositório.
4. Em **Framework Preset**, escolher **Astro** (auto-detectado).
5. Em **Root Directory**, manter `site/` se o repo tiver mais pastas.
6. Em **Environment Variables**, adicionar todas do `.env`:
   - `PUBLIC_SANITY_PROJECT_ID`
   - `PUBLIC_SANITY_DATASET`
   - `PUBLIC_GA_MEASUREMENT_ID`
   - `PUBLIC_WHATSAPP_NUMBER`
7. Clicar **Deploy**.

### Opção 2 — via CLI

```bash
npm install -g vercel
cd site
vercel
# segue o wizard; depois:
vercel --prod
```

### Configurar domínio `culturalia.art.br`

1. Na Vercel, vá em **Project → Settings → Domains**.
2. Adicione `culturalia.art.br` e `www.culturalia.art.br`.
3. A Vercel mostrará os DNS records que precisam ser apontados:
   - **A record** (`@` → `76.76.21.21`) ou **ALIAS**, conforme o provedor
   - **CNAME** para `www` → `cname.vercel-dns.com`
4. No painel do **Registro.br** (onde está o `.art.br`), adicione esses registros.
5. Aguardar propagação DNS (5min–24h). A Vercel emite SSL automaticamente via Let's Encrypt.

### Rebuild quando o conteúdo muda no Sanity

Por padrão, o site é static — alterações no Sanity não aparecem até um novo build.

Para automatizar:
1. Na Vercel, vá em **Settings → Git → Deploy Hooks**.
2. Crie um hook chamado "Sanity content updated" → copie a URL.
3. No Sanity, vá em **API → Webhooks → Create**.
4. Cole a URL, marque triggers para os types `event` e `show`.
5. Pronto: cada edição publicada no Studio dispara rebuild automático.

---

## Pendências (a completar com a cliente)

Preencher no `config.ts` ou via Sanity Studio:

- [ ] **Ficha técnica** dos espetáculos `Jazz It Up` e `Liberdade, Liberdade — O Musical`
  (ano, teatro, duração, elenco principal) → editar em `src/lib/config.ts` ou cadastrar no Sanity
- [ ] **Fotos** dos espetáculos → colocar em `public/images/portfolio/` e referenciar no card
- [ ] **Foto + mini-bio** da Hílary → colocar em `public/images/equipe/hilary.jpg` e atualizar `FOUNDER.bio` em `config.ts`
- [ ] **Logo em SVG** (mais leve e nítido em qualquer tamanho) — pedir para a designer
- [ ] Revisão dos textos legais (Política de Privacidade e Termos de Uso) por advogado
- [ ] Verificar domínio `culturalia.art.br` após propagação DNS (pode levar até 24h a partir de 21/05/2026)

---

## Suporte

- Astro docs: https://docs.astro.build
- Sanity docs: https://www.sanity.io/docs
- Vercel docs: https://vercel.com/docs
