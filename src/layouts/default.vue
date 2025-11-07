<template>
  <div class="flex flex-col min-h-screen bg-gray-50">
    <LayoutHeader />
    <main class="flex-grow">
      <slot />
    </main>
    <LayoutFooter />
  </div>
</template>
