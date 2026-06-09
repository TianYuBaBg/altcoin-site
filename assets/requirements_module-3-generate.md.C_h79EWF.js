import{_ as a,o as i,c as n,a2 as t}from"./chunks/framework.COkhqeFn.js";const c=JSON.parse('{"title":"模块 3 — 生成（gen_candidates.py）","description":"","frontmatter":{},"headers":[],"relativePath":"requirements/module-3-generate.md","filePath":"requirements/module-3-generate.md"}'),e={name:"requirements/module-3-generate.md"};function l(p,s,h,d,o,k){return i(),n("div",null,[...s[0]||(s[0]=[t(`<h1 id="模块-3-—-生成-gen-candidates-py" tabindex="-1">模块 3 — 生成（gen_candidates.py） <a class="header-anchor" href="#模块-3-—-生成-gen-candidates-py" aria-label="Permalink to &quot;模块 3 — 生成（gen_candidates.py）&quot;">​</a></h1><h2 id="入口" tabindex="-1">入口 <a class="header-anchor" href="#入口" aria-label="Permalink to &quot;入口&quot;">​</a></h2><ul><li><code>--tid N</code>：单帖</li><li><code>--tid-list 1,2,3</code>：批量</li><li>无参数：全量扫描 pipeline_logs，找模块 2 已完成但模块 3 未完成的</li><li><code>auto_pipeline.py</code>：自动触发</li></ul><h2 id="流程" tabindex="-1">流程 <a class="header-anchor" href="#流程" aria-label="Permalink to &quot;流程&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>1. 解析 TID 列表</span></span>
<span class="line"><span>   - --tid / --tid-list 直接指定</span></span>
<span class="line"><span>   - 无参数 → 扫 pipeline_logs，找模块2 已完成但模块3 未完成的</span></span>
<span class="line"><span>   - 跳过校验：pipeline_log 状态 + 文件内 ## 项目简介 双重检查</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2. 读取原始数据 → load_post_from_raw_html(tid)</span></span>
<span class="line"><span>   - 优先读 data/raw/topic_{tid}.html</span></span>
<span class="line"><span>   - 文件不存在时自动从 Bitcointalk 回退抓取</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3. 更新流水线标记：模块2/4 → 模块3/4</span></span>
<span class="line"><span></span></span>
<span class="line"><span>4. 补充节（只追加缺失的，不覆盖已有）：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   项目简介 → 帖子内容片段 → 去 HTML/URL → Google 免费翻译 API 转中文</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   链接 → URL 自动分类</span></span>
<span class="line"><span>     - 类别：GitHub / Discord / Telegram / X / YouTube / Medium / Reddit</span></span>
<span class="line"><span>             文档 / 浏览器 / 矿池 / 白皮书 / 官网 / 其他</span></span>
<span class="line"><span>     - 过滤：SMF 模板域名、本地 IP、Uniswap 等第三方平台</span></span>
<span class="line"><span>     - 首个未知域名标为官网，其余标为其他</span></span>
<span class="line"><span>     - 附带 &lt;GitHubStats repo=&quot;...&quot; /&gt; 标签</span></span>
<span class="line"><span></span></span>
<span class="line"><span>5. 写入 _tid.md → 追加在文件末尾</span></span></code></pre></div><h2 id="tid-md-内容-m3-追加后" tabindex="-1"><code>_tid.md</code> 内容（M3 追加后） <a class="header-anchor" href="#tid-md-内容-m3-追加后" aria-label="Permalink to &quot;\`_tid.md\` 内容（M3 追加后）&quot;">​</a></h2><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;"># [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">ANN</span><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">] 标题原文</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">&gt; </span><span style="--shiki-light:#24292E;--shiki-light-font-style:italic;--shiki-dark:#E1E4E8;--shiki-dark-font-style:italic;">*中文副标题*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;"> **详情页:**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &lt;</span><span style="--shiki-light:#24292E;--shiki-light-text-decoration:underline;--shiki-dark:#E1E4E8;--shiki-dark-text-decoration:underline;">https://bitcointalk.org/index.php?topic={tid}.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;"> **发布者:**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> poster_name</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;"> **发布时间:**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 2026-06-08 12:34:56</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;"> **流水线:**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 模块3/4 · 已生成</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 项目简介</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">（中文翻译后的项目简介）</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 链接</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;"> **官网:**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> https://example.com</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;"> **GitHub:**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> https://github.com/user/repo</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;GitHubStats repo=&quot;user/repo&quot; /&gt;</span></span></code></pre></div><h2 id="注意" tabindex="-1">注意 <a class="header-anchor" href="#注意" aria-label="Permalink to &quot;注意&quot;">​</a></h2><ul><li>不写 ticker、中文名、状态、交易所字段（由后续模块处理）</li><li><code>_tid.md</code> 不存在则跳过并告警</li></ul>`,9)])])}const g=a(e,[["render",l]]);export{c as __pageData,g as default};
