function HomeTitle() {
  return (
    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
      <div className="hidden sm:mb-8 sm:flex sm:justify-center">
        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
          Surprenda seus alunos.{' '}
          <a href="#" className="font-semibold text-indigo-600">
            <span className="absolute inset-0" aria-hidden="true" />
            Saiba mais <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Um plataforma para seus alunos
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Seus alunos são a base do seu negócio, de a eles uma plataforma que
          facilitem a conquistar seus sonhos.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Começar agora
          </a>
        </div>
      </div>
    </div>
  )
}

export default HomeTitle
