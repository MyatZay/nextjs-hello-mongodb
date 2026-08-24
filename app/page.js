export default function Home() {
  return (
    <main>
      <section className="card">
        <p className="eyebrow">CSX4107 • Next.js Assignments</p>
        <h1>Backend API is running</h1>
        <p>Use the endpoints below to test the completed APIs.</p>
        <div className="links">
          <a href="/api/hello">GET /api/hello</a>
          <a href="/api/test">GET /api/test</a>
        </div>
      </section>
    </main>
  );
}
