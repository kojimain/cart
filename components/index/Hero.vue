<template>
  <div class="hero is-info">
    <div class="hero-body has-text-centered">
      <h1 class="title">
        <router-link
          :to="{ name: 'index' }">
          Cart
        </router-link>
      </h1>
      <p class="subtitle">
        ショッピングサイトを模した練習サイトです。<br>
        カートに追加した商品は丘の上から落とすことができますが、特に意味はありません。
      </p>
    </div>
  </div>
</template>
