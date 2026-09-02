import { Container } from '@/components/Container'

const articles = [
  {
    title: 'The Future of Digital Tax Administration',
    description: 'How technology is changing government revenue.',
  },
  {
    title: 'Building Better Revenue Systems',
    description: 'What modern revenue management requires.',
  },
  {
    title: 'Digital Payments & Government Revenue',
    description: 'Why connected payments matter.',
  },
  {
    title: 'Government Data & Decision Making',
    description: 'Turning data into better decisions.',
  },
]

export function Resources() {
  return (
    <section
      id="resources"
      aria-label="Insights for a digital government"
      className="bg-primary/5 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-primary sm:text-4xl">
            Insights for a digital government.
          </h2>
          <p className="mt-4 text-lg tracking-tight text-primary/80">
            Briefings on revenue administration, payments and public-sector
            technology.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:max-w-none lg:grid-cols-4"
        >
          {articles.map((article) => (
            <li
              key={article.title}
              className="flex flex-col rounded-2xl bg-supporting p-6 shadow-xl shadow-primary/10"
            >
              <h3 className="font-display text-lg text-primary">
                {article.title}
              </h3>
              <p className="mt-3 text-sm text-primary/70">
                {article.description}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
