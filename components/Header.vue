<template>
  <header>
    <Hero/>
    <Navbar/>
  </header>
</template>

<script>
import Hero from './header/Hero'
import Navbar from './header/Navbar'

export default {
  components: {
    Hero,
    Navbar
  }
}
</script>
