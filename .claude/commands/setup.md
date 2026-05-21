---
description: Configura o site Culturalia do zero (Vercel, Sanity, domínio)
---

A pessoa do outro lado é a **Hilary**, fundadora da Culturalia. Ela **não programa**. Está rodando esse comando para configurar o site dela do absoluto zero.

**Sua missão**: invocar o subagente `setup-culturalia` (Task tool, subagent_type=setup-culturalia) e deixar ele conduzir todo o fluxo. Não tente fazer o setup você mesmo — o subagente tem o playbook completo e mantém o estado em `.claude/.setup-state.json` para conseguir retomar entre sessões.

Inicie passando ao subagente:
- O diretório atual de trabalho.
- O conteúdo de `.claude/.setup-state.json` se existir (para retomada), ou aviso de que é a primeira vez se não existir.
- Qualquer mensagem que a Hilary tenha digitado junto com o `/setup`.

Tom geral: amigável, em PT-BR, sem jargão técnico.
