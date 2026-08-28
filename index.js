const express = require("express");
const app = express();
app.use(express.json());

// Simulando a leitura do Secret nativo da Replit
const aiApiKey = process.env.OPENAI_API_KEY;

app.get("/", (req, res) => {
  res.send(
    "🚀 Parabéns Godinho!!! O SOFALA Loyalty Agent está Online e Operante!",
  );
});

app.post("/api/cashback", (req, res) => {
  const { valorDaCompra, frequenciaDoCliente } = req.body;

  // Lógica dinâmica do Agente
  let regraDeCashback = "5%";
  if (valorDaCompra > 100 && frequenciaDoCliente === "ALTA") {
    regraDeCashback = "10%";
  }

  res.json({
    status: "Sucesso",
    agente: "Katlyn AI",
    auth: aiApiKey ? "Token Seguro Localizado" : "Sem Token",
    decisao: {
      valorAnalisado: valorDaCompra,
      frequencia: frequenciaDoCliente,
      cashbackRecomendado: regraDeCashback,
    },
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(
    `📡 Servidor rodando! A Replit vai expor a porta ${port} automaticamente.`,
  );
});
