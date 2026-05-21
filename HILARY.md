# Oi, Hilary! 👋

Esse é o **seu** site da Culturalia. Bora deixar ele no ar?

Não se preocupa, eu (o Claude) te guio passo a passo. Você não precisa entender nada de código.

---

## Dois jeitos de conversar comigo

Você pode usar o Claude de dois jeitos. Escolhe o que for mais confortável.

### 🖥️ Jeito A — Claude Code (app no computador)

> **Recomendado pra ação**: configurar o site, publicar mudanças, subir fotos.

É um aplicativo que você instala. A vantagem: ele consegue **fazer as coisas no seu computador** — instala programas, configura serviços, publica mudanças automaticamente. Os atalhos `/setup` (pra configurar tudo do zero) e `/editar` (pra mudanças do dia-a-dia) **só funcionam aqui**.

### 🌐 Jeito B — Claude pela internet ([claude.ai](https://claude.ai))

> **Recomendado pra tirar dúvidas e brainstorm**: entender como algo funciona, planejar mudanças, perguntar coisas.

Você abre `claude.ai` no navegador e conversa normal. Não precisa instalar nada. **A diferença**: ele não consegue executar nada no seu computador — só conversa e te orienta. Pra fazer mudanças no site, ele vai te explicar o que pedir pro Claude Code (jeito A) ou pro Guilherme.

> 💡 **Pra deixar o claude.ai já contextualizado sobre seu projeto**:
> 1. Acessa https://claude.ai e clica em **"Projects"** no menu da esquerda.
> 2. **"Create project"** → nome: "Culturalia".
> 3. Em **"Project knowledge"**, clica em **"Add content"** e cola o conteúdo do arquivo `CLAUDE.md` deste projeto (abre no GitHub: https://github.com/Guiradi/culturalia/blob/main/CLAUDE.md → clica no botão "Copy raw file" e cola lá).
> 4. Pronto. Toda conversa nesse Project já vai entender quem você é e o que é a Culturalia.

---

## Antes de começar — instalar 3 programinhas (5 minutos)

> Se você escolheu **só o Jeito B (claude.ai web)**, pula essa parte — não precisa instalar nada. Só lembra que pra mudanças reais no site (publicar, configurar), o Claude na web vai te orientar a chamar o Guilherme ou a usar o Claude Code.

> Se vai usar o **Jeito A (Claude Code app)**, instala os 3 programas abaixo.

São gratuitos. Você só precisa baixar e instalar, sem pensar.

### 1. Node.js — o que faz o site funcionar nos bastidores
- Baixar (versão **LTS**): https://nodejs.org/pt-br/download
- Instalar com **Próximo → Próximo → Concluir** (deixa tudo no padrão).

### 2. Git — o que conversa com o GitHub
- **Windows**: https://git-scm.com/download/win
- **Mac**: já vem instalado. Se não tiver, abre o Terminal e digita `xcode-select --install` e enter.

### 3. Claude Code — o seu assistente
- Baixar: https://claude.com/download
- Instalar, abrir, fazer login com sua conta Claude (Pro ou Max).

---

## Passo 1 — Trazer o site pro seu computador

Você vai "clonar" (copiar) o site lá do GitHub pra sua máquina.

### No Windows ou Mac

1. Abre uma **pasta** onde você quer guardar o site. Sugiro **Documentos**.
2. **Botão direito do mouse** dentro dessa pasta → **"Abrir no Terminal"** (Mac) ou **"Open Git Bash here"** (Windows).
3. Cola este comando e dá Enter:

   ```
   git clone git@github.com:Guiradi/culturalia.git
   ```

4. Espera uns 10 segundos. Vai aparecer uma pasta nova chamada **`culturalia`** ali dentro.

> **Travou em "Permission denied"?** É porque o computador ainda não foi apresentado ao GitHub. Manda mensagem pro **Guilherme** que ele te ajuda em 5 minutos a configurar.

---

## Passo 2 — Abrir o Claude Code na pasta do site

1. Abre o **Claude Code** que você instalou.
2. No app, clica em **"Open Folder"** (ou **"Abrir Pasta"**).
3. Navega até **Documentos → culturalia → site**.
4. Confirma. O Claude Code abre a pasta certa.

---

## Passo 3 — Digitar `/setup` e seguir

No campo de mensagem do Claude Code, digita:

```
/setup
```

E dá Enter. Pronto — o assistente vai te guiar daqui em diante, fazendo perguntas e fazendo as coisas pra você.

⏱️ Tempo total do `/setup`: ~30 minutos (com pausas pra você criar contas em alguns serviços).

---

## Depois do setup — pra mudar qualquer coisa no site

Sempre que quiser ajustar alguma coisa:

1. Abre o Claude Code na pasta do site.
2. Digita:

   ```
   /editar
   ```

3. E fala normal o que quer mudar. Exemplos:

   - "muda meu e-mail pra `contato@culturalia.com.br`"
   - "sobe essa foto da minha mesa pra equipe — tá no Desktop chamada hilary.jpg"
   - "muda o slogan pra 'Cultura pra todos'"
   - "adiciona o serviço 'Direção Artística'"
   - "troca a cor magenta por azul-marinho"

O assistente faz a mudança, publica, e em ~2 minutos seu site novo está no ar.

> 💡 **Pra editar agenda e espetáculos com foto**, use o **Sanity Studio** (URL que o `/setup` te dá no final). Lá tem painel visual com tudo organizado.

---

## Quando algo der errado

### "Não sei onde digitar o comando"
Abre o Claude Code. Tem uma caixa de texto na parte de baixo da tela onde você escreve mensagens. É lá.

### "Aparece um botão pedindo permissão pra rodar algo"
Pode aceitar (clica em **"Yes"** ou **"Allow"**). O Claude Code só pede permissão pra coisas seguras dentro desse projeto.

### "Apareceu uma mensagem em vermelho"
Tira print e manda pro Guilherme. Não tem como você quebrar o site sozinha — tudo tem backup no GitHub.

### "O site não atualizou depois que pediu pra mudar"
Espera 5 minutos. Se ainda não, atualiza a página com **Ctrl+F5** (Windows) ou **Cmd+Shift+R** (Mac). Se ainda não, me chama.

---

## Resumo: o que usar quando

| Você quer...                                            | Use                                       |
|---------------------------------------------------------|-------------------------------------------|
| Colocar o site no ar pela primeira vez                  | Claude Code (app) → `/setup`              |
| Mudar texto, foto, cor (publicar mudança real)          | Claude Code (app) → `/editar`             |
| Editar agenda, espetáculos, eventos                     | Sanity Studio (link no fim do `/setup`)   |
| Tirar dúvida ("como funciona X?", "o que significa Y?") | claude.ai (web) — mais rápido pra perguntar |
| Pensar/planejar uma mudança antes de fazer              | claude.ai (web)                           |
| Algo deu errado / quebrou                               | Guilherme (e-mail abaixo)                 |

---

## Contatos

- **Guilherme** (desenvolvedor): `guilherme.ponsoni@upoutsourcing.com`
- **Site**: https://culturalia.art.br *(quando o domínio estiver configurado)*
- **Sanity Studio**: URL que o `/setup` te dá no final.
- **GitHub do site**: https://github.com/Guiradi/culturalia
- **Claude na web**: https://claude.ai

---

Boa sorte! 💜 Qualquer dúvida, me chama (no app: `/editar`; na web: claude.ai; pro Guilherme: e-mail acima).
