const e=JSON.parse('{"key":"v-4e4d095b","path":"/zh/isKcount/2/CKA/13.Helm.html","title":"Helm\u5305\u7BA1\u7406","lang":"zh-CN","frontmatter":{"title":"Helm\u5305\u7BA1\u7406","date":"2022-01-22T12:12:10.000Z","Tag":["Kubernetes"],"summary":"Helm Kubernetes \u5305\u7BA1\u7406\u5DE5\u5177 Helm \u53EF\u4EE5\u5E2E\u52A9\u6211\u4EEC\u7BA1\u7406 Kubernetes \u5E94\u7528\u7A0B\u5E8F - Helm Charts \u53EF\u4EE5\u5B9A\u4E49\u3001\u5B89\u88C5\u548C\u5347\u7EA7\u590D\u6742\u7684 Kubernetes \u5E94\u7528\u7A0B\u5E8F\uFF0CCharts \u5305\u5F88\u5BB9\u6613\u521B\u5EFA\u3001\u7248\u672C\u7BA1\u7406\u3001\u5206\u4EAB\u548C\u5206\u5E03\u3002Helm \u5BF9\u4E8E Kubernetes \u6765\u8BF4\u5C31\u76F8\u5F53\u4E8E yum \u5BF9\u4E8E Centos \u6765\u8BF4\uFF0C\u5982\u679C\u6CA1\u6709 yum \u7684\u8BDD\uFF0C\u6211\u4EEC\u5728 ","head":[["meta",{"property":"og:url","content":"https://isKcount/cicd/zh/isKcount/2/CKA/13.Helm.html"}],["meta",{"property":"og:site_name","content":"\u6587\u6863\u6F14\u793A"}],["meta",{"property":"og:title","content":"Helm\u5305\u7BA1\u7406"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-10-11T05:08:11.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:published_time","content":"2022-01-22T12:12:10.000Z"}],["meta",{"property":"article:modified_time","content":"2022-10-11T05:08:11.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"Helm\u5B89\u88C5","slug":"helm\u5B89\u88C5","link":"#helm\u5B89\u88C5","children":[{"level":3,"title":"1.\u62C9\u53D6Helm\u7684\u5B89\u88C5\u5305","slug":"_1-\u62C9\u53D6helm\u7684\u5B89\u88C5\u5305","link":"#_1-\u62C9\u53D6helm\u7684\u5B89\u88C5\u5305","children":[]},{"level":3,"title":"2.\u89E3\u538B\u5B89\u88C5\u5305","slug":"_2-\u89E3\u538B\u5B89\u88C5\u5305","link":"#_2-\u89E3\u538B\u5B89\u88C5\u5305","children":[]},{"level":3,"title":"3.\u590D\u5236PATH\u8DEF\u5F84","slug":"_3-\u590D\u5236path\u8DEF\u5F84","link":"#_3-\u590D\u5236path\u8DEF\u5F84","children":[]},{"level":3,"title":"4.\u67E5\u770BHelm\u7248\u672C","slug":"_4-\u67E5\u770Bhelm\u7248\u672C","link":"#_4-\u67E5\u770Bhelm\u7248\u672C","children":[]},{"level":3,"title":"5.\u6DFB\u52A0\u4E00\u4E2A chart \u4ED3\u5E93","slug":"_5-\u6DFB\u52A0\u4E00\u4E2A-chart-\u4ED3\u5E93","link":"#_5-\u6DFB\u52A0\u4E00\u4E2A-chart-\u4ED3\u5E93","children":[]},{"level":3,"title":"6.\u9A8C\u8BC1\u4F7F\u7528chart\u5305","slug":"_6-\u9A8C\u8BC1\u4F7F\u7528chart\u5305","link":"#_6-\u9A8C\u8BC1\u4F7F\u7528chart\u5305","children":[]}]},{"level":2,"title":"Helm\u5B89\u88C5mysql","slug":"helm\u5B89\u88C5mysql","link":"#helm\u5B89\u88C5mysql","children":[{"level":3,"title":"heml install\u547D\u4EE4","slug":"heml-install\u547D\u4EE4","link":"#heml-install\u547D\u4EE4","children":[]},{"level":3,"title":"helm show\u547D\u4EE4","slug":"helm-show\u547D\u4EE4","link":"#helm-show\u547D\u4EE4","children":[]},{"level":3,"title":"helm ls\u547D\u4EE4","slug":"helm-ls\u547D\u4EE4","link":"#helm-ls\u547D\u4EE4","children":[]},{"level":3,"title":"helm uninstall\u547D\u4EE4","slug":"helm-uninstall\u547D\u4EE4","link":"#helm-uninstall\u547D\u4EE4","children":[]}]},{"level":2,"title":"\u5B9A\u5236","slug":"\u5B9A\u5236","link":"#\u5B9A\u5236","children":[{"level":3,"title":"\u67E5\u770B\u53EF\u9009\u53C2\u6570","slug":"\u67E5\u770B\u53EF\u9009\u53C2\u6570","link":"#\u67E5\u770B\u53EF\u9009\u53C2\u6570","children":[]},{"level":3,"title":"\u4F7F\u7528\u81EA\u5B9A\u4E49\u53C2\u6570","slug":"\u4F7F\u7528\u81EA\u5B9A\u4E49\u53C2\u6570","link":"#\u4F7F\u7528\u81EA\u5B9A\u4E49\u53C2\u6570","children":[]},{"level":3,"title":"helm install -f\u5B89\u88C5","slug":"helm-install-f\u5B89\u88C5","link":"#helm-install-f\u5B89\u88C5","children":[]},{"level":3,"title":"\u6587\u4EF6\u7ED3\u6784","slug":"\u6587\u4EF6\u7ED3\u6784","link":"#\u6587\u4EF6\u7ED3\u6784","children":[]},{"level":3,"title":"Chart.yaml \u6587\u4EF6","slug":"chart-yaml-\u6587\u4EF6","link":"#chart-yaml-\u6587\u4EF6","children":[]},{"level":3,"title":"\u4F9D\u8D56","slug":"\u4F9D\u8D56","link":"#\u4F9D\u8D56","children":[]},{"level":3,"title":"TEMPLATES \u548C VALUES","slug":"templates-\u548C-values","link":"#templates-\u548C-values","children":[]}]}],"git":{"createdTime":1665464891000,"updatedTime":1665464891000,"contributors":[{"name":"Administrator","email":"admin@example.com","commits":1}]},"readingTime":{"minutes":21.24,"words":6371},"filePathRelative":"zh/isKcount/2/CKA/13.Helm.md","localizedDate":"2022\u5E741\u670822\u65E5"}');export{e as data};
