export async function POST(request: Request) {
  try {
    const data = await request.json()
    // For now we simply log the submission. Integrate email/storage later.
    console.log("Saints registration submission:", data)

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch (err) {
    console.error("Error in /api/saints-registration-form:", err)
    return new Response(JSON.stringify({ success: false, message: "Server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}
