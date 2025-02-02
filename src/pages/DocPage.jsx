import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { getDocBySlug } from '../utils/docs';

function DocPage() {
  const { slug } = useParams();
  const [doc, setDoc] = useState(null);
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    const docData = getDocBySlug(slug);
    setDoc(docData);

    // Extract headings for sidebar
    const lines = docData.content.split('\n');
    const extractedHeadings = lines
      .filter(line => line.startsWith('#'))
      .map(line => {
        const level = line.match(/^#+/)[0].length;
        const text = line.replace(/^#+\s+/, '');
        return {
          level,
          text,
          id: text.toLowerCase().replace(/[^\w]+/g, '-')
        };
      });
    setHeadings(extractedHeadings);
  }, [slug]);

  if (!doc) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 flex gap-8">
      {/* Sidebar */}
      <aside className="hidden lg:block w-64 fixed left-4 top-24 bottom-4 overflow-y-auto p-4 bg-gray-800/50 rounded-lg border border-gray-700 backdrop-blur-sm">
        <nav className="space-y-1">
          {headings.map((heading, index) => (
            <a
              key={index}
              href={`#${heading.id}`}
              className={`block py-1.5 px-3 rounded hover:bg-gray-700/50 transition-colors ${
                heading.level === 1 ? 'font-bold text-green-400' :
                heading.level === 2 ? 'pl-4 text-sm' :
                'pl-6 text-sm text-gray-400'
              }`}
            >
              {heading.text}
            </a>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <main className="lg:ml-72 w-full max-w-4xl">
        <article className="bg-gray-800/30 rounded-lg border border-gray-700 p-8 backdrop-blur-sm">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-500 to-emerald-400 text-transparent bg-clip-text">
            {doc.frontmatter.title}
          </h1>
          {doc.frontmatter.description && (
            <p className="text-xl text-gray-400 mb-8">{doc.frontmatter.description}</p>
          )}
          <div className="prose prose-lg prose-invert max-w-none">
            <ReactMarkdown
              components={{
                code({node, inline, className, children, ...props}) {
                  const match = /language-(\w+)/.exec(className || '');
                  return !inline && match ? (
                    <SyntaxHighlighter
                      style={oneDark}
                      language={match[1]}
                      PreTag="div"
                      className="rounded-lg"
                      {...props}
                    >
                      {String(children).replace(/\n$/, '')}
                    </SyntaxHighlighter>
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                }
              }}
            >
              {doc.content}
            </ReactMarkdown>
          </div>
        </article>
      </main>
    </div>
  );
}

export default DocPage;