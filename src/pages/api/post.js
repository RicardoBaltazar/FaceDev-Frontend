// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json(
    [
      { post: 'Hoje foi um bom dia de trabalho!' },
      { post: 'Estou estudando e depois vou fazer exercícios' },
      { post: 'Escrevendo um texto' },
      { post: 'Testando app' },
      { post: 'Primeiro Post' }
    ]
  );
}
