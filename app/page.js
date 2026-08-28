"use client"

import { useState } from "react"
import {
  ShoppingCart,
  Plus,
  Minus,
  Trash2,
  Loader2,
  X,
  Sparkles,
  CheckCircle,
  AlertCircle,
} from "lucide-react"

// ─── Product Data ────────────────────────────────────────────────────────────
const PRODUCTS = [
  {
    id: 1,
    name: "Crispy Pork Burger",
    price: 25.0,
    emoji: "🍔",
    accent: "from-orange-400 to-red-500",
    hover: "hover:border-orange-400",
    tag: "Popular",
  },
  {
    id: 2,
    name: "Cerveja Krug Zero",
    price: 10.0,
    emoji: "🍺",
    accent: "from-amber-400 to-yellow-500",
    hover: "hover:border-amber-400",
    tag: "Drink",
  },
  {
    id: 3,
    name: "Cassava & Beef Portion",
    price: 35.0,
    emoji: "🥩",
    accent: "from-emerald-400 to-green-600",
    hover: "hover:border-emerald-400",
    tag: "Hearty",
  },
  {
    id: 4,
    name: "X1PRO Combo",
    price: 45.0,
    emoji: "⭐",
    accent: "from-violet-500 to-purple-600",
    hover: "hover:border-violet-400",
    tag: "Best Value",
  },
]

// ─── Sub-components ──────────────────────────────────────────────────────────

function ProductCard({ product, onAdd }) {
  const [pressed, setPressed] = useState(false)

  const handleClick = () => {
    setPressed(true)
    onAdd(product)
    setTimeout(() => setPressed(false), 150)
  }

  return (
    <button
      onClick={handleClick}
      className={`relative flex flex-col items-start justify-between w-full p-5 rounded-2xl border-2 border-gray-100 bg-white shadow-sm transition-all duration-150 text-left group
        ${product.hover}
        ${pressed ? "scale-95 shadow-inner" : "hover:shadow-lg hover:-translate-y-0.5"}
      `}
    >
      {/* Tag */}
      <span className={`absolute top-3 right-3 text-xs font-semibold px-2 py-0.5 rounded-full text-white bg-gradient-to-r ${product.accent}`}>
        {product.tag}
      </span>

      {/* Emoji */}
      <span className="text-5xl mb-3 select-none">{product.emoji}</span>

      {/* Name */}
      <p className="text-gray-800 font-semibold text-base leading-tight mb-1">
        {product.name}
      </p>

      {/* Price */}
      <p className={`text-lg font-bold bg-gradient-to-r ${product.accent} bg-clip-text text-transparent`}>
        ${product.price.toFixed(2)}
      </p>

      {/* Add indicator */}
      <span className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
        <Plus className="w-5 h-5 text-gray-400" />
      </span>
    </button>
  )
}

function CartItem({ item, onIncrease, onDecrease, onRemove }) {
  return (
    <div className="flex items-center gap-3 py-3 border-b border-gray-100 last:border-0">
      <span className="text-2xl">{item.emoji}</span>

      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-800 truncate">{item.name}</p>
        <p className="text-xs text-gray-400">${item.price.toFixed(2)} each</p>
      </div>

      <div className="flex items-center gap-1">
        <button
          onClick={() => onDecrease(item.id)}
          className="w-7 h-7 rounded-lg bg-gray-100 hover:bg-red-100 hover:text-red-600 flex items-center justify-center transition-colors"
        >
          <Minus className="w-3.5 h-3.5" />
        </button>
        <span className="w-6 text-center text-sm font-bold text-gray-800">
          {item.qty}
        </span>
        <button
          onClick={() => onIncrease(item.id)}
          className="w-7 h-7 rounded-lg bg-gray-100 hover:bg-green-100 hover:text-green-600 flex items-center justify-center transition-colors"
        >
          <Plus className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="text-right min-w-[52px]">
        <p className="text-sm font-bold text-gray-800">
          ${(item.price * item.qty).toFixed(2)}
        </p>
        <button
          onClick={() => onRemove(item.id)}
          className="text-gray-300 hover:text-red-500 transition-colors mt-0.5"
        >
          <Trash2 className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  )
}

