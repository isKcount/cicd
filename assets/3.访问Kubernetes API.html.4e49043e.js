import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as p,d as n,f as s,b as e,e as i,r as c}from"./app.4cf02e25.js";const l={},u=n("h1",{id:"\u57FA\u4E8Eclient-go\u8BBF\u95EEkubernetes-api",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u57FA\u4E8Eclient-go\u8BBF\u95EEkubernetes-api","aria-hidden":"true"},"#"),s(" \u57FA\u4E8EClient-go\u8BBF\u95EEKubernetes API")],-1),r=n("h2",{id:"client-go\u7684\u73AF\u5883",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#client-go\u7684\u73AF\u5883","aria-hidden":"true"},"#"),s(" client-go\u7684\u73AF\u5883")],-1),d=n("p",null,"\u53EF\u4EE5\u4F7F\u7528Windows\u64CD\u4F5C\u7CFB\u7EDF\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528Linux\u7684\u64CD\u4F5C\u7CFB\u7EDF\u3002\u9700\u8981\u5B89\u88C5Go\u8BED\u8A00\u7684\u73AF\u5883\uFF0C\u914D\u7F6E\u53D8\u91CF\u73AF\u5883\u3002 \u6839\u636E\u4F7F\u7528\u7684Kubernetes\u96C6\u7FA4\u7248\u672C\u4E0B\u8F7D\u76F8\u5BF9\u4E8E\u7684client-go\u7684\u5305\u3002",-1),k={href:"https://golang.org/dl/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://github.com/kubernetes/client-go",target:"_blank",rel:"noopener noreferrer"},m=i(`<h3 id="linux\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#linux\u73AF\u5883" aria-hidden="true">#</a> Linux\u73AF\u5883\uFF1A</h3><p>1.\u4E0B\u8F7D\u5B89\u88C5\u5305\uFF0C\u89E3\u538B\u81F3 <code>usr/local</code> \u76EE\u5F55\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@k8s-master ~<span class="token punctuation">]</span><span class="token comment"># wget https://go.dev/dl/go1.18.1.linux-amd64.tar.gz</span>
<span class="token punctuation">[</span>root@k8s-master ~<span class="token punctuation">]</span><span class="token comment"># tar zxvf go1.18.1.linux-amd64.tar.gz -C /usr/local/ </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>2.\u914D\u7F6E\u53D8\u91CF</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@k8s-master ~<span class="token punctuation">]</span><span class="token comment"># vim /etc/profile</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">GOROOT</span><span class="token operator">=</span>/usr/local/go
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$GOROOT</span>/bin
<span class="token string">&quot;/etc/profile&quot;</span> 78L, 1879C written                                                                                                   
<span class="token punctuation">[</span>root@k8s-master ~<span class="token punctuation">]</span><span class="token comment"># source /etc/profile</span>
<span class="token punctuation">[</span>root@k8s-master ~<span class="token punctuation">]</span><span class="token comment"># go version </span>
go version go1.18.1 linux/amd64
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="windows\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#windows\u73AF\u5883" aria-hidden="true">#</a> Windows\u73AF\u5883\uFF1A</h3><p>\u8FD9\u91CC\u4F7F\u7528Goland\u7684IDE\u3002</p><ol><li><code>go get k8s.io/client@v0.23.6</code></li><li><code>go mod init</code></li><li><code>go mod tidy</code></li></ol><blockquote><p>\u6CE8\u610F\uFF1A \u5982\u679C\u6709\u65F6\u5019\u6CA1\u6709\u5BFC\u5165\u5305\u9700\u8981\u4F7F\u7528\u8BE5\u6A21\u5757\u7684\u65F6\u5019\uFF0C\u4F7F\u7528go mod tidy \u518D\u4E0B\u8F7D\u5305\u3002 \u4E5F\u53EF\u4EE5\u76F4\u63A5\u62C9\u53D6github\u7684client-go\u5230\u672C\u5730\uFF0C\u5C31\u4E0D\u9700\u8981\u4E0B\u8F7D\u5305\u3002</p></blockquote><p><img src="https://pic1.xuehuaimg.com/proxy/raw.githubusercontent.com/2756864799zhang/image/main/img/202204262202798.png" alt="image-20220426101701560" loading="lazy"></p><h2 id="\u8C03\u7528-kubernetes-api" tabindex="-1"><a class="header-anchor" href="#\u8C03\u7528-kubernetes-api" aria-hidden="true">#</a> \u8C03\u7528 Kubernetes API</h2><h3 id="\u67E5\u770Bk8s\u8D44\u6E90" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770Bk8s\u8D44\u6E90" aria-hidden="true">#</a> \u67E5\u770Bk8s\u8D44\u6E90</h3><p>\u5F53\u524D\u7684default\u547D\u540D\u7A7A\u95F4\u4E0B\u9762\u6709\u4E00\u4E2Atest\u7684pod\u5728\u8FD0\u884C\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@k8s-master ~<span class="token punctuation">]</span><span class="token comment"># kubectl get pods </span>
NAME   READY   STATUS    RESTARTS   AGE
<span class="token builtin class-name">test</span>   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          13h
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4F7F\u7528restclient" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528restclient" aria-hidden="true">#</a> \u4F7F\u7528RESTclient</h3><p>\u8FD9\u91CC\u4F7F\u7528restclient\u7684\u63A5\u53E3\uFF0C\u8C03\u7528Kubernetes\u7684\u63A5\u53E3\u6D4B\u8BD5\u67E5\u770BPod\u8D44\u6E90\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;context&quot;</span>
	v1 <span class="token string">&quot;k8s.io/api/core/v1&quot;</span>
	<span class="token string">&quot;k8s.io/client-go/kubernetes/scheme&quot;</span>
	<span class="token string">&quot;k8s.io/client-go/rest&quot;</span>
	<span class="token string">&quot;k8s.io/client-go/tools/clientcmd&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">// \u67E5\u770BPod\u8D44\u6E90</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// config \u8BFB\u53D6config\u7684\u914D\u7F6E\u6587\u4EF6\uFF0C\u8FD9\u91CC\u4F7F\u7528\u7684RecommendedHomeFile \u9ED8\u8BA4\u8BFB\u53D6\u6587\u4EF6$HOME/.kube/config</span>
    <span class="token comment">// \u5982\u679C\u6CA1\u6709\u5F97\u5230\u4FE1\u606F\u5C31\u8FD4\u56DE err</span>
	config<span class="token punctuation">,</span> err <span class="token operator">:=</span> clientcmd<span class="token punctuation">.</span><span class="token function">BuildConfigFromFlags</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> clientcmd<span class="token punctuation">.</span>RecommendedHomeFile<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token function">panic</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
    <span class="token comment">// \u8FD9\u91CC\u914D\u7F6Econfig\u5B9A\u4E49GroupVersion</span>
    <span class="token comment">// \u8FD9\u91CC\u914D\u7F6Econfig\u8FD8\u9700\u8981\u5B9A\u4E49API\u7684\u8DEF\u5F84 </span>
	config<span class="token punctuation">.</span>GroupVersion <span class="token operator">=</span> <span class="token operator">&amp;</span>v1<span class="token punctuation">.</span>SchemeGroupVersion
	config<span class="token punctuation">.</span>NegotiatedSerializer <span class="token operator">=</span> scheme<span class="token punctuation">.</span>Codecs
	config<span class="token punctuation">.</span>APIPath <span class="token operator">=</span> <span class="token string">&quot;/api&quot;</span>

	<span class="token comment">// client \u5F15\u7528\u4E00\u4E2A\u5BA2\u6237\u7AEF\u9700\u8981\u4F7F\u7528config\u6587\u4EF6 \u5047\u5982config\u662F\u7A7A\u7684\u5C31\u4F1A\u8FD4\u56DEerr     </span>
	restClient<span class="token punctuation">,</span> err <span class="token operator">:=</span> rest<span class="token punctuation">.</span><span class="token function">RESTClientFor</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token function">panic</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

    <span class="token comment">// get data  \u8FD9\u91CC\u9700\u8981\u5C06pod\u5B9A\u4E49\u5230v1.Pod{}\u7C7B\u578B </span>
	pod <span class="token operator">:=</span> v1<span class="token punctuation">.</span>Pod<span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token comment">// err \u6B64\u5904\u662F\u7B49\u4E8E\u6309\u7167\u8BE5\u6761\u4EF6\u53BB\u5BFB\u627E\u4ED6\u7684\u8D44\u6E90\uFF0C\u5982\u679C\u6709\u8FD9\u4E2A\u8D44\u6E90\u5C31\u4F1A\u4F20\u8FDBpod\u8FD9\u4E2A\u53D8\u91CF\u4E2D\uFF0C\u5E76\u4E14\u914D\u7F6E\u9519\u8BEF\u5224\u65AD</span>
	err <span class="token operator">=</span> restClient<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Namespace</span><span class="token punctuation">(</span><span class="token string">&quot;default&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Resource</span><span class="token punctuation">(</span><span class="token string">&quot;pods&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Name</span><span class="token punctuation">(</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Do</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">TODO</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Into</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>pod<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token function">println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		<span class="token function">println</span><span class="token punctuation">(</span>pod<span class="token punctuation">.</span>Name<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD4\u56DE\u7684\u7ED3\u679C\u4E3A\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">test</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u4F7F\u7528clientset" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528clientset" aria-hidden="true">#</a> \u4F7F\u7528Clientset</h3><p>\u4F7F\u7528clientset\u7684\u65B9\u5F0F\u8BBF\u95EEKubernetes\u7684API\u63A5\u53E3\uFF0C\u8FD9\u91CC\u76F8\u5F53\u4E8E \u4F7F\u7528<code>clienttest.CoreV1()</code>\u8BE5\u51FD\u6570\u3002 \u91CD\u65B0\u5B9A\u4E49\u4E00\u4E2A\u65B0\u7684\u53D8\u91CF\uFF0C\u7136\u540E\u4F7F\u7528\u8BE5\u63A5\u53E3\u7684\u8D44\u6E90\u3002</p><blockquote><p>\u6CE8\u610F\uFF1A \u8FD8\u662F\u4E00\u6837\uFF0C\u8FD0\u884C\u62A5\u9519\u5C31\u5728\u5F53\u524D\u7684\u76EE\u5F55 <code>go mod tidy</code></p></blockquote><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;context&quot;</span>
	v1 <span class="token string">&quot;k8s.io/apimachinery/pkg/apis/meta/v1&quot;</span>
	<span class="token string">&quot;k8s.io/client-go/kubernetes&quot;</span>
	<span class="token string">&quot;k8s.io/client-go/tools/clientcmd&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u8FD9\u91CC\u662F\u914D\u7F6E\u8FDE\u63A5\u6587\u4EF6 config</span>
	config<span class="token punctuation">,</span> err <span class="token operator">:=</span> clientcmd<span class="token punctuation">.</span><span class="token function">BuildConfigFromFlags</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> clientcmd<span class="token punctuation">.</span>RecommendedHomeFile<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token function">panic</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
    <span class="token comment">// \u8FD9\u91CC\u662F\u914D\u7F6E\u5F15\u7528config\u6587\u4EF6 </span>
	clienttest<span class="token punctuation">,</span> err <span class="token operator">:=</span> kubernetes<span class="token punctuation">.</span><span class="token function">NewForConfig</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token function">panic</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
    <span class="token comment">// \u56E0\u4E3Apod\u7684\u8D44\u6E90\u662F\u5728CoreV1\u91CC\u9762\uFF0CPod\u63A7\u5236\u5668\u7684\u8D44\u6E90\u662F\u5728AppsV1\u7684\u8D44\u6E90\u91CC\u9762\u3002 </span>
	corev1 <span class="token operator">:=</span> clienttest<span class="token punctuation">.</span><span class="token function">CoreV1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	pod<span class="token punctuation">,</span> err <span class="token operator">:=</span> corev1<span class="token punctuation">.</span><span class="token function">Pods</span><span class="token punctuation">(</span><span class="token string">&quot;default&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">TODO</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;test&quot;</span><span class="token punctuation">,</span> v1<span class="token punctuation">.</span>GetOptions<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token function">println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		<span class="token function">println</span><span class="token punctuation">(</span>pod<span class="token punctuation">.</span>Name<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD4\u56DE\u7684\u7ED3\u679C\u4E3A\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">test</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,25);function b(g,h){const a=c("ExternalLinkIcon");return o(),p("div",null,[u,r,d,n("p",null,[n("a",k,[s("\u{1F636}\u200D\u{1F32B}\uFE0FGolang\u5B98\u7F51\u4E0B\u8F7D\u5730\u5740\u{1F636}\u200D\u{1F32B}\uFE0F"),e(a)])]),n("p",null,[n("a",v,[s("\u{1F608}Client-go\u9879\u76EE\u5730\u5740\u{1F608}"),e(a)])]),m])}const x=t(l,[["render",b],["__file","3.\u8BBF\u95EEKubernetes API.html.vue"]]);export{x as default};
