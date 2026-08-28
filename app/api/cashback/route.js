import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const body = await request.json()
    const { valorDaCompra, frequenciaDoCliente } = body

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 800))

    // Cashback logic based on order value and frequency
    let cashbackPercent = 0.05 // 5% base
    if (frequenciaDoCliente === 'ALTA') cashbackPercent = 0.12
    else if (frequenciaDoCliente === 'MEDIA') cashbackPercent = 0.08

    const cashbackRecomendado = parseFloat((valorDaCompra * cashbackPercent).toFixed(2))

    return NextResponse.json({
      success: true,
      cashbackRecomendado,
      frequenciaDoCliente,
      valorDaCompra,
      mensagem: `Katlyn analisou sua compra e recomenda um cashback de $${cashbackRecomendado.toFixed(2)} para fidelizar este cliente.`,
    })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Erro ao processar cashback.' }, { status: 500 })
  }
}
