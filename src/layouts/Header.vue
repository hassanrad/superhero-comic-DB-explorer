<template>
  <div class="layout">
    <header class="header">
      <nav class="nav">
        <g-link to="/">Superhero List</g-link>
      </nav>
    </header>
    <slot/>
  </div>
</template>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  max-width: 1000px;
  margin: 0 auto;
  padding-left: 10px;
  padding-right: 20px;
}

.header {
  justify-content: space-between;
  align-items: center;
  height: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
