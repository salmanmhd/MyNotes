import { Link } from 'react-router-dom';
import { getAllDocs } from '../utils/docs';

function Home() {
  const docs = getAllDocs();

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-green-500 to-emerald-400 text-transparent bg-clip-text">
        Documentation
      </h1>
      
      <div className="grid gap-6">
        {docs.map(doc => (
          <Link 
            key={doc.slug}
            to={`/docs/${doc.slug}`}
            className="group block p-6 bg-gray-800/30 backdrop-blur-sm rounded-lg border border-gray-700 hover:bg-gray-800/50 transition-all duration-200 hover:border-green-500/50"
          >
            <h2 className="text-2xl font-bold mb-2 text-white group-hover:text-green-400 transition-colors">
              {doc.frontmatter.title}
            </h2>
            {doc.frontmatter.description && (
              <p className="text-gray-400">{doc.frontmatter.description}</p>
            )}
          </Link>
        ))}
      </div>
    </main>
  );
}

export default Home;