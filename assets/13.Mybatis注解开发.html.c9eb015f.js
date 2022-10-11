import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,e as t}from"./app.4cf02e25.js";const e={},p=t(`<h1 id="mybatis\u6CE8\u89E3\u5F00\u53D1" tabindex="-1"><a class="header-anchor" href="#mybatis\u6CE8\u89E3\u5F00\u53D1" aria-hidden="true">#</a> Mybatis\u6CE8\u89E3\u5F00\u53D1</h1><h2 id="_1-mybatis\u7684\u6CE8\u89E3\u5F00\u53D1" tabindex="-1"><a class="header-anchor" href="#_1-mybatis\u7684\u6CE8\u89E3\u5F00\u53D1" aria-hidden="true">#</a> 1.Mybatis\u7684\u6CE8\u89E3\u5F00\u53D1</h2><h3 id="_1-1mybatis\u5E38\u7528\u6CE8\u89E3" tabindex="-1"><a class="header-anchor" href="#_1-1mybatis\u5E38\u7528\u6CE8\u89E3" aria-hidden="true">#</a> 1.1Mybatis\u5E38\u7528\u6CE8\u89E3</h3><p>\u8FD9\u51E0\u5E74\u6765\u6CE8\u89E3\u5F00\u53D1\u8D8A\u6765\u8D8A\u6D41\u884C\uFF0CMybatis\u4E5F\u53EF\u4EE5\u4F7F\u7528\u6CE8\u89E3\u5F00\u53D1\u65B9\u5F0F\uFF0C\u8FD9\u6837\u6211\u4EEC\u5C31\u53EF\u4EE5\u51CF\u5C11\u7F16\u5199Mapper</p><p>\u6620\u5C04\u6587\u4EF6\u4E86\u3002\u6211\u4EEC\u5148\u56F4\u7ED5\u4E00\u4E9B\u57FA\u672C\u7684CRUD\u6765\u5B66\u4E60\uFF0C\u518D\u5B66\u4E60\u590D\u6742\u6620\u5C04\u591A\u8868\u64CD\u4F5C\u3002</p><p><code>@Insert</code>\uFF1A\u5B9E\u73B0\u65B0\u589E</p><p><code>@Update</code>\uFF1A\u5B9E\u73B0\u66F4\u65B0</p><p><code>@Delete</code>\uFF1A\u5B9E\u73B0\u5220\u9664</p><p><code>@Select</code>\uFF1A\u5B9E\u73B0\u67E5\u8BE2</p><p><code>@Result</code>\uFF1A\u5B9E\u73B0\u7ED3\u679C\u96C6\u5C01\u88C5</p><p><code>@Results</code>\uFF1A\u53EF\u4EE5\u4E0E@Result \u4E00\u8D77\u4F7F\u7528\uFF0C\u5C01\u88C5\u591A\u4E2A\u7ED3\u679C\u96C6</p><p><code>@One</code>\uFF1A\u5B9E\u73B0\u4E00\u5BF9\u4E00\u7ED3\u679C\u96C6\u5C01\u88C5</p><p><code>@Many</code>\uFF1A\u5B9E\u73B0\u4E00\u5BF9\u591A\u7ED3\u679C\u96C6\u5C01\u88C5</p><h3 id="_1-2-mybatis\u7684\u589E\u5220\u6539\u67E5" tabindex="-1"><a class="header-anchor" href="#_1-2-mybatis\u7684\u589E\u5220\u6539\u67E5" aria-hidden="true">#</a> 1.2 Mybatis\u7684\u589E\u5220\u6539\u67E5</h3><p>1.\u521B\u5EFA\u63A5\u53E3\u4F7F\u7528\u6CE8\u89E3\u7684\u65B9\u5F0F\u7F16\u5199Sql\u8BED\u53E5</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">UserMapper</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u6CE8\u89E3\u7684\u65B9\u5F0F\u5BF9\u6570\u636E\u5E93CURD\u64CD\u4F5C</span>
    <span class="token comment">/*
        private Integer id;
        private String username;
        private String password;
        private Date birthday;
    */</span>

    <span class="token annotation punctuation">@Select</span><span class="token punctuation">(</span><span class="token string">&quot;select * from user where id = #{id}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">User</span> <span class="token function">select</span><span class="token punctuation">(</span><span class="token keyword">int</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Update</span><span class="token punctuation">(</span><span class="token string">&quot;update user set username = &#39;zhujietest&#39; where id = 3&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token keyword">int</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Delete</span><span class="token punctuation">(</span><span class="token string">&quot;delete from user where id = #{id}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">delete</span><span class="token punctuation">(</span><span class="token keyword">int</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Insert</span><span class="token punctuation">(</span><span class="token string">&quot;insert into user values(#{id},#{username},#{password},#{birthday})&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">insert</span><span class="token punctuation">(</span><span class="token class-name">User</span> user<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Select</span><span class="token punctuation">(</span><span class="token string">&quot;select * from user&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> <span class="token function">selectAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.\u4FEE\u6539Mybatis\u7684\u6838\u5FC3\u914D\u7F6E\u6587\u4EF6\uFF0C\u6211\u4EEC\u4F7F\u7528\u4E86\u6CE8\u89E3\u66FF\u4EE3\u7684\u6620\u5C04\u6587\u4EF6\uFF0C\u6240\u4EE5\u6211\u4EEC\u53EA\u9700\u8981\u52A0\u8F7D\u4F7F\u7528\u4E86\u6CE8\u89E3\u7684Mapper\u63A5\u53E3\u5373\u53EF</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>	<span class="token comment">&lt;!--\u626B\u63CF\u4F7F\u7528\u6CE8\u89E3\u7684\u7C7B\u6240\u5728\u7684\u5305--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mappers</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>package</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.example.dao<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mappers</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.\u521B\u5EFA\u6D4B\u8BD5\u7C7B\u6D4B\u8BD5</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>	<span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test8</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span><span class="token punctuation">{</span>
        <span class="token class-name">SqlSession</span> sqlSession <span class="token operator">=</span> <span class="token function">getSqlSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// \u4F7F\u7528\u4E86\u65B9\u6CD5\u63D0\u53D6</span>
        <span class="token class-name">UserMapper</span> userMapper <span class="token operator">=</span> sqlSession<span class="token punctuation">.</span><span class="token function">getMapper</span><span class="token punctuation">(</span><span class="token class-name">UserMapper</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">// \u521B\u5EFA\u4E00\u4E2AUser\u5BF9\u8C61  </span>
        <span class="token class-name">User</span> user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        user<span class="token punctuation">.</span><span class="token function">setBirthday</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        user<span class="token punctuation">.</span><span class="token function">setUsername</span><span class="token punctuation">(</span><span class="token string">&quot;test9&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        user<span class="token punctuation">.</span><span class="token function">setPassword</span><span class="token punctuation">(</span><span class="token string">&quot;0000000&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        userMapper<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// \u91CA\u653E\u8D44\u6E90</span>
        sqlSession<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-mybatis\u7684\u9AD8\u7EA7\u6CE8\u89E3" tabindex="-1"><a class="header-anchor" href="#_1-3-mybatis\u7684\u9AD8\u7EA7\u6CE8\u89E3" aria-hidden="true">#</a> 1.3 Mybatis\u7684\u9AD8\u7EA7\u6CE8\u89E3</h3><p><strong>MyBatis\u7684\u6CE8\u89E3\u5B9E\u73B0\u590D\u6742\u6620\u5C04\u5F00\u53D1</strong></p><p>\u5B9E\u73B0\u590D\u6742\u5173\u7CFB\u6620\u5C04\u4E4B\u524D\u6211\u4EEC\u53EF\u4EE5\u5728\u6620\u5C04\u6587\u4EF6\u4E2D\u901A\u8FC7\u914D\u7F6E<code>&lt;resultMap&gt;</code>\u6765\u5B9E\u73B0\uFF0C\u4F7F\u7528\u6CE8\u89E3\u5F00\u53D1\u540E\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528<code>@Results</code>\u6CE8\u89E3\uFF0C<code>@Result</code>\u6CE8\u89E3\uFF0C<code>@One</code>\u6CE8\u89E3\uFF0C<code>@Many</code>\u6CE8\u89E3\u7EC4\u5408\u5B8C\u6210\u590D\u6742\u5173\u7CFB\u7684\u914D\u7F6E</p><p><img src="https://pic1.xuehuaimg.com/proxy/raw.githubusercontent.com/isicman/image/main/img/image-20220730201855511.png" alt="image-20220730201855511" loading="lazy"></p><p><img src="https://pic1.xuehuaimg.com/proxy/raw.githubusercontent.com/isicman/image/main/img/image-20220730201959194.png" alt="image-20220730201959194" loading="lazy"></p><h3 id="_1-4-\u6CE8\u89E3\u5B9E\u73B0\u4E00\u5BF9\u4E00\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#_1-4-\u6CE8\u89E3\u5B9E\u73B0\u4E00\u5BF9\u4E00\u67E5\u8BE2" aria-hidden="true">#</a> 1.4 \u6CE8\u89E3\u5B9E\u73B0\u4E00\u5BF9\u4E00\u67E5\u8BE2</h3><p>\u7528\u6237\u8868\u548C\u8BA2\u5355\u8868\u7684\u5173\u7CFB\u4E3A\uFF0C\u4E00\u4E2A\u7528\u6237\u6709\u591A\u4E2A\u8BA2\u5355\uFF0C\u4E00\u4E2A\u8BA2\u5355\u53EA\u4ECE\u5C5E\u4E8E\u4E00\u4E2A\u7528\u6237</p><p>\u4E00\u5BF9\u4E00\u67E5\u8BE2\u7684\u9700\u6C42\uFF1A<code>\u67E5\u8BE2\u4E00\u4E2A\u8BA2\u5355\uFF0C\u4E0E\u6B64\u540C\u65F6\u67E5\u8BE2\u51FA\u8BE5\u8BA2\u5355\u6240\u5C5E\u7684\u7528\u6237</code></p><blockquote><p>\u6CE8\u610F\uFF1A \u4E5F\u5C31\u662F\u8BF4\u628A\u4E4B\u524D\u7684xml\u7684\u914D\u7F6E\u5927\u91CF\u4FE1\u606F\uFF0C\u5168\u90E8\u5220\u9664\u5230\uFF0C\u76F4\u63A5\u914D\u7F6E\u6CE8\u89E3\u3002\u4F7F\u7528\u4E4B\u524D\u7684\u6570\u636E\u5E93\u8868\u5355\u4EE5\u53CA\u4E09\u4E2A\u5B9E\u4F53\u7C7B\uFF0C\u9700\u8981\u5728Dao\u5305\u4E0B\u9762\u65B0\u5EFA\u4E00\u4E2ARoleMapper\uFF0C\u4E00\u5171\u4E09\u4E2A\u5B9E\u4F53\u7C7B\u7684\u4EE3\u7406\u63A5\u53E3\uFF0C\u7136\u540E\u914D\u7F6E\u6CE8\u89E3\u5373\u53EF\u3002</p></blockquote><p><strong>\u4E00\u5BF9\u4E00\u67E5\u8BE2\u7684\u8BED\u53E5</strong></p><p>\u5BF9\u5E94\u7684sql\u5982\u4E0B\uFF1A</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> orders<span class="token punctuation">;</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> <span class="token keyword">user</span> <span class="token keyword">where</span> id<span class="token operator">=</span>\u67E5\u8BE2\u51FA\u8BA2\u5355\u7684uid<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u4F7F\u7528\u6CE8\u89E3\u914D\u7F6EMapper</strong></p><p>\u4F7F\u7528\u6CE8\u89E3\u914D\u7F6EOrderMapper\u63A5\u53E3\u7684\u65B9\u6CD5\uFF0C\u5728OrderMapper\u7684\u63A5\u53E3\u65B9\u6CD5\u4E2D\u8C03\u7528UserMapper\u7684\u6CE8\u89E3\u65B9\u6CD5\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">OrderMapper</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u7B2C\u4E00\u79CD\u6CE8\u89E3\u7684\u65B9\u5F0F\u5E76\u4E0D\u80FD\u5B8C\u5168\u83B7\u53D6\u5230\u60F3\u8981\u7684\u6570\u636E\u6240\u4EE5\u4F7F\u7528\u7B2C\u4E8C\u4E2D\u7EC6\u5316</span>
    <span class="token comment">/*@Select(&quot;select *,o.id oid from orders o,user u where o.uuid = u.id&quot;)
    @Results({
            @Result(column = &quot;oid&quot;,property = &quot;id&quot;),
            @Result(column = &quot;ordertime&quot;,property = &quot;ordertime&quot;),
            @Result(column = &quot;total&quot;,property = &quot;total&quot;),
            @Result(column = &quot;uuid&quot;,property = &quot;user.id&quot;),
            @Result(column = &quot;username&quot;,property = &quot;user.username&quot;),
            @Result(column = &quot;password&quot;,property = &quot;user.password&quot;),
            @Result(column = &quot;birthday&quot;,property = &quot;user.birthday&quot;)
    })
    public List&lt;Order&gt; findAll();*/</span>


    <span class="token annotation punctuation">@Select</span><span class="token punctuation">(</span><span class="token string">&quot;select *,o.id oid from orders o,user u where o.uuid = u.id&quot;</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@Results</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Result</span><span class="token punctuation">(</span>column <span class="token operator">=</span> <span class="token string">&quot;oid&quot;</span><span class="token punctuation">,</span>property <span class="token operator">=</span> <span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token annotation punctuation">@Result</span><span class="token punctuation">(</span>column <span class="token operator">=</span> <span class="token string">&quot;ordertime&quot;</span><span class="token punctuation">,</span>property <span class="token operator">=</span> <span class="token string">&quot;ordertime&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token annotation punctuation">@Result</span><span class="token punctuation">(</span>column <span class="token operator">=</span> <span class="token string">&quot;total&quot;</span><span class="token punctuation">,</span>property <span class="token operator">=</span> <span class="token string">&quot;total&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token annotation punctuation">@Result</span><span class="token punctuation">(</span>column <span class="token operator">=</span> <span class="token string">&quot;uuid&quot;</span><span class="token punctuation">,</span>property <span class="token operator">=</span> <span class="token string">&quot;user.id&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token annotation punctuation">@Result</span><span class="token punctuation">(</span>
                    property <span class="token operator">=</span> <span class="token string">&quot;user&quot;</span><span class="token punctuation">,</span>  <span class="token comment">// \u8981\u5C01\u88C5\u7684\u5C5E\u6027\u540D\u79F0</span>
                    column <span class="token operator">=</span> <span class="token string">&quot;uid&quot;</span><span class="token punctuation">,</span>     <span class="token comment">// \u6839\u636E\u90A3\u4E2A\u5B57\u6BB5\u53BB\u67E5\u8BE2user\u8868\u7684\u6570\u636E</span>
                    javaType <span class="token operator">=</span> <span class="token class-name">User</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span>  <span class="token comment">// \u8981\u5C01\u88C5\u7684\u5B9E\u4F53\u7C7B\u578B</span>
                    <span class="token comment">// select\u5C5E\u6027\uFF1A \u4EE3\u8868\u67E5\u8BE2\u90A3\u4E2A\u63A5\u53E3\u7684\u65B9\u6CD5\u83B7\u5F97\u6570\u636E</span>
                    one <span class="token operator">=</span> <span class="token annotation punctuation">@One</span><span class="token punctuation">(</span>select<span class="token operator">=</span><span class="token string">&quot;com.example.dao.UserMapper.findById&quot;</span><span class="token punctuation">)</span>
            <span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Order</span><span class="token punctuation">&gt;</span></span> <span class="token function">findAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Select</span><span class="token punctuation">(</span><span class="token string">&quot;select * from orders where uuid = #{uuid}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Order</span><span class="token punctuation">&gt;</span></span> <span class="token function">findByUid</span><span class="token punctuation">(</span><span class="token keyword">int</span> uid<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">UserMapper</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Select</span><span class="token punctuation">(</span><span class="token string">&quot;select * from user where id = #{id}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">User</span> <span class="token function">findById</span><span class="token punctuation">(</span><span class="token keyword">int</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-6-\u6CE8\u89E3\u5B9E\u73B0\u4E00\u5BF9\u591A\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#_1-6-\u6CE8\u89E3\u5B9E\u73B0\u4E00\u5BF9\u591A\u67E5\u8BE2" aria-hidden="true">#</a> 1.6 \u6CE8\u89E3\u5B9E\u73B0\u4E00\u5BF9\u591A\u67E5\u8BE2</h3><p><strong>\u4E00\u5BF9\u591A\u67E5\u8BE2\u7684\u6A21\u578B</strong></p><p>\u7528\u6237\u8868\u548C\u8BA2\u5355\u8868\u7684\u5173\u7CFB\u4E3A\uFF0C\u4E00\u4E2A\u7528\u6237\u6709\u591A\u4E2A\u8BA2\u5355\uFF0C\u4E00\u4E2A\u8BA2\u5355\u53EA\u4ECE\u5C5E\u4E8E\u4E00\u4E2A\u7528\u6237</p><p>\u4E00\u5BF9\u591A\u67E5\u8BE2\u7684\u9700\u6C42\uFF1A<code>\u67E5\u8BE2\u4E00\u4E2A\u7528\u6237\uFF0C\u4E0E\u6B64\u540C\u65F6\u67E5\u8BE2\u51FA\u8BE5\u7528\u6237\u5177\u6709\u7684\u8BA2\u5355</code></p><p><strong>\u4E00\u5BF9\u591A\u67E5\u8BE2\u7684\u8BED\u53E5</strong></p><p>\u5BF9\u5E94\u7684sql\u8BED\u53E5\uFF1A</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> <span class="token keyword">user</span><span class="token punctuation">;</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> orders <span class="token keyword">where</span> uid<span class="token operator">=</span>\u67E5\u8BE2\u51FA\u7528\u6237\u7684id<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u4F7F\u7528\u6CE8\u89E3\u914D\u7F6EMapper</strong></p><ul><li>\u5728OrderMapper\u63A5\u53E3\u4E2D\u521B\u5EFAfindByUid\u7684\u65B9\u6CD5\uFF0C\u4F7F\u7528\u6CE8\u89E3\u7684\u65B9\u5F0F\u914D\u7F6E\u67E5\u8BE2\u8BED\u53E5</li><li>\u5728UserMapper\u63A5\u53E3\u4E2D\u914D\u7F6EResults\u6CE8\u89E3\uFF0C\u8C03\u7528OrderMapper\u7684\u65B9\u6CD5\u3002</li><li>\u5728Order\u5B9E\u4F53\u7C7B\u6DFB\u52A0User\u5B9E\u4F53\u7C7B</li><li>\u5728User\u5B9E\u4F53\u7C7B\u6DFB\u52A0Order\u5B9E\u4F53\u7C7B\u4F5C\u4E3A\u8BA2\u5355\u6570\u91CF\u7684\u96C6\u5408</li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">UserMapper</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> <span class="token function">findUserAndOrder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Select</span><span class="token punctuation">(</span><span class="token string">&quot;select * from user&quot;</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@Results</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Result</span><span class="token punctuation">(</span>id <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span>column <span class="token operator">=</span> <span class="token string">&quot;id&quot;</span><span class="token punctuation">,</span>property <span class="token operator">=</span> <span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token annotation punctuation">@Result</span><span class="token punctuation">(</span>column <span class="token operator">=</span> <span class="token string">&quot;username&quot;</span><span class="token punctuation">,</span>property <span class="token operator">=</span> <span class="token string">&quot;username&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token annotation punctuation">@Result</span><span class="token punctuation">(</span>column <span class="token operator">=</span> <span class="token string">&quot;password&quot;</span><span class="token punctuation">,</span>property <span class="token operator">=</span> <span class="token string">&quot;password&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token annotation punctuation">@Result</span><span class="token punctuation">(</span>
                    property <span class="token operator">=</span> <span class="token string">&quot;orderList&quot;</span><span class="token punctuation">,</span>
                    column <span class="token operator">=</span> <span class="token string">&quot;id&quot;</span><span class="token punctuation">,</span>
                    javaType <span class="token operator">=</span> <span class="token class-name">List</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span>
                    many <span class="token operator">=</span> <span class="token annotation punctuation">@Many</span><span class="token punctuation">(</span>select <span class="token operator">=</span> <span class="token string">&quot;com.example.dao.OrderMapper.findByUid&quot;</span><span class="token punctuation">)</span>
            <span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> <span class="token function">findUserAndOrderAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>



<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">OrderMapper</span> <span class="token punctuation">{</span>
    
    <span class="token annotation punctuation">@Select</span><span class="token punctuation">(</span><span class="token string">&quot;select * from orders where uuid = #{uuid}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Order</span><span class="token punctuation">&gt;</span></span> <span class="token function">findByUid</span><span class="token punctuation">(</span><span class="token keyword">int</span> uid<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-7-\u6CE8\u89E3\u5B9E\u73B0\u591A\u5BF9\u591A\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#_1-7-\u6CE8\u89E3\u5B9E\u73B0\u591A\u5BF9\u591A\u67E5\u8BE2" aria-hidden="true">#</a> 1.7 \u6CE8\u89E3\u5B9E\u73B0\u591A\u5BF9\u591A\u67E5\u8BE2</h3><p><strong>\u591A\u5BF9\u591A\u67E5\u8BE2\u7684\u6A21\u578B</strong></p><p>\u7528\u6237\u8868\u548C\u89D2\u8272\u8868\u7684\u5173\u7CFB\u4E3A\uFF0C\u4E00\u4E2A\u7528\u6237\u6709\u591A\u4E2A\u89D2\u8272\uFF0C\u4E00\u4E2A\u89D2\u8272\u88AB\u591A\u4E2A\u7528\u6237\u4F7F\u7528</p><p>\u591A\u5BF9\u591A\u67E5\u8BE2\u7684\u9700\u6C42\uFF1A<code>\u67E5\u8BE2\u7528\u6237\u540C\u65F6\u67E5\u8BE2\u51FA\u8BE5\u7528\u6237\u7684\u6240\u6709\u89D2\u8272</code></p><p>\u5BF9\u5E94\u7684sql\u8BED\u53E5\uFF1A</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> <span class="token keyword">user</span><span class="token punctuation">;</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> role r<span class="token punctuation">,</span>user_role ur <span class="token keyword">where</span> r<span class="token punctuation">.</span>id<span class="token operator">=</span>ur<span class="token punctuation">.</span>role_id <span class="token operator">and</span> ur<span class="token punctuation">.</span>user_id<span class="token operator">=</span>\u7528\u6237\u7684id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u4F7F\u7528\u6CE8\u89E3\u914D\u7F6EMapper</strong></p><ul><li>\u5728User\u7684\u5B9E\u4F53\u7C7B\u4E2D\u8981\u6DFB\u52A0Role\u5B9E\u4F53\u7C7B\u7684\u96C6\u5408</li><li>\u5728RoleMapper\u63A5\u53E3\u4E0B\u9762\u521B\u5EFA\u4E00\u4E2A<code>findByUid()</code>\u7684\u65B9\u6CD5</li><li>\u4F7F\u7528UserMapper\u63A5\u53E3\u521B\u5EFA\u67E5\u8BE2\u6240\u6709\u7528\u6237\u548C\u6BCF\u4E2A\u7528\u6237\u7684\u89D2\u8272\u4F7F\u7528<code>@Results</code>\u6CE8\u89E3 \uFF0C\u8C03\u7528RoleMapper\u4E0B\u7684\u65B9\u6CD5\u3002</li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">RoleMapper</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Select</span><span class="token punctuation">(</span><span class="token string">&quot;select * from user_role ur,role r where ur.roleId = r.id and ur.userId = #{uid}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Role</span><span class="token punctuation">&gt;</span></span> <span class="token function">findByUid</span><span class="token punctuation">(</span><span class="token keyword">int</span> uid<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">UserMapper</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Select</span><span class="token punctuation">(</span><span class="token string">&quot;select * from user&quot;</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@Results</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Result</span><span class="token punctuation">(</span>id <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span>column <span class="token operator">=</span> <span class="token string">&quot;id&quot;</span><span class="token punctuation">,</span>property <span class="token operator">=</span> <span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token annotation punctuation">@Result</span><span class="token punctuation">(</span>column <span class="token operator">=</span> <span class="token string">&quot;username&quot;</span><span class="token punctuation">,</span>property <span class="token operator">=</span> <span class="token string">&quot;username&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token annotation punctuation">@Result</span><span class="token punctuation">(</span>column <span class="token operator">=</span> <span class="token string">&quot;password&quot;</span><span class="token punctuation">,</span>property <span class="token operator">=</span> <span class="token string">&quot;password&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token annotation punctuation">@Result</span><span class="token punctuation">(</span>
                    property <span class="token operator">=</span> <span class="token string">&quot;roleList&quot;</span><span class="token punctuation">,</span>
                    column <span class="token operator">=</span> <span class="token string">&quot;id&quot;</span><span class="token punctuation">,</span>
                    javaType <span class="token operator">=</span> <span class="token class-name">List</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span>
                    many <span class="token operator">=</span> <span class="token annotation punctuation">@Many</span><span class="token punctuation">(</span>select <span class="token operator">=</span> <span class="token string">&quot;com.example.dao.RoleMapper.findByUid&quot;</span><span class="token punctuation">)</span>
            <span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> <span class="token function">findUserAndRoleAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,54),o=[p];function c(l,i){return s(),a("div",null,o)}const d=n(e,[["render",c],["__file","13.Mybatis\u6CE8\u89E3\u5F00\u53D1.html.vue"]]);export{d as default};
