# Entregável 4 – Lifting State Up e useEffect (Semana 11)

Aplicação de Gerenciamento de Tarefas compartilhando estado entre componentes irmãos via componente pai (`App`), sincronizando o título da aba do navegador e implementando um contador de tempo com limpeza (`cleanup`).

## Parte 4 – Reflexão (Para Pensar)

**O que acontece se omitirmos o array de dependências do `useEffect`? Como funciona o fluxo de dados no lifting state up?**

- **Se omitirmos o array de dependências do `useEffect`:** O efeito colateral será executado **após toda e qualquer renderização** do componente (e, caso o efeito atualize um estado internamente, pode causar um loop infinito de re-renderizações).
- **Fluxo de dados no Lifting State Up ("dados para baixo, eventos para cima"):** Quando dois componentes irmãos precisam compartilhar o mesmo estado, movemos esse estado para o **componente Pai comum**. O Pai passa os **dados para baixo** via `props` (ex.: a lista para o componente `Lista`) e passa **funções de atualização via `props`** para o outro filho (ex.: `onAdicionarTarefa` para o `Formulario`), que invoca a função quando ocorre um evento do usuário.
