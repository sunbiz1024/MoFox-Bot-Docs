<script setup>
import { ref, onMounted, computed } from 'vue';

const COUNTDOWN_MINUTES = 5;
const STORAGE_KEY = 'has_passed_wisdom_quiz';
const QUESTIONS_TO_SHOW = 5;
const MIN_CORRECT_ANSWERS = 3;

const showModal = ref(false);
const timeLeft = ref(COUNTDOWN_MINUTES * 60);
const timer = ref(null);
const quizStarted = ref(false);
const userAnswers = ref({});
const quizResult = ref(null); // null, 'passed', 'failed'
const displayedQuestions = ref([]);

const allQuestions = [
    {
        question: '当你遇到一个技术问题时，第一步应该做什么？',
        options: [
            '马上找一个技术交流群，把问题截图发出去。',
            '尝试自己查阅官方文档、搜索网络和社区，看看是否已有解决方案。',
            '直接向项目开发者或社区专家发送私信求助。',
            '在论坛上发一个标题为“紧急求助！程序出错了！”的帖子。',
        ],
        answer: 1,
    },
    {
        question: '以下哪种提问标题是最高效、最值得推荐的？',
        options: [
            '新手求助，有个问题搞不懂',
            '我的代码崩溃了，谁能帮帮我？',
            '[MoFox_Bot] 在 Ubuntu 22.04 环境下，加载插件时出现 `ModuleNotFoundError`',
            '救命啊！这个 bug 怎么修？',
        ],
        answer: 2,
    },
    {
        question: '在描述问题时，为了让别人能最快地帮助你，最关键的信息是什么？',
        options: [
            '你为了解决这个问题，熬了多久的夜。',
            '提供一个能让别人稳定复现问题的“最小可复现示例 (MRE)”和详细的环境信息。',
            '你的电脑配置和外设型号。',
            '把几十行代码和错误信息用手机拍下来发给对方。',
        ],
        answer: 1,
    },
    {
        question: '如果你在社区论坛发帖求助后，有人回复了你 "RTFM"，你应该怎么理解？',
        options: [
            '他在骂你，你应该立即反击。',
            '他在炫耀自己知道一些你不知道的缩写。',
            '他认为你的问题过于复杂，无法回答。',
            '他在提示你，这个问题的答案很可能就在官方文档里，你应该去仔细阅读。',
        ],
        answer: 3,
    },
    {
        question: '问题解决后，你应该怎么做才是对社区最有益的？',
        options: [
            '悄悄地删除你的提问帖子，假装无事发生。',
            '在帖子下回复“已解决”，然后关闭帖子。',
            '在原帖中详细分享你的解决方案，并对帮助过你的人表示感谢。',
            '到各个群里炫耀一下自己解决了问题。',
        ],
        answer: 2,
    },
    {
        question: '选择提问地点时，应该优先考虑哪���？',
        options: [
            '给项目维护者发私信，这样能最快得到回复。',
            '项目的官方论坛、GitHub Issues 等公开渠道。',
            '在技术文章的评论区留言。',
            '在不相关的技术群里重复提问。',
        ],
        answer: 1,
    },
    {
        question: '当你看不懂别人给出的答案时，正确的做法是什么？',
        options: [
            '立刻回复“没看懂，能再说一遍吗？”',
            '放弃这个问题，去问别人。',
            '先自己去搜索答案中提到的新概念，经过努力仍不理解时，再提出更具体的问题。',
            '认为对方的回答没有用。',
        ],
        answer: 2,
    },
    {
        question: '为什么不推荐使用截图来展示代码或错误信息？',
        options: [
            '因为截图文件太大，浪费流量。',
            '因为截图中的文本无法被复制和搜索，不方便他人调试。',
            '因为截图看起来不专业。',
            '没有规定，截图和文本都可以。',
        ],
        answer: 1,
    },
    {
        question: '在提问时，声明自己“已经尝试过搜索”有什么好处？',
        options: [
            '显得自己很厉害。',
            '没什么用，只是客套话。',
            '可以把自己和那些懒惰的“伸手党”区分开，赢得专家的尊重。',
            '这样别人就不会让你去搜索了。',
        ],
        answer: 2,
    },
    {
        question: '一个好的“可复现的最小示例 (MRE)”应该具备什么特点？',
        options: [
            '包含整个项目的所有代码，信息越全越好。',
            '只是一段无法运行的代码片段。',
            '一段可以独立运行、并稳定复现问题的最简化代码。',
            '一个指向项目代码仓库的链接。',
        ],
        answer: 2,
    },
];

