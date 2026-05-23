"use client"
import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { CreditCard, Banknote, Smartphone, Lock, Check } from "lucide-react"

function luhnCheck(num: string) {
  const digits = num.replace(/\s+/g, "").replace(/[^0-9]/g, "")
  let sum = 0
  let shouldDouble = false
  for (let i = digits.length - 1; i >= 0; i--) {
    let d = parseInt(digits.charAt(i), 10)
    if (shouldDouble) {
      d *= 2
      if (d > 9) d -= 9
    }
    sum += d
    shouldDouble = !shouldDouble
  }
  return digits.length > 0 && sum % 10 === 0
}

function formatCardNumber(val: string) {
  const digits = val.replace(/\D/g, "").slice(0, 19)
  return digits.replace(/(\d{4})(?=\d)/g, "$1 ")
}

export default function CheckoutContent() {
  const search = useSearchParams()
  const qPlan = search?.get("plan") || ""
  const qPrice = search?.get("price") || ""

  const [plan, setPlan] = useState(qPlan)
  const [price, setPrice] = useState(qPrice)

  const [method, setMethod] = useState<"card" | "eft" | "mobile">("card")

  // Card
  const [cardName, setCardName] = useState("")
  const [cardNumber, setCardNumber] = useState("")
  const [cardExpiry, setCardExpiry] = useState("")
  const [cardCvc, setCardCvc] = useState("")

  // EFT / Mobile
  const [bank, setBank] = useState("")
  const [account, setAccount] = useState("")
  const [mobileProvider, setMobileProvider] = useState("")
  const [mobilePhone, setMobilePhone] = useState("")

  // Billing
  const [payerName, setPayerName] = useState("")
  const [payerEmail, setPayerEmail] = useState("")

  const [isProcessing, setIsProcessing] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [transactionId, setTransactionId] = useState<string | null>(null)

  useEffect(() => {
    if (qPlan) setPlan(qPlan)
    if (qPrice) setPrice(qPrice)
  }, [qPlan, qPrice])

  const formatAmount = (p: string) => p || "R0"

  const validate = () => {
    if (!payerName || !payerEmail) {
      setError("Please enter payer name and email.")
      return false
    }

    if (method === "card") {
      const digits = cardNumber.replace(/\s+/g, "")
      if (!cardName || !digits || !cardExpiry || !cardCvc) {
        setError("Please complete card details.")
        return false
      }
      if (!luhnCheck(digits)) {
        setError("Invalid card number.")
        return false
      }
      if (!/^\d{3,4}$/.test(cardCvc)) {
        setError("Invalid CVC.")
        return false
      }
    }

    if (method === "eft") {
      if (!bank || !account) {
        setError("Please enter bank and account number for EFT.")
        return false
      }
    }

    if (method === "mobile") {
      if (!mobileProvider || !mobilePhone) {
        setError("Please enter mobile provider and phone number.")
        return false
      }
    }

    setError(null)
    return true
  }

  const handlePay = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    if (!validate()) return

    setIsProcessing(true)
    // Mock processing
    await new Promise((r) => setTimeout(r, 1100))

    const tx = `TX${Date.now().toString(36)}${Math.floor(Math.random() * 900 + 100)}`
    setTransactionId(tx)
    setSuccess(true)
    setIsProcessing(false)
    console.log("Mock payment", { tx, plan, price, method, payerName, payerEmail })
  }

  return (
    <main className="bg-gray-50 text-primary min-h-screen">
      <section className="pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left: Order summary */}
            <aside className="lg:col-span-5">
              <div className="sticky top-28 space-y-6">
                <div className="rounded-2xl bg-white p-6 shadow-xl">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="text-lg font-semibold">Order Summary</h2>
                      <p className="text-sm text-muted">Review your selection before payment</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted">
                      <Lock size={16} />
                      <span>Secure</span>
                    </div>
                  </div>

                  <div className="mt-6 border rounded-lg overflow-hidden">
                    <div className="p-4 bg-gradient-to-r from-white to-gray-50 flex items-center justify-between">
                      <div>
                        <div className="text-sm text-muted">Plan</div>
                        <div className="font-semibold text-lg">{plan || "Selected plan"}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-muted">Price</div>
                        <div className="text-accent font-bold text-lg">{formatAmount(price)}</div>
                      </div>
                    </div>
                    <div className="p-4 bg-white text-sm">
                      <ul className="space-y-2">
                        <li className="flex justify-between">
                          <span className="text-muted">Membership fee</span>
                          <span>{formatAmount(price)}</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-muted">Administration</span>
                          <span>R0</span>
                        </li>
                        <li className="flex justify-between font-semibold">
                          <span>Total</span>
                          <span>{formatAmount(price)}</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-4 text-sm text-muted">
                    After payment we'll email your receipt and registration details.
                  </div>
                </div>

                <div className="rounded-2xl bg-white p-6 shadow-xl">
                  <h3 className="text-sm font-semibold mb-3">Accepted payment methods</h3>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 px-3 py-2 border rounded"><CreditCard size={18} /> Card</div>
                    <div className="flex items-center gap-2 px-3 py-2 border rounded"><Banknote size={18} /> EFT</div>
                    <div className="flex items-center gap-2 px-3 py-2 border rounded"><Smartphone size={18} /> Mobile</div>
                  </div>
                </div>

                <div className="rounded-2xl bg-white p-6 shadow-xl text-sm">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-50 rounded-full"><Check size={18} className="text-green-600" /></div>
                    <div>
                      <div className="font-semibold">Safe & encrypted</div>
                      <div className="text-muted">We do not store payment details on this site.</div>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* Right: Payment form */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl bg-white p-8 shadow-2xl">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-2xl font-bold">Secure Checkout</h1>
                    <p className="text-sm text-muted">Complete your payment to finish registration</p>
                  </div>
                  <div className="text-sm text-muted">{formatAmount(price)}</div>
                </div>

                {success ? (
                  <div className="mt-8 bg-green-50 border border-green-100 p-6 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-green-100 rounded-full"><Check className="text-green-700" size={20} /></div>
                      <div>
                        <div className="font-semibold text-green-700">Payment successful</div>
                        <div className="text-sm">Transaction ID: <span className="font-mono">{transactionId}</span></div>
                      </div>
                    </div>
                    <div className="mt-4 flex gap-3">
                      <Link href="/" className="px-4 py-2 bg-accent text-white rounded">Home</Link>
                      <button onClick={() => { setSuccess(false); setTransactionId(null) }} className="px-4 py-2 border rounded">New payment</button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handlePay} className="mt-6 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold mb-2">Payer name</label>
                        <input value={payerName} onChange={(e) => setPayerName(e.target.value)} placeholder="Full name" className="w-full px-4 py-3 rounded-lg border bg-white/50" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2">Payer email</label>
                        <input value={payerEmail} onChange={(e) => setPayerEmail(e.target.value)} type="email" placeholder="you@example.com" className="w-full px-4 py-3 rounded-lg border bg-white/50" />
                      </div>
                    </div>

                    <div className="rounded-lg border p-3">
                      <div className="flex items-center gap-2">
                        <button type="button" onClick={() => setMethod("card")} className={`px-3 py-2 rounded ${method === "card" ? "bg-accent text-white" : "border"}`}><CreditCard size={14} /> Card</button>
                        <button type="button" onClick={() => setMethod("eft")} className={`px-3 py-2 rounded ${method === "eft" ? "bg-accent text-white" : "border"}`}><Banknote size={14} /> EFT</button>
                        <button type="button" onClick={() => setMethod("mobile")} className={`px-3 py-2 rounded ${method === "mobile" ? "bg-accent text-white" : "border"}`}><Smartphone size={14} /> Mobile</button>
                      </div>

                      {method === "card" && (
                        <div className="mt-4 grid grid-cols-1 gap-4">
                          <div className="relative">
                            <label className="block text-sm font-semibold mb-2">Card number</label>
                            <input value={cardNumber} onChange={(e) => setCardNumber(formatCardNumber(e.target.value))} placeholder="1234 5678 9012 3456" className="w-full px-4 py-3 rounded-lg border bg-white/50 font-mono tracking-wider" />
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-semibold mb-2">Expiry (MM/YY)</label>
                              <input value={cardExpiry} onChange={(e) => setCardExpiry(e.target.value)} placeholder="MM/YY" className="w-full px-4 py-3 rounded-lg border bg-white/50" />
                            </div>
                            <div>
                              <label className="block text-sm font-semibold mb-2">CVC</label>
                              <input value={cardCvc} onChange={(e) => setCardCvc(e.target.value)} placeholder="123" className="w-full px-4 py-3 rounded-lg border bg-white/50" />
                            </div>
                          </div>

                          <div>
                            <label className="block text-sm font-semibold mb-2">Cardholder name</label>
                            <input value={cardName} onChange={(e) => setCardName(e.target.value)} placeholder="Name on card" className="w-full px-4 py-3 rounded-lg border bg-white/50" />
                          </div>
                        </div>
                      )}

                      {method === "eft" && (
                        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <label className="block text-sm font-semibold mb-2">Bank name</label>
                            <input value={bank} onChange={(e) => setBank(e.target.value)} className="w-full px-4 py-3 rounded-lg border bg-white/50" />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold mb-2">Account number</label>
                            <input value={account} onChange={(e) => setAccount(e.target.value)} className="w-full px-4 py-3 rounded-lg border bg-white/50" />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold mb-2">Branch code</label>
                            <input className="w-full px-4 py-3 rounded-lg border bg-white/50" />
                          </div>
                        </div>
                      )}

                      {method === "mobile" && (
                        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-semibold mb-2">Provider</label>
                            <select value={mobileProvider} onChange={(e) => setMobileProvider(e.target.value)} className="w-full px-4 py-3 rounded-lg border bg-white/50">
                              <option value="">Select</option>
                              <option value="Vodacom">Vodacom</option>
                              <option value="MTN">MTN</option>
                              <option value="CellC">CellC</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm font-semibold mb-2">Phone number</label>
                            <input value={mobilePhone} onChange={(e) => setMobilePhone(e.target.value)} placeholder="+27 7x xxx xxxx" className="w-full px-4 py-3 rounded-lg border bg-white/50" />
                          </div>
                        </div>
                      )}
                    </div>

                    {error && <div className="text-red-600">{error}</div>}

                    <div className="mt-4 flex items-center justify-between">
                      <div className="text-sm text-muted">By continuing you agree to our Terms and Privacy.</div>
                      <div className="flex items-center gap-3">
                        <button type="submit" disabled={isProcessing} className="px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-[#b8860b] text-black font-semibold rounded-lg shadow-lg">
                          {isProcessing ? "Processing…" : `Pay ${formatAmount(price)}`}
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
