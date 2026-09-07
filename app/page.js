export default function Home() {
  return (
    <main>
      <section className="card">
        <p className="eyebrow">CSX4107 • Next.js Assignments</p>
        <h1>Backend API is running</h1>
        <p>Authentication endpoints are ready for the React client.</p>
        <div className="links">
          <a href="/api/hello">GET /api/hello</a>
          <a href="/api/test">GET /api/test</a>
          <a href="/api/auth/session">GET /api/auth/session</a>
        </div>
      </section>
    </main>
  );
}