const formattedTime = computed(() => {
  const minutes = Math.floor(timeLeft.value / 60);
  const seconds = timeLeft.value % 60;
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
});

// Fisher-Yates shuffle algorithm
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const startQuiz = () => {
  const shuffled = shuffleArray([...allQuestions]);
  displayedQuestions.value = shuffled.slice(0, QUESTIONS_TO_SHOW);
  quizStarted.value = true;
};

const startTimer = () => {
  timer.value = setInterval(() => {
    if (timeLeft.value > 0) {
      timeLeft.value--;
    } else {
      clearInterval(timer.value);
      if (!quizStarted.value) {
        startQuiz();
      }
    }
  }, 1000);
};

const submitQuiz = () => {
  let score = 0;
  displayedQuestions.value.forEach((q, index) => {
    const userAnswer = userAnswers.value[index];
    if (userAnswer === q.answer) {
      score++;
    }
  });

  if (score >= MIN_CORRECT_ANSWERS) {
    quizResult.value = 'passed';
    localStorage.setItem(STORAGE_KEY, 'true');
    setTimeout(() => {
      showModal.value = false;
    }, 2000);
  } else {
    quizResult.value = 'failed';
  }
};

onMounted(() => {
  const hasPassed = localStorage.getItem(STORAGE_KEY);
  if (!hasPassed) {
    showModal.value = true;
    startTimer();
  }
});
</script>

<template>
  <div v-if="showModal" class="force-read-overlay">
    <div class="force-read-modal">
      <div class="header">
        <h1>提问的智慧</h1>
        <div class="timer" v-if="!quizStarted">
          为了营造良好的社区氛围，请仔细阅读，倒计时: {{ formattedTime }}
        </div>
        <div class="quiz-title" v-else>请完成以下测试题以继续</div>
      </div>

      <div class="content vp-doc" v-if="!quizStarted">
        <h2 id="声明">声明</h2>
        <p>本文档不直接解决你的具体问题，但它会告诉你如何高效地获得答案。一言以蔽之：授人以鱼不如授人以渔。</p>
        <h2 id="为什么要学习提问？">为什么要学习提问？</h2>
        <p>一个糟糕的提问，不仅会浪费你自己的时间，更会消耗社区的耐心和专家的精力。反之，一个优秀的提问，不仅能让你迅速解决问题，还能激发有价值的讨论，为社区知识库添砖加瓦，甚至让你赢得专家的尊重和友谊。</p>
        <h2 id="在提问之前：做好你的功课">在提问之前：做好你的功课</h2>
        <p>在你把问题抛给社区之前，请务必完成以下步骤。</p>
        <ol>
        <li><strong>尝试在官方文档中寻找答案</strong>。</li>
        <li><strong>尝试在社区或论坛中搜索</strong>。</li>
        <li><strong>尝试用搜索引擎搜索</strong>：直接搜索你遇到的<strong>完整错误信息</strong>通常有奇效。</li>
        <li><strong>尝试阅读常见问题（FAQ）</strong>。</li>
        <li><strong>尝试自己动手检查和试验</strong>。</li>
        <li><strong>尝试询问身边的朋友或同事</strong>。</li>
        </ol>
        <p>当你提问时，<strong>一定要表明你已经为此付出了努力</strong>。</p>
        <h2 id="选择正确的提问地点">选择正确的提问地点</h2>
        <ul>
        <li><strong>官方渠道优先</strong>：项目的官方论坛、邮件列表、GitHub Issues 是最直接、最权威的地方。</li>
        <li><strong>专业问答社区</strong>：Stack Overflow 等社区有严格的提问规范。</li>
        <li><strong>避免私聊</strong>：除非对方明确表示可以，否则不要轻易私聊专家提问。</li>
        </ul>
        <h2 id="提问的艺术：如何组织你的问题">提问的艺术：如何组织你的问题</h2>
        <h3 id="1-使用有意义、精确的标题">1. 使用有意义、精确的标题</h3>
        <p><strong>好的标题</strong> ✅: <code>[Python][Requests] 在使用代理发送 HTTPS 请求时，出现 SSLError</code></p>
        <p><strong>糟糕的标题</strong> ❌: <code>救命啊！我的程序崩溃了！</code></p>
        <h3 id="2-清晰、详尽地描述问题">2. 清晰、详尽地描述问题</h3>
        <p>你需要提供一个能让别人<strong>复现（Reproduce）</strong>你问题的最小环境。</p>
        <ul>
        <li><strong>环境信息</strong>：操作系统、软件/库/框架的版本。</li>
        <li><strong>可复现的最小示例 (MRE)</strong>：提供一小段可以独立运行并稳定复现问题的代码。</li>
        <li><strong>不要发送代码截图！</strong> 请直接粘贴文本。</li>
        <li><strong>你已尝试过的解决方法</strong>：列出你做过的尝试及其结果。</li>
        </ul>
        <h2 id="提问之后：保持耐心和礼貌">提问之后：保持耐心和礼貌</h2>
        <ol>
        <li><strong>耐心等待</strong>：回答者都是志愿者。</li>
        <li><strong>积极跟进</strong>：如果有人向你索要更多信息，请尽快提供。</li>
        <li><strong>分享解决方案</strong>：如果你自己解决了问题，请回到你提问的地方，分享你的解决方案。</li>
        <li><strong>表示感谢</strong>：对所有帮助过你的人表示感谢。</li>
        </ol>
        <h2 id="如何解读答案">如何解读答案</h2>
        <p>如果你收到了 “RTFM” (Read The Fucking Manual) 的回复，不要感到被冒犯。这通常意味着答案就在官方文档或简单的搜索结果中。</p>
        <p>如果答案看不懂，你应该像对待最初的问题一样，去研究这个答案。搜索答案中提到的新术语、函数或概念。当你付出了努力但仍然有疑问时，再进行追问。</p>
      </div>

      <div class="quiz-container" v-else>
        <div v-for="(q, index) in displayedQuestions" :key="index" class="question-block">
          <p class="question-text">{{ index + 1 }}. {{ q.question }}</p>
          <div v-for="(option, optIndex) in q.options" :key="optIndex" class="option">
            <label>
              <input type="radio" :name="'question-' + index" :value="optIndex" v-model="userAnswers[index]" />
              {{ option }}
            </label>
          </div>
        </div>
      </div>

      <div class="footer">
        <button @click="submitQuiz" v-if="quizStarted" :disabled="Object.keys(userAnswers).length < QUESTIONS_TO_SHOW">
          提交答案
        </button>
        <div v-if="quizResult === 'passed'" class="result-message success">
          恭喜你，通过测试！欢迎来到社区。
        </div>
        <div v-if="quizResult === 'failed'" class="result-message error">
          很遗憾，回答有误。请刷新页面，重新学习并参加测试。
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.force-read-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  backdrop-filter: blur(5px);
}

