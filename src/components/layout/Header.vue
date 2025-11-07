<script setup>
import { ref } from "vue";

// 1. Variável de estado para controlar o menu
const isMobileMenuOpen = ref(false);

// Função para fechar o menu (quando clicar num link)
function closeMenu() {
  isMobileMenuOpen.value = false;
}
</script>

<template>
  <header class="bg-white shadow-sm sticky top-0 z-50 relative">
    <nav class="container mx-auto px-4 py-4 flex justify-between items-center">
      <NuxtLink
        to="/"
        class="text-2xl font-bold text-teal-700 hover:text-teal-600 transition-colors"
        @click="closeMenu"
      >
        Thalia Sales
      </NuxtLink>

      <div class="hidden md:flex space-x-6 items-center">
        <NuxtLink to="/pilates" class="nav-link">Pilates</NuxtLink>
        <NuxtLink to="/liberacao-miofascial" class="nav-link"
          >Liberação Miofascial</NuxtLink
        >
        <NuxtLink to="/dicas" class="nav-link">Dicas</NuxtLink>
        <NuxtLink to="/quem-sou-eu" class="nav-link">Quem Sou Eu</NuxtLink>
        <NuxtLink to="/contato" class="nav-link"> Contato </NuxtLink>
      </div>

      <div class="md:hidden">
        <button
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="text-gray-700 focus:outline-none"
        >
          <svg
            v-if="isMobileMenuOpen"
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>

          <svg
            v-else
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
    </nav>

    <div
      v-if="isMobileMenuOpen"
      class="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 animate-slideDown"
    >
      <nav class="flex flex-col space-y-4 px-6">
        <NuxtLink to="/pilates" class="mobile-nav-link" @click="closeMenu"
          >Pilates</NuxtLink
        >
        <NuxtLink
          to="/liberacao-miofascial"
          class="mobile-nav-link"
          @click="closeMenu"
          >Liberação Miofascial</NuxtLink
        >
        <NuxtLink to="/dicas" class="mobile-nav-link" @click="closeMenu"
          >Dicas</NuxtLink
        >
        <NuxtLink to="/quem-sou-eu" class="mobile-nav-link" @click="closeMenu"
          >Quem Sou Eu</NuxtLink
        >

        <NuxtLink to="/contato" class="mobile-nav-link" @click="closeMenu">
          Contato
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.nav-link {
  @apply text-gray-600 hover:text-teal-700 font-medium transition-colors;
}

/* Novo estilo para os links do menu móvel */
.mobile-nav-link {
  @apply text-gray-700 hover:text-teal-700 font-medium text-lg py-2;
}

/* Animação simples de slide */
@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-slideDown {
  animation: slideDown 0.3s ease-out;
}
</style>
