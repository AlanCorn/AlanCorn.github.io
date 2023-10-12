import{_ as n,p as s,q as a,Y as p}from"./framework-e1bed10d.js";const e="/assets/Snipaste_2023-10-12_10-38-59-fbd94944.png",t="/assets/2023-10-12-10-37-48-916f46ac.png",c={},o=p('<h2 id="要求" tabindex="-1"><a class="header-anchor" href="#要求" aria-hidden="true">#</a> 要求</h2><ol><li>主题色更改</li><li>轨道宽度与文字对齐</li><li>去除滑块的蓝色投影</li></ol><p>原始效果：<br><img src="'+e+'" alt=""></p><p>最终效果：<br><img src="'+t+`" alt=""></p><h2 id="知识点" tabindex="-1"><a class="header-anchor" href="#知识点" aria-hidden="true">#</a> 知识点</h2><ol><li>Less</li><li>样式穿透<code>:deep</code></li><li>Ant-Design-Vue</li><li>伪元素 <code>::before</code>,<code>::after</code></li><li>z-index</li></ol><h2 id="最终代码" tabindex="-1"><a class="header-anchor" href="#最终代码" aria-hidden="true">#</a> 最终代码</h2><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token variable">@color-primary<span class="token punctuation">:</span></span> #8e1aff<span class="token punctuation">;</span>

<span class="token selector">.ant-slider</span> <span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0 8px<span class="token punctuation">;</span>    <span class="token comment">// 左右外间距8px，8px为滑块宽度的一半</span>

    <span class="token selector">:deep(.ant-slider)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 背景轨道</span>
        <span class="token selector">&amp;-rail</span> <span class="token punctuation">{</span>
            <span class="token property">border-radius</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
            <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.25<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 滑动条</span>
        <span class="token selector">&amp;-track</span> <span class="token punctuation">{</span>
            <span class="token property">border-radius</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token variable">@color-primary</span><span class="token punctuation">;</span>
            <span class="token selector">&amp;:hover</span> <span class="token punctuation">{</span>
                <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token variable">@color-primary</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 圆形滑块</span>
        <span class="token selector">&amp;-handle</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>      <span class="token comment">// 滑块宽度     </span>
            <span class="token property">height</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
            <span class="token property">margin-top</span><span class="token punctuation">:</span><span class="token operator">-</span>8px<span class="token punctuation">;</span>    <span class="token comment">// 垂直居中显示在轨道中间</span>
            <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
            <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token variable">@color-primary</span><span class="token punctuation">;</span>

            <span class="token comment">// 去除各状态下的阴影与外边框</span>
            <span class="token selector">&amp;:hover,
            &amp;.ant-slider-handle-dragging,
            &amp;.ant-slider-handle-click-focused,
            &amp;.ant-tooltip-open</span> <span class="token punctuation">{</span>
                <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token variable">@color-primary</span><span class="token punctuation">;</span>
                <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
                <span class="token property">box-shadow</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 创建伪元素，填补轨道前后的空缺，实现对齐</span>
    <span class="token selector">&amp;::after,
    &amp;::before</span> <span class="token punctuation">{</span>
        <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> #f3f3f5<span class="token punctuation">;</span>
        <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 定位</span>
    <span class="token selector">&amp;::before</span> <span class="token punctuation">{</span>
        <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token variable">@color-primary</span><span class="token punctuation">;</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span><span class="token operator">-</span>100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">border-radius</span><span class="token punctuation">:</span> 3px 0 0 3px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">&amp;::after</span> <span class="token punctuation">{</span>
        <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">border-radius</span><span class="token punctuation">:</span> 0 3px 3px 0<span class="token punctuation">;</span>
        <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.25<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">z-index</span><span class="token punctuation">:</span> <span class="token operator">-</span>1<span class="token punctuation">;</span>    <span class="token comment">// 使滑块能覆盖住 ::after 元素</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),i=[o];function l(u,r){return s(),a("div",null,i)}const k=n(c,[["render",l],["__file","ASliderAlign.html.vue"]]);export{k as default};