.force-read-modal {
  background-color: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  padding: 2rem;
  border-radius: 8px;
  width: 90%;
  max-width: 800px;
  height: 90vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 25px rgba(0,0,0,0.2);
}

.header {
  border-bottom: 1px solid var(--vp-c-divider);
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  text-align: center;
}

.header h1 {
  margin: 0;
  font-size: 1.8rem;
}

.timer, .quiz-title {
  margin-top: 0.5rem;
  font-size: 1.1rem;
  font-weight: bold;
  color: var(--vp-c-brand);
}

.content {
  flex-grow: 1;
  overflow-y: auto;
  padding-right: 1.5rem;
}

.quiz-container {
  flex-grow: 1;
  overflow-y: auto;
  padding-right: 1.5rem;
}

.question-block {
  margin-bottom: 1.5rem;
}

.question-text {
  font-weight: bold;
  margin-bottom: 0.8rem;
}

.option {
  margin-bottom: 0.5rem;
}

.option label {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.option input {
  margin-right: 0.8rem;
}

.footer {
  border-top: 1px solid var(--vp-c-divider);
  padding-top: 1rem;
  margin-top: 1rem;
  text-align: center;
}

button {
  background-color: var(--vp-c-brand);
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:disabled {
  background-color: var(--vp-c-gray-light-1);
  cursor: not-allowed;
}

button:hover:not(:disabled) {
  background-color: var(--vp-c-brand-dark);
}

.result-message {
  margin-top: 1rem;
  font-weight: bold;
  font-size: 1.1rem;
}

.success {
  color: var(--vp-c-green);
}

.error {
  color: var(--vp-c-red);
}
</style>