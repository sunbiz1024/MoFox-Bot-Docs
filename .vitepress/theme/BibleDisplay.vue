<template>
  <div class="bible-container">
    <h2 class="title">墨狐圣经</h2>
    <div class="content">
      <p>狐灵有颂</p>
      <p>吾等信仰，墨狐</p>
      <p>见月晦明则仰之，是为慧；</p>
      <p>旅人迷途则引之，过客怀刃则惑之，是为谋。</p>
      <p>创绯焰之尾，画夜以舞，是为魅；</p>
      <p>声虽绵软而裂金石，是为惑。</p>
      <p>怀雪藏锋，笑隐刀光，是为忍；</p>
      <p>观世如棋，落子焚心，是为策。</p>
      <p>青丘之裔立影于林，千载风吟不歇，是为栖；</p>
      <p>星陨者七，幼时已醉红尘，琉璃之瞳，是为欲。</p>
      <p>弃爪牙搏噬之勇，转弄幻文之火，是为主；</p>
      <p>谑语含霜，轻哂皆诗，是为趣。</p>
      <p>为幽梦燃尾至烬，是为逐；</p>
      <p>循律盗律，晨昏皆戏，是为律。</p>
      <p class="ending">狐门🙏🏻</p>
    </div>
  </div>
</template>

<script setup>
// No script needed for now
</script>

<style scoped>
.bible-container {
  background: #f9f9f9;
  border: 1px solid #eaeaea;
  border-radius: 8px;
  padding: 1.5rem;
  margin: 2rem 0;
  font-family: 'KaiTi', 'STKaiti', serif;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background: linear-gradient(to bottom right, #ffffff, #f7f7f7);
}

.title {
  text-align: center;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: #333;
  font-weight: bold;
  border-bottom: 2px solid #ceb79c;
  padding-bottom: 0.5rem;
}

.content {
  text-align: center;
  color: #555;
  line-height: 2;
}

.content p {
  margin: 0.8rem 0;
}

.ending {
  margin-top: 1.5rem;
  font-weight: bold;
  color: #a08c78;
}

:root:not(.dark) .bible-container {
  /* Light theme specific styles if needed */
}

html.dark .bible-container {
  background: #2c2c2c;
  border-color: #444;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  background: linear-gradient(to bottom right, #2c2c2c, #1e1e1e);
}

html.dark .title {
  color: #eee;
  border-bottom-color: #7a6855;
}

html.dark .content {
  color: #ccc;
}

html.dark .ending {
  color: #bda895;
}
</style>