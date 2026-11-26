# mavis-ai

A modern personal AI assistant.

---

## ▶️ [Use the App](https://regisdantas.github.io/mavis-ai)

## 👤 Author

https://github.com/regisdantas \
https://www.linkedin.com/in/regismdantas

## Backup do Firestore

Execute `npm run backup` para gerar dois formatos de backup:

- `backups/database_<data-UTC>/` contém `documents.jsonl` e `metadata.json`.
- `backups/database_<data-UTC>/firestore_backup.json` contém um JSON
  agrupado por caminho de coleção.

Ambos incluem documentos em subcoleções, mesmo quando o documento-pai não
existe. Os backups locais são ignorados pelo Git. O comando carrega
automaticamente as variáveis de `.env`, incluindo
`REACT_APP_FIREBASE_PROJECT_ID`. Como os dois formatos fazem leituras separadas
do Firestore, eles também consomem leituras separadamente da quota do projeto.

Para um projeto Firestore hospedado, também é necessário autenticar-se com
Application Default Credentials (`gcloud auth application-default login`) ou
configurar `GOOGLE_APPLICATION_CREDENTIALS` com uma credencial de serviço que
tenha permissão de leitura. As chaves de configuração do app no `.env` indicam
o projeto, mas não substituem essa autenticação.

```sh
FIREBASE_PROJECT_ID=seu-projeto npm run backup
```

Para o Emulator, defina `FIRESTORE_EMULATOR_HOST` e
`FIREBASE_PROJECT_ID`; nesse modo, não é necessária uma credencial de nuvem.

O script lê os documentos durante a execução; evite alterações no banco até o
backup terminar para reduzir o risco de capturar dados de momentos diferentes.