function KatlynModal({ cashbackData, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md rounded-3xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
        {/* Glassmorphism card */}
        <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 p-8">
          {/* Purple gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-violet-600/90 via-purple-700/90 to-indigo-800/90" />

          {/* Decorative blobs */}
          <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-pink-500/30 blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-indigo-400/30 blur-3xl" />

          {/* Content */}
          <div className="relative z-10 text-center">
            {/* Agent avatar */}
            <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-white/20 border-2 border-white/40 flex items-center justify-center shadow-xl">
              <Sparkles className="w-8 h-8 text-yellow-300" />
            </div>

            {/* Agent name */}
            <p className="text-white/70 text-sm font-medium tracking-widest uppercase mb-1">
              AI Loyalty Agent
            </p>
            <h2 className="text-3xl font-extrabold text-white mb-1">Katlyn</h2>

            <div className="w-12 h-0.5 bg-white/30 mx-auto my-4" />

            {/* Analysis text */}
            <p className="text-white/80 text-sm mb-6 leading-relaxed">
              Katlyn analyzed this purchase and recommends an immediate cashback bonus to reward and retain this client.
            </p>

            {/* Cashback amount */}
            <div className="bg-white/15 border border-white/25 rounded-2xl p-5 mb-6 backdrop-blur-sm">
              <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-1">
                Recommended Cashback
              </p>
              <p className="text-5xl font-black text-yellow-300 drop-shadow-lg">
                ${cashbackData.cashbackRecomendado.toFixed(2)}
              </p>
              <p className="text-white/50 text-xs mt-2">
                Order total: ${cashbackData.valorDaCompra.toFixed(2)} · Tier: {cashbackData.frequenciaDoCliente}
              </p>
            </div>

            {/* Close button */}
            <button
              onClick={onClose}
              className="w-full py-3.5 rounded-xl bg-white text-violet-700 font-bold text-base hover:bg-yellow-300 hover:text-violet-800 transition-colors shadow-lg"
            >
              Close &amp; Next Order
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function Toast({ message, type, onDismiss }) {
  return (
    <div className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center gap-3 px-5 py-3 rounded-xl shadow-xl text-sm font-medium text-white animate-in slide-in-from-bottom-4 duration-300
      ${type === "error" ? "bg-red-600" : "bg-green-600"}
    `}>
      {type === "error" ? (
        <AlertCircle className="w-4 h-4 flex-shrink-0" />
      ) : (
        <CheckCircle className="w-4 h-4 flex-shrink-0" />
      )}
      <span>{message}</span>
      <button onClick={onDismiss} className="ml-2 opacity-70 hover:opacity-100">
        <X className="w-4 h-4" />
      </button>
    </div>
  )
}

// ─── Main POS Page ────────────────────────────────────────────────────────────
export default function POSPage() {
  const [cart, setCart] = useState([])
  const [loading, setLoading] = useState(false)
  const [modal, setModal] = useState(null)
  const [toast, setToast] = useState(null)

  // Cart helpers
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === product.id)
      if (existing) {
        return prev.map((i) => i.id === product.id ? { ...i, qty: i.qty + 1 } : i)
      }
      return [...prev, { ...product, qty: 1 }]
    })
  }

  const increase = (id) =>
    setCart((prev) => prev.map((i) => i.id === id ? { ...i, qty: i.qty + 1 } : i))

  const decrease = (id) =>
    setCart((prev) => {
      const item = prev.find((i) => i.id === id)
      if (item.qty === 1) return prev.filter((i) => i.id !== id)
      return prev.map((i) => i.id === id ? { ...i, qty: i.qty - 1 } : i)
    })

  const remove = (id) => setCart((prev) => prev.filter((i) => i.id !== id))

  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0)
  const itemCount = cart.reduce((sum, i) => sum + i.qty, 0)

  const showToast = (message, type = "error") => {
    setToast({ message, type })
    setTimeout(() => setToast(null), 4000)
  }

  // Checkout
  const handleCheckout = async () => {
    if (cart.length === 0) return

    setLoading(true)
    try {
      const res = await fetch("/api/cashback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          valorDaCompra: parseFloat(total.toFixed(2)),
          frequenciaDoCliente: "ALTA",
        }),
      })

      if (!res.ok) throw new Error("Server error")

      const data = await res.json()
      setModal(data)
    } catch (err) {
      showToast("Backend unreachable. Check the API connection and try again.", "error")
    } finally {
      setLoading(false)
    }
  }

  const handleModalClose = () => {
    setModal(null)
    setCart([])
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shadow">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-extrabold text-gray-900 leading-none">SOFALA</h1>
            <p className="text-xs text-gray-400 font-medium">Loyalty Agent POS</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Katlyn online</span>
        </div>
      </header>

      {/* Main layout */}
      <div className="flex h-[calc(100vh-65px)]">
        {/* ── Left: Product Grid ── */}
        <main className="flex-1 p-6 overflow-y-auto" style={{ width: "70%" }}>
          <div className="mb-5">
            <h2 className="text-xl font-bold text-gray-800">Menu</h2>
            <p className="text-sm text-gray-400">Tap a product to add it to the order</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} onAdd={addToCart} />
            ))}
          </div>
        </main>

        {/* ── Right: Cart Panel ── */}
        <aside className="bg-white border-l border-gray-100 flex flex-col shadow-xl" style={{ width: "30%" }}>
          {/* Cart header */}
          <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingCart className="w-5 h-5 text-gray-600" />
              <h2 className="font-bold text-gray-800">Order Summary</h2>
            </div>
            {itemCount > 0 && (
              <span className="bg-violet-100 text-violet-700 text-xs font-bold px-2 py-0.5 rounded-full">
                {itemCount} {itemCount === 1 ? "item" : "items"}
              </span>
            )}
          </div>

          {/* Cart items */}
          <div className="flex-1 overflow-y-auto px-5 py-2">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-10">
                <ShoppingCart className="w-12 h-12 text-gray-200 mb-3" />
                <p className="text-gray-400 text-sm font-medium">No items yet</p>
                <p className="text-gray-300 text-xs mt-1">Tap products on the left to add them</p>
              </div>
            ) : (
              cart.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onIncrease={increase}
                  onDecrease={decrease}
                  onRemove={remove}
                />
              ))
            )}
          </div>

          {/* Cart footer */}
          <div className="px-5 py-5 border-t border-gray-100 bg-gray-50/50">
            {/* Subtotal */}
            <div className="flex justify-between text-sm text-gray-500 mb-1">
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-extrabold text-gray-900 text-lg mb-5">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            {/* Checkout button */}
            <button
              onClick={handleCheckout}
              disabled={cart.length === 0 || loading}
              className={`w-full py-4 rounded-2xl font-bold text-base flex items-center justify-center gap-2 transition-all duration-200
                ${cart.length === 0
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg hover:shadow-violet-200 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
                }
              `}
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Processing…
                </>
              ) : (
                <>
                  <CheckCircle className="w-5 h-5" />
                  Finalizar Pedido
                </>
              )}
            </button>

            {cart.length > 0 && !loading && (
              <p className="text-center text-xs text-gray-400 mt-3">
                Katlyn will analyze this order for loyalty rewards
              </p>
            )}
          </div>
        </aside>
      </div>

      {/* Katlyn Modal */}
      {modal && <KatlynModal cashbackData={modal} onClose={handleModalClose} />}

      {/* Toast */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onDismiss={() => setToast(null)}
        />
      )}
    </div>
  )
}
