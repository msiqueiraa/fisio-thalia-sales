<template>
  <div class="container mx-auto px-4 py-16">
    <h1 class="text-4xl font-bold text-gray-800 mb-6 text-center">
      Formas de Contato
    </h1>
    <p class="text-xl text-gray-600 text-center mb-12">
      Estou pronta para te ajudar. Escolha a melhor forma de falar comigo.
    </p>

    <div class="max-w-2xl mx-auto grid md:grid-cols-2 gap-8">
      <a
        href="https://wa.me/5522999724202"
        target="_blank"
        class="contact-card"
      >
        <h2 class="text-2xl font-bold mb-3">WhatsApp</h2>
        <p class="text-gray-600 mb-4">
          Clique aqui para me enviar uma mensagem direta e agendar sua
          avaliação.
        </p>
        <span class="text-teal-600 font-medium">Conversar agora &rarr;</span>
      </a>

      <a href="mailto:thalia.sales@email.com" class="contact-card">
        <h2 class="text-2xl font-bold mb-3">E-mail</h2>
        <p class="text-gray-600 mb-4">
          Prefere enviar um e-mail? Descreva seu caso e entrarei em contato.
        </p>
        <span class="text-teal-600 font-medium">thalia.sales@email.com</span>
      </a>
    </div>
  </div>
</template>

<style scoped>
.contact-card {
  @apply bg-white p-8 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl hover:border-teal-300 transition-all transform hover:-translate-y-1;
}
</style>
