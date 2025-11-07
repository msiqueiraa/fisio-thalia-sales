<template>
  <div class="container mx-auto px-4 py-16">
    <h1 class="text-4xl font-bold text-gray-800 mb-10">Dicas e Artigos</h1>

    <div class="grid md:grid-cols-3 gap-8">
      <NuxtLink to="/dicas/5-beneficios-do-pilates" class="blog-card">
        <div class="bg-gray-300 h-48 rounded-t-lg"></div>
        <div class="p-6">
          <h2 class="text-2xl font-bold text-gray-800 mb-3">
            Os 5 Benefícios do Pilates na Gestação
          </h2>
          <p class="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia...
          </p>
          <span class="text-teal-600 font-medium">Ler mais &rarr;</span>
        </div>
      </NuxtLink>

      <NuxtLink to="/dicas/como-evitar-dor-nas-costas" class="blog-card">
        <div class="bg-gray-300 h-48 rounded-t-lg"></div>
        <div class="p-6">
          <h2 class="text-2xl font-bold text-gray-800 mb-3">
            Como Evitar Dor nas Costas no Home Office
          </h2>
          <p class="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia...
          </p>
          <span class="text-teal-600 font-medium">Ler mais &rarr;</span>
        </div>
      </NuxtLink>

      <NuxtLink to="/dicas/o-que-e-liberacao-miofascial" class="blog-card">
        <div class="bg-gray-300 h-48 rounded-t-lg"></div>
        <div class="p-6">
          <h2 class="text-2xl font-bold text-gray-800 mb-3">
            O que é Liberação Miofascial?
          </h2>
          <p class="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia...
          </p>
          <span class="text-teal-600 font-medium">Ler mais &rarr;</span>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.blog-card {
  @apply bg-white rounded-lg shadow-lg overflow-hidden transition-shadow hover:shadow-xl;
}
</style>
