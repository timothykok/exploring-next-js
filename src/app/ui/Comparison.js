export default function Comparison() {
    const comparisonData = [
      {
        feature: "Rendering",
        nextjs: "Combines SSR and CSR seamlessly.",
        expressjs: "Typically uses SSR or CSR, not both.",
      },
      {
        feature: "Interactivity",
        nextjs: "Built-in client-side interactivity with React.",
        expressjs: "Requires manual setup for interactivity.",
      },
      {
        feature: "Data Fetching",
        nextjs: "Server-side via fetch() or API routes.",
        expressjs: "Server-side fetching in middleware or routes.",
      },
      {
        feature: "SEO",
        nextjs: "Pre-rendered HTML with optional hydration.",
        expressjs: "Pre-rendered, but may lack dynamic updates.",
      },
      {
        feature: "Developer Ergonomics",
        nextjs: "Built-in React and routing system.",
        expressjs: "Requires additional libraries for templates and routing.",
      },
      {
        feature: "Performance",
        nextjs: "Optimized by splitting server/client logic.",
        expressjs: "May require custom optimization strategies.",
      },
    ];
  
    return (
      <div className="page-container">
        <h1 className= "comparison-title">Next.js vs Express.js</h1>
        <ComparisonTable data={comparisonData} />
      </div>
    );
  }
  
  function ComparisonTable({ data }) {
    return (
      <table className="comparison-table">
        <thead>
          <tr>
            <th>Feature</th>
            <th>Next.js</th>
            <th>Express.js</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.feature}</td>
              <td>{row.nextjs}</td>
              <td>{row.expressjs}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }