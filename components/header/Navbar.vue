<template>
  <nav class="navbar is-info">
    <div class="navbar-menu is-active">
      <div class="navbar-end">
        <router-link
          :to="{ name: 'cart' }"
          class="navbar-item">
          <span class="icon">
            <i class="fas fa-shopping-cart"/>
          </span>
        </router-link>
      </div>
    </div>
  </nav>
</template>
