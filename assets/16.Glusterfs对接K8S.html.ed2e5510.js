const e=JSON.parse('{"key":"v-54784517","path":"/zh/isKcount/2/CKA/16.Glusterfs%E5%AF%B9%E6%8E%A5K8S.html","title":"GlusterFs\u5BF9\u63A5K8S","lang":"zh-CN","frontmatter":{"title":"GlusterFs\u5BF9\u63A5K8S","date":"2022-02-02T12:13:13.000Z","Tag":["Kubernetes"],"summary":"GlusterFs\u5BF9\u63A5K8S \u4EC0\u4E48\u662Fglusterfs glusterfs\u662F\u4E00\u4E2A\u5F00\u6E90\u5206\u5E03\u5F0F\u6587\u4EF6\u7CFB\u7EDF\uFF0C\u5177\u6709\u5F3A\u5927\u7684\u6A2A\u5411\u6269\u5C55\u80FD\u529B\uFF0C\u53EF\u652F\u6301\u6570pb\u5B58\u50A8\u5BB9\u91CF\u548C\u6570\u5343\u5BA2\u6237\u7AEF\uFF0C\u901A\u8FC7\u7F51\u7EDC\u4E92\u8054\u6210\u4E00\u4E2A\u5E76\u884C\u7684\u7F51\u7EDC\u6587\u4EF6\u7CFB\u7EDF\uFF0C\u5177\u6709\u53EF\u6269\u5C55\u6027\u3001\u9AD8\u6027\u80FD\u3001\u9AD8\u53EF\u7528\u7B49\u7279\u70B9\u3002 \u5E38\u7528\u8D44\u6E90\uFF1A\\rpool \u5B58\u50A8\u8D44\u6E90\u6C60; \\rpeer \u8282\u70B9; \\rvolume \u5377 \u5FC5\u987B\u5904\u4E8Estart\u624D\u53EF\u7528; \\rbrick\u5B58\u50A8\u5355\u5143\uFF08","head":[["meta",{"property":"og:url","content":"https://isKcount/cicd/zh/isKcount/2/CKA/16.Glusterfs%E5%AF%B9%E6%8E%A5K8S.html"}],["meta",{"property":"og:site_name","content":"\u6587\u6863\u6F14\u793A"}],["meta",{"property":"og:title","content":"GlusterFs\u5BF9\u63A5K8S"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-10-11T05:08:11.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:published_time","content":"2022-02-02T12:13:13.000Z"}],["meta",{"property":"article:modified_time","content":"2022-10-11T05:08:11.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"\u4EC0\u4E48\u662Fglusterfs","slug":"\u4EC0\u4E48\u662Fglusterfs","link":"#\u4EC0\u4E48\u662Fglusterfs","children":[]},{"level":2,"title":"\u5B89\u88C5glusterfs","slug":"\u5B89\u88C5glusterfs","link":"#\u5B89\u88C5glusterfs","children":[]},{"level":2,"title":"\u6DFB\u52A0glusterfs\u8D44\u6E90\u6C60\uFF1A","slug":"\u6DFB\u52A0glusterfs\u8D44\u6E90\u6C60","link":"#\u6DFB\u52A0glusterfs\u8D44\u6E90\u6C60","children":[]},{"level":2,"title":"glusterfs\u5377\u7BA1\u7406","slug":"glusterfs\u5377\u7BA1\u7406","link":"#glusterfs\u5377\u7BA1\u7406","children":[{"level":3,"title":"\u521B\u5EFA\u5206\u5E03\u5F0F\u590D\u5236\u5377","slug":"\u521B\u5EFA\u5206\u5E03\u5F0F\u590D\u5236\u5377","link":"#\u521B\u5EFA\u5206\u5E03\u5F0F\u590D\u5236\u5377","children":[]},{"level":3,"title":"\u542F\u52A8\u5377","slug":"\u542F\u52A8\u5377","link":"#\u542F\u52A8\u5377","children":[]},{"level":3,"title":"\u67E5\u770B\u5377","slug":"\u67E5\u770B\u5377","link":"#\u67E5\u770B\u5377","children":[]},{"level":3,"title":"\u6302\u8F7D\u5377","slug":"\u6302\u8F7D\u5377","link":"#\u6302\u8F7D\u5377","children":[]}]},{"level":2,"title":"\u5206\u90E8\u7F72\u590D\u5236\u5377\u6269\u5BB9","slug":"\u5206\u90E8\u7F72\u590D\u5236\u5377\u6269\u5BB9","link":"#\u5206\u90E8\u7F72\u590D\u5236\u5377\u6269\u5BB9","children":[{"level":3,"title":"\u6269\u5BB9\u524D\u67E5\u770B\u5BB9\u91CF","slug":"\u6269\u5BB9\u524D\u67E5\u770B\u5BB9\u91CF","link":"#\u6269\u5BB9\u524D\u67E5\u770B\u5BB9\u91CF","children":[]},{"level":3,"title":"\u6269\u5BB9\u7684\u547D\u4EE4","slug":"\u6269\u5BB9\u7684\u547D\u4EE4","link":"#\u6269\u5BB9\u7684\u547D\u4EE4","children":[]},{"level":3,"title":"\u6269\u5BB9\u540E\u67E5\u770B\u5BB9\u91CF","slug":"\u6269\u5BB9\u540E\u67E5\u770B\u5BB9\u91CF","link":"#\u6269\u5BB9\u540E\u67E5\u770B\u5BB9\u91CF","children":[]}]},{"level":2,"title":"glusterfs\u505AK8s\u7684\u540E\u7AEF\u5B58\u50A8","slug":"glusterfs\u505Ak8s\u7684\u540E\u7AEF\u5B58\u50A8","link":"#glusterfs\u505Ak8s\u7684\u540E\u7AEF\u5B58\u50A8","children":[{"level":3,"title":"\u521B\u5EFAendpoint","slug":"\u521B\u5EFAendpoint","link":"#\u521B\u5EFAendpoint","children":[]},{"level":3,"title":"\u521B\u5EFAservice","slug":"\u521B\u5EFAservice","link":"#\u521B\u5EFAservice","children":[]},{"level":3,"title":"\u521B\u5EFAglusterfs\u7C7B\u578Bpv\u9A8C\u8BC1","slug":"\u521B\u5EFAglusterfs\u7C7B\u578Bpv\u9A8C\u8BC1","link":"#\u521B\u5EFAglusterfs\u7C7B\u578Bpv\u9A8C\u8BC1","children":[]},{"level":3,"title":"\u4F7F\u7528pvc","slug":"\u4F7F\u7528pvc","link":"#\u4F7F\u7528pvc","children":[]},{"level":3,"title":"\u521B\u5EFAPod\u4F7F\u7528glusterfs\u5B58\u50A8","slug":"\u521B\u5EFApod\u4F7F\u7528glusterfs\u5B58\u50A8","link":"#\u521B\u5EFApod\u4F7F\u7528glusterfs\u5B58\u50A8","children":[]}]}],"git":{"createdTime":1665464891000,"updatedTime":1665464891000,"contributors":[{"name":"Administrator","email":"admin@example.com","commits":1}]},"readingTime":{"minutes":3.56,"words":1068},"filePathRelative":"zh/isKcount/2/CKA/16.Glusterfs\u5BF9\u63A5K8S.md","localizedDate":"2022\u5E742\u67082\u65E5"}');export{e as data};
