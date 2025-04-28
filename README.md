# ContextPop

Tiny Chrome/Edge extension that pops a sticky TL;DR bubble
whenever you reopen a WhatsApp Web chat after a pause.

## How it works
1. Watches the chat pane (`div[role='region']`).
2. Grabs the last 30 visible messages.
3. Creates a 3-sentence summary on-device, no external calls.
4. Injects a sticky banner at the top of the chat.

### Install locally (dev mode)
