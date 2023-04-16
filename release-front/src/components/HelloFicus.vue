<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Ficus is an open-source markdown editor<br>
      check out the
      <a href="https://github.com/Thysrael/Ficus" target="_blank" rel="noopener">Ficus code repository</a>.
    </p>
    <h3>Download Ficus</h3>
    <ul>
      <li><a href="https://github.com/Thysrael/Ficus/releases" target="_blank" rel="noopener">github-release</a></li>
      <li><a href="https://github.com/Thysrael/Ficus/releases" target="_blank" rel="noopener">google-drive</a></li>
      <li><a href="https://github.com/Thysrael/Ficus/releases" target="_blank" rel="noopener">aliyun-drive</a></li>
      <li><a href="https://github.com/Thysrael/Ficus/releases" target="_blank" rel="noopener">local-download</a></li>
    </ul>
    <h3>What is Ficus</h3>
    <ul>
      <p>
        it's up to you to design.
      </p>
    </ul>
    <h3>Why Ficus</h3>
    <ul>
      <p>
        it's up to you to design.
      </p>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
