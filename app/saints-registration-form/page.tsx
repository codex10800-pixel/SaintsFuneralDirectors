"use client"
import { FormEvent, useState, ChangeEvent } from "react"

type Member = {
  firstName: string
  lastName: string
  idNumber: string
  dob: string
  relation: string
  plan: string
}

type AmatholeFormData = {
  title: string
  firstName: string
  lastName: string
  idNumber: string
  dob: string
  phone: string
  email: string
  address1: string
  address2: string
  city: string
  postalCode: string
  plan: string
  policyRef: string
  comments: string
  consent: boolean
  members: Member[]
}

const emptyMember: Member = {
  firstName: "",
  lastName: "",
  idNumber: "",
  dob: "",
  relation: "",
  plan: "",
}

const initialForm: AmatholeFormData = {
  title: "",
  firstName: "",
  lastName: "",
  idNumber: "",
  dob: "",
  phone: "",
  email: "",
  address1: "",
  address2: "",
  city: "",
  postalCode: "",
  plan: "",
  policyRef: "",
  comments: "",
  consent: false,
  members: [],
}

export default function SaintsRegistrationFormPage() {
  const [form, setForm] = useState<AmatholeFormData>(initialForm)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement
    const { name, value, type, checked } = target
    setForm((p) => ({ ...p, [name]: type === "checkbox" ? checked : value }))
  }

  const addMember = () => {
    setForm((p) => ({ ...p, members: [...p.members, { ...emptyMember }] }))
  }

  const removeMember = (index: number) => {
    setForm((p) => {
      const members = p.members.slice()
      members.splice(index, 1)
      return { ...p, members }
    })
  }

  const handleMemberChange = (index: number, e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target as HTMLInputElement
    setForm((p) => {
      const members = p.members.map((m, i) => (i === index ? { ...m, [name]: value } : m))
      return { ...p, members }
    })
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError(null)

    if (!form.firstName || !form.lastName || !form.email) {
      setError("Please fill in all required fields (*)")
      return
    }
    if (!form.consent) {
      setError("Please confirm that the information is correct.")
      return
    }

    setIsSubmitting(true)
    try {
      const res = await fetch("/api/saints-registration-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setSuccess(true)
        setForm(initialForm)
      } else {
        const json = await res.json().catch(() => null)
        setError(json?.message || "Submission failed. Please try again later.")
      }
    } catch (err) {
      console.error(err)
      setError("Submission failed. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="bg-white text-primary">
      <section className="pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold">Saints Funeral Directors — Parlour Registration</h1>
          <p className="text-muted mt-2">Use this form to register clients in the parlour. Fill in the applicant details and add any family members to be included.</p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Title</label>
                <select name="title" value={form.title} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border bg-white/50">
                  <option value="">Select</option>
                  <option value="Mr">Mr</option>
                  <option value="Mrs">Mrs</option>
                  <option value="Ms">Ms</option>
                  <option value="Dr">Dr</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">First name *</label>
                <input name="firstName" value={form.firstName} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border bg-white/50" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Last name *</label>
                <input name="lastName" value={form.lastName} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border bg-white/50" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-2">ID / Passport</label>
                <input name="idNumber" value={form.idNumber} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border bg-white/50" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Date of birth</label>
                <input name="dob" value={form.dob} onChange={handleChange} type="date" className="w-full px-4 py-3 rounded-lg border bg-white/50" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Phone</label>
                <input name="phone" value={form.phone} onChange={handleChange} placeholder="065 620 1771" className="w-full px-4 py-3 rounded-lg border bg-white/50" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Email *</label>
              <input name="email" value={form.email} onChange={handleChange} type="email" required className="w-full px-4 py-3 rounded-lg border bg-white/50" />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Address</label>
              <input name="address1" value={form.address1} onChange={handleChange} placeholder="Street address" className="w-full px-4 py-3 rounded-lg border bg-white/50 mb-3" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input name="city" value={form.city} onChange={handleChange} placeholder="City" className="w-full px-4 py-3 rounded-lg border bg-white/50" />
                <input name="postalCode" value={form.postalCode} onChange={handleChange} placeholder="Postal code" className="w-full px-4 py-3 rounded-lg border bg-white/50" />
                <input name="address2" value={form.address2} onChange={handleChange} placeholder="Suburb / Area" className="w-full px-4 py-3 rounded-lg border bg-white/50" />
              </div>
            </div>

            <div className="bg-accent/5 p-6 rounded-lg border border-accent/10">
              <h3 className="text-xl font-semibold mb-4">Membership Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Plan / Product</label>
                  <select name="plan" value={form.plan} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border bg-white/50">
                    <option value="">Select</option>
                    <option value="Plan A">Plan A</option>
                    <option value="Plan B">Plan B</option>
                    <option value="Plan C">Plan C</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Policy / Ref #</label>
                  <input name="policyRef" value={form.policyRef} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border bg-white/50" />
                </div>
                <div className="flex items-center">
                  <p className="text-sm text-muted">Add family members below using + Add Person.</p>
                </div>
              </div>
            </div>

            <div className="bg-accent/5 p-6 rounded-lg border border-accent/10">
              <h3 className="text-xl font-semibold mb-4">Add People / Members</h3>
              <p className="text-sm text-muted mb-4">Add family members or dependants to include on the policy. Use the + button to add people.</p>

              {form.members.length === 0 && (
                <div className="text-sm text-muted mb-4">No additional people added.</div>
              )}

              <div className="space-y-4">
                {form.members.map((member, idx) => (
                  <div key={idx} className="grid grid-cols-1 md:grid-cols-6 gap-3 items-end">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold mb-2">First name</label>
                      <input name="firstName" value={member.firstName} onChange={(e) => handleMemberChange(idx, e)} className="w-full px-3 py-2 rounded-lg border bg-white/50" />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold mb-2">Last name</label>
                      <input name="lastName" value={member.lastName} onChange={(e) => handleMemberChange(idx, e)} className="w-full px-3 py-2 rounded-lg border bg-white/50" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">ID / Passport</label>
                      <input name="idNumber" value={member.idNumber} onChange={(e) => handleMemberChange(idx, e)} className="w-full px-3 py-2 rounded-lg border bg-white/50" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">DOB</label>
                      <input name="dob" value={member.dob} onChange={(e) => handleMemberChange(idx, e)} type="date" className="w-full px-3 py-2 rounded-lg border bg-white/50" />
                    </div>
                    <div className="md:col-span-1 flex items-center gap-2">
                      <button type="button" onClick={() => removeMember(idx)} className="text-red-600 mt-2">Remove</button>
                    </div>
                    <div className="md:col-span-6">
                      <label className="block text-sm font-semibold mb-2">Relationship / Plan</label>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <input name="relation" value={member.relation} onChange={(e) => handleMemberChange(idx, e)} placeholder="Relationship (e.g. Spouse)" className="w-full px-3 py-2 rounded-lg border bg-white/50" />
                        <select name="plan" value={member.plan} onChange={(e) => handleMemberChange(idx, e)} className="w-full px-3 py-2 rounded-lg border bg-white/50">
                          <option value="">Select Plan</option>
                          <option value="Plan A">Plan A</option>
                          <option value="Plan B">Plan B</option>
                          <option value="Plan C">Plan C</option>
                        </select>
                        <div />
                      </div>
                    </div>
                  </div>
                ))}

                <div>
                  <button type="button" onClick={addMember} className="px-4 py-2 bg-primary text-white rounded-lg">+ Add Person</button>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Additional information</label>
              <textarea name="comments" value={form.comments} onChange={handleChange} rows={5} className="w-full px-4 py-3 rounded-lg border bg-white/50 resize-none" />
            </div>

            <div className="flex items-center gap-3">
              <input id="consent" name="consent" type="checkbox" checked={form.consent} onChange={handleChange} className="h-4 w-4" />
              <label htmlFor="consent" className="text-sm">I confirm the information is correct *</label>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <button type="submit" disabled={isSubmitting} className="px-6 py-3 bg-accent text-white font-semibold rounded-lg">
                {isSubmitting ? "Submitting..." : "Submit Request"}
              </button>
              {success && <span className="text-green-600">Submission received — we will contact you shortly.</span>}
              {error && <span className="text-red-600">{error}</span>}
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}
