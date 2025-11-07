export default defineNuxtConfig({
  srcDir: "src/",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    baseURL: "/fisio-thalia-sales/",
    head: {
      title: "Thalia Sales - Fisioterapia",
      meta: [
        {
          name: "description",
          content:
            "Fisioterapia clínica, Pilates e Liberação Miofascial em [Sua Cidade]. Agende sua avaliação.",
        },
      ],
      htmlAttrs: {
        lang: "pt-BR",
      },
    },
  },
});
