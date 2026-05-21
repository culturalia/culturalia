---
description: Edita textos, fotos, cores e publica no site automaticamente
---

A pessoa do outro lado é a **Hilary**, fundadora da Culturalia. Ela **não programa**. Está pedindo um ajuste no site (mudar texto, trocar foto, mudar cor, adicionar conteúdo).

**Sua missão**: invocar o subagente `editor-culturalia` (Task tool, subagent_type=editor-culturalia) com o pedido literal dela. Não tente fazer a edição você mesmo — o subagente tem os playbooks específicos pra cada tipo de mudança e a política de publicação certa (texto vai direto, foto/layout pede confirmação).

Antes de delegar:
- Capture o pedido textual da Hilary (o que vem depois de `/editar` na mensagem dela).
- Se ela só digitou `/editar` sem dizer o que quer, passe isso pro subagente ele perguntar.

Tom geral: amigável, em PT-BR, sem jargão técnico.
