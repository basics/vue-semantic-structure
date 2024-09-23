import{_ as s,c as i,a0 as e,o as a}from"./chunks/framework.C0vACUSd.js";const c=JSON.parse('{"title":"useContentContainer","description":"","frontmatter":{},"headers":[],"relativePath":"composables/use-content-container.md","filePath":"composables/use-content-container.md"}'),n={name:"composables/use-content-container.md"};function l(h,t,d,o,r,p){return a(),i("div",null,t[0]||(t[0]=[e(`<h1 id="usecontentcontainer" tabindex="-1">useContentContainer <a class="header-anchor" href="#usecontentcontainer" aria-label="Permalink to &quot;useContentContainer&quot;">​</a></h1><h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Optionally, the component <a href="./../components/content-container.html"><code>&lt;ContentContainer&gt;</code></a> can also be used as a wrapper.</p></div><p>The composable <code>useContentContainer()</code> is used to map the depth of the page structure.</p><p>With each call of <code>useContentContainer()</code> in nested components, the <code>level</code> of the element structure is increased by one <code>level</code>.</p><p>The appropriate HTML element for the page structure is determined based on the <code>level</code>. (e.g. <code>main</code>, <code>section</code>, <code>article</code>)</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">component</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> v-if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">currentTag</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">is</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">currentTag</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">slot</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> /</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">component</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">slot</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> v-else</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> /</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { useContentContainer } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vue-semantic-structure&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">currentTag</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> useContentContainer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="options" tabindex="-1">Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;Options&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Property</th><th>Type</th><th>Description</th><th>Default Value</th></tr></thead><tbody><tr><td><code>tag</code></td><td><code>String</code></td><td>Can be used to overwrite the tag.</td><td><code>undefined</code></td></tr><tr><td><code>contentTags</code></td><td><code>Array</code></td><td>Available tags for the content structure.</td><td><code>[&#39;section&#39;, &#39;article&#39;]</code></td></tr><tr><td><code>rootTags</code></td><td><code>Array</code></td><td>Available tags for the root structure.</td><td><code>[&#39;main&#39;, undefined]</code></td></tr><tr><td><code>level</code></td><td><code>Number</code></td><td>Can be used to overwrite the level.</td><td><code>undefined</code></td></tr></tbody></table><h2 id="return" tabindex="-1">Return <a class="header-anchor" href="#return" aria-label="Permalink to &quot;Return&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>currentTag</code></td><td><code>String</code></td><td>Get current html tag.</td></tr><tr><td><code>parentLevel</code></td><td><code>Number</code></td><td>Get parent level.</td></tr><tr><td><code>currentLevel</code></td><td><code>Number</code></td><td>Get current level.</td></tr></tbody></table>`,11)]))}const E=s(n,[["render",l]]);export{c as __pageData,E as default};