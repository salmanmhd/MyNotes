import frontMatter from 'front-matter';

const docFiles = import.meta.glob('/docs/*.md', { as: 'raw', eager: true });

export function getAllDocs() {
  return Object.entries(docFiles).map(([path, content]) => {
    const slug = path.split('/').pop().replace('.md', '');
    const { attributes: frontmatter } = frontMatter(content);
    
    return {
      slug,
      frontmatter: {
        title: frontmatter.title || slug,
        description: frontmatter.description || ''
      }
    };
  });
}

export function getDocBySlug(slug) {
  const entry = Object.entries(docFiles).find(([path]) => 
    path.endsWith(`${slug}.md`)
  );

  if (!entry) return null;

  const [_, content] = entry;
  const { attributes: frontmatter, body } = frontMatter(content);

  return {
    slug,
    content: body,
    frontmatter: {
      title: frontmatter.title || slug,
      description: frontmatter.description || ''
    }
  };
}