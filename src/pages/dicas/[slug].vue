<template>
  <div class="container mx-auto px-4 py-16">
    <div class="max-w-3xl mx-auto">
      <div class="bg-gray-300 h-80 w-full rounded-lg mb-8"></div>

      <h1 class="text-4xl font-bold text-gray-800 mb-6">
        {{
          $route.params.slug
            ? $route.params.slug.toString().split("-").join(" ")
            : ""
        }}
      </h1>

      <div class="prose max-w-none text-gray-700">
        <p class="text-xl leading-relaxed">
          Este é o início do artigo. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Vivamus lacinia odio vitae vestibulum.
        </p>
        <p>
          Donec in efficitur leo. Proin laoreet, mauris vel lacinia tincidunt,
          quam mauris porta est, id tristique tortor risus non ex. Nullam id
          facilisis elit. In hac habitasse platea dictumst.
        </p>
        <p>
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
          ultricies eget, tempor sit amet, ante.
        </p>

        <blockquote
          class="border-l-4 border-teal-500 pl-4 italic text-gray-600"
        >
          "Uma citação inspiradora ou importante sobre fisioterapia. Lorem ipsum
          dolor."
        </blockquote>

        <h2 class="text-2xl font-bold text-gray-800 mt-8 mb-4">
          Um subtítulo no artigo
        </h2>
        <p>
          Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod
          in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.
        </p>
      </div>

      <NuxtLink
        to="/dicas"
        class="text-teal-600 font-medium hover:underline mt-12 inline-block"
      >
        &larr; Voltar para todas as dicas
      </NuxtLink>
    </div>
  </div>
</template>
