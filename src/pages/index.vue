<template>
  <div>
    <section class="bg-white py-20 md:py-32">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-teal-700 mb-4">
          Thalia Sales Fisioterapia
        </h1>
        <p class="text-xl text-gray-700 mb-8">
          Recupere seu bem-estar com Fisioterapia Clínica, Pilates e Liberação
          Miofascial.
        </p>
        <NuxtLink
          to="/contato"
          class="bg-teal-600 text-white px-8 py-3 rounded-md font-medium text-lg hover:bg-teal-700 transition-colors"
        >
          Agende sua Avaliação
        </NuxtLink>
      </div>
    </section>

    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4 md:flex items-center">
        <div class="md:w-1/2 md:pr-10 mb-8 md:mb-0">
          <h2 class="text-3xl font-bold text-gray-800 mb-4">
            Cuidado completo para sua saúde
          </h2>
          <p class="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet.
          </p>
          <NuxtLink
            to="/quem-sou-eu"
            class="text-teal-600 font-medium hover:underline"
          >
            Conheça minha história &rarr;
          </NuxtLink>
        </div>
        <div class="md:w-1/2">
          <div
            class="bg-gray-300 rounded-lg shadow-lg w-full h-80 flex items-center justify-center text-gray-500"
          >
            [Imagem da Thalia ou do consultório]
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
