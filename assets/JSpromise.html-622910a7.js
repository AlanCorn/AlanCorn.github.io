import{_ as t,p as e,q as p,s as n,R as s,t as o,Y as c,n as i}from"./framework-e1bed10d.js";const l="/assets/2022-04-30-16-05-29-dd1327ee.png",r="/assets/2022-05-02-13-29-48-27522c16.png",u="/assets/2022-05-02-13-30-36-90531ec1.png",d="/assets/2022-05-02-15-08-13-920f9776.png",k="/assets/2022-05-02-15-08-33-f4902b62.png",m={},h={href:"https://web.dev/promises/#whats-all-the-fuss-about",target:"_blank",rel:"noopener noreferrer"},v=c('<h2 id="异步的概念" tabindex="-1"><a class="header-anchor" href="#异步的概念" aria-hidden="true">#</a> <strong>异步的概念</strong></h2><p>异步（Asynchronous, async）是与同步（Synchronous, sync）相对的概念。 <img src="'+l+`" alt=""></p><h2 id="promise-对象与-api" tabindex="-1"><a class="header-anchor" href="#promise-对象与-api" aria-hidden="true">#</a> <strong>Promise 对象与 API</strong></h2><h3 id="_1-promise-的状态「promisestate」" tabindex="-1"><a class="header-anchor" href="#_1-promise-的状态「promisestate」" aria-hidden="true">#</a> <strong>1. Promise 的状态「PromiseState」</strong></h3><p>对象的状态不受外界影响。Promise 对象代表一个异步操作，有三种状态</p><ul><li><strong>pending</strong>: 初始状态，不是成功或失败状态。</li><li><strong>resolved/fulfilled</strong>: 意味着操作成功完成。</li><li><strong>rejected</strong>: 意味着操作失败。</li></ul><p>状态只会有以下两种变换，且一个promise对象只能改变一次</p><ol><li>pending 变为 resolved</li><li>pending 变为 rejected</li></ol><h3 id="_2-promise-对象的值「promiseresult」" tabindex="-1"><a class="header-anchor" href="#_2-promise-对象的值「promiseresult」" aria-hidden="true">#</a> <strong>2. Promise 对象的值「PromiseResult」</strong></h3><p>保存着异步任务成功/失败的结果(返回值)</p><h3 id="_3-创建-promise-对象" tabindex="-1"><a class="header-anchor" href="#_3-创建-promise-对象" aria-hidden="true">#</a> <strong>3. 创建 Promise 对象</strong></h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 创建promise对象</span>
<span class="token keyword">var</span> promise <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 异步处理</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token comment">/* 完成处理 */</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&quot;Stuff worked!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">// 调用resolve</span>
  <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token function">reject</span><span class="token punctuation">(</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token string">&quot;It broke&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// 调用reject</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-为-promise-对象添加回调" tabindex="-1"><a class="header-anchor" href="#_4-为-promise-对象添加回调" aria-hidden="true">#</a> <strong>4. 为 Promise 对象添加回调</strong></h3><p>对于已经实例化过的 promise 对象可以调用 promise.then() 方法，传递 resolve 和 reject 方法作为回调 promise.then() 是 promise 最为常用的方法。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>promise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>onFulfilled<span class="token punctuation">,</span> onRejected<span class="token punctuation">)</span>     
promise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>onFulfilled<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span>onRejected<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>promise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">result</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// resolve回调函数</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// reject回调函数</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-promised-resolve" tabindex="-1"><a class="header-anchor" href="#_5-promised-resolve" aria-hidden="true">#</a> <strong>5. Promised.resolve()</strong></h3><p>可以传入一个东西(参数)，返回一个promise对象</p><ol><li>如果传了一个值，将它封装为成功的promise对象</li><li>如果传入了一个promise对象，则根据这个promise对象是否成功，返回成功/失败的promise对象</li></ol><h3 id="_6-promise-reject" tabindex="-1"><a class="header-anchor" href="#_6-promise-reject" aria-hidden="true">#</a> <strong>6. Promise.reject()</strong></h3><p>可以传入一个东西(参数)，返回一个<strong>失败的</strong>promise对象</p><h3 id="_7-promise-all" tabindex="-1"><a class="header-anchor" href="#_7-promise-all" aria-hidden="true">#</a> <strong>7. Promise.all()</strong></h3><p>可以传入一个promise数组，返回他们的结果数组<br> 如果promise数组里的对象都成功，则为成功</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> p1 <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&quot;Success&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> p2 <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&quot;OK&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> p3 <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&quot;Yes&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> results <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">[</span>p1<span class="token punctuation">,</span>p2<span class="token punctuation">,</span>p3<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>例如：一些场景下上传图片需要一张一张传，但你需要同时确保所有图片都上传成功后再执行某项操作，这时候要想起来“Promise.all()”</p></blockquote><h3 id="_8-promise-race" tabindex="-1"><a class="header-anchor" href="#_8-promise-race" aria-hidden="true">#</a> <strong>8. Promise.race()</strong></h3><p>可以传入一个promise数组，返回最快完成的promise的结果</p><h2 id="promise-链式调用" tabindex="-1"><a class="header-anchor" href="#promise-链式调用" aria-hidden="true">#</a> <strong>Promise 链式调用</strong></h2><p>由于then的返回结果也是一个promise对象，因此可以链式调用.then 方法，串联多个任务</p><h3 id="异常穿透" tabindex="-1"><a class="header-anchor" href="#异常穿透" aria-hidden="true">#</a> <strong>异常穿透</strong></h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>promise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">value</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">111</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
  <span class="token comment">// if xxx</span>
  <span class="token keyword">throw</span> <span class="token string">&quot;error!!&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">value</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>  <span class="token comment">// 若之前的then里抛出了错误，则不会执行</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">222</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">value</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">333</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//error!!</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="中断-promise-链" tabindex="-1"><a class="header-anchor" href="#中断-promise-链" aria-hidden="true">#</a> <strong>中断 promise 链</strong></h3><p>一些情况下我们需要直接中断调用链，之后的 .then 与 .catch 都不执行，我们需要可以 return 一个pending状态的 promise对象，而 .then 与 .catch 是在状态改变之后才会调用的。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>promise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">value</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">111</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
  <span class="token comment">// if xxx</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">value</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>  <span class="token comment">// 若之前的then里return了pending状态的promise对象，则不会执行下面的代码</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">222</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">value</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">333</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="async-与-await" tabindex="-1"><a class="header-anchor" href="#async-与-await" aria-hidden="true">#</a> <strong>async 与 await</strong></h2><h3 id="async-函数" tabindex="-1"><a class="header-anchor" href="#async-函数" aria-hidden="true">#</a> <strong>async 函数</strong></h3><blockquote><p>这是来自MDN的对 async函数的说明：async函数是使用async关键字声明的函数。 async函数是AsyncFunction构造函数的实例， 并且其中允许使用await关键字。async和await关键字让我们可以用一种更简洁的方式写出基于Promise的异步行为，而无需刻意地链式调用promise。</p></blockquote><ol><li>函数的返回值为 promise 对象（thenable）</li><li>promise 对象的结果由 async 函数执行的返回值决定</li></ol><h3 id="await-表达式" tabindex="-1"><a class="header-anchor" href="#await-表达式" aria-hidden="true">#</a> <strong>await 表达式</strong></h3><ol><li>await 右侧的表达式一般为 promise 对象，但也可以是其他的值</li><li>如果表达式是 promise 对象，await 返回的是 promise 成功的值</li><li>如果表达式是其他值，直接将此值作为 await 的返回值</li></ol><p><strong>注意：</strong></p><ol><li>await 必须写在 async 函数中，但 async 中可以没有 await</li><li>如果 await 的 promise 失败了，就会抛出异常，需要通过try...catch...捕获处理</li></ol><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> <strong>示例</strong></h2><h3 id="promise-发送axios请求" tabindex="-1"><a class="header-anchor" href="#promise-发送axios请求" aria-hidden="true">#</a> promise 发送axios请求</h3><p><strong>代码：</strong><br><img src="`+r+'" alt=""><strong>浏览器终端输出：</strong><br><img src="'+u+'" alt=""></p><h3 id="async-与-await-发送axios请求" tabindex="-1"><a class="header-anchor" href="#async-与-await-发送axios请求" aria-hidden="true">#</a> async 与 await 发送axios请求</h3><p><strong>代码：</strong><br><img src="'+d+'" alt=""><strong>浏览器终端输出：</strong><br><img src="'+k+'" alt=""></p>',47);function g(b,f){const a=i("ExternalLinkIcon");return e(),p("div",null,[n("blockquote",null,[n("p",null,[s("参考："),n("a",h,[s("JavaScript Promises(Web.dev)"),o(a)])])]),v])}const x=t(m,[["render",g],["__file","JSpromise.html.vue"]]);export{x as default};
