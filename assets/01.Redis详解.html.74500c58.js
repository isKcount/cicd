const e=JSON.parse('{"key":"v-513493b9","path":"/zh/isKcount/6/redis/01.Redis%E8%AF%A6%E8%A7%A3.html","title":"Redis\u8BE6\u89E3","lang":"zh-CN","frontmatter":{"title":"Redis\u8BE6\u89E3","date":"2022-08-19T20:43:45.000Z","Category":["Redis"],"Tag":["Redis"],"summary":"Redis\u7684\u8BE6\u89E3 1.NoSql\u6570\u636E\u5E93 1.1 NoSQL\u6570\u636E\u5E93\u4ECB\u7ECD NoSQL(NoSQL = Not Only SQL),\u610F\u601D\u5373\u662F\u201C\u4E0D\u4EC5\u4EC5\u662FSQL\u201D\uFF0C\u6CDB\u6307\u975E\u5173\u7CFB\u578B\u7684\u6570\u636E\u5E93 NoSQL\u4E0D\u4F9D\u8D56\u4E1A\u52A1\u903B\u8F91\u65B9\u5F0F\u5B58\u50A8\uFF0C\u800C\u4F3C\u7B80\u5355\u7684key-value\u6A21\u5F0F\u5B58\u50A8\u3002\u56E0\u6B64\u5927\u5927\u7684\u589E\u52A0\u4E86\u6570\u636E\u5E93\u7684\u6269\u5C55\u80FD\u529B\u3002\\r\u4E0D\u9075\u5FAASQL\u6807\u51C6; \\r\u4E0D\u652F\u6301ACID; \\r\u8D85\u8FDC\u4E8ESQL\u7684\u6027\u80FD; 1.2 No","head":[["meta",{"property":"og:url","content":"https://isKcount/cicd/zh/isKcount/6/redis/01.Redis%E8%AF%A6%E8%A7%A3.html"}],["meta",{"property":"og:site_name","content":"\u6587\u6863\u6F14\u793A"}],["meta",{"property":"og:title","content":"Redis\u8BE6\u89E3"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-10-11T05:08:11.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:published_time","content":"2022-08-19T20:43:45.000Z"}],["meta",{"property":"article:modified_time","content":"2022-10-11T05:08:11.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1.NoSql\u6570\u636E\u5E93","slug":"_1-nosql\u6570\u636E\u5E93","link":"#_1-nosql\u6570\u636E\u5E93","children":[{"level":3,"title":"1.1 NoSQL\u6570\u636E\u5E93\u4ECB\u7ECD","slug":"_1-1-nosql\u6570\u636E\u5E93\u4ECB\u7ECD","link":"#_1-1-nosql\u6570\u636E\u5E93\u4ECB\u7ECD","children":[]},{"level":3,"title":"1.2 NoSQL\u9002\u7528\u573A\u666F","slug":"_1-2-nosql\u9002\u7528\u573A\u666F","link":"#_1-2-nosql\u9002\u7528\u573A\u666F","children":[]},{"level":3,"title":"1.3 Redis\u6982\u8FF0","slug":"_1-3-redis\u6982\u8FF0","link":"#_1-3-redis\u6982\u8FF0","children":[]},{"level":3,"title":"1.4 Redis\u7684\u67B6\u6784","slug":"_1-4-redis\u7684\u67B6\u6784","link":"#_1-4-redis\u7684\u67B6\u6784","children":[]}]},{"level":2,"title":"2. Redis\u7684\u5B89\u88C5","slug":"_2-redis\u7684\u5B89\u88C5","link":"#_2-redis\u7684\u5B89\u88C5","children":[{"level":3,"title":"2.1\u7F16\u5199Dockerfile","slug":"_2-1\u7F16\u5199dockerfile","link":"#_2-1\u7F16\u5199dockerfile","children":[]},{"level":3,"title":"2.2 \u914D\u7F6ECompose","slug":"_2-2-\u914D\u7F6Ecompose","link":"#_2-2-\u914D\u7F6Ecompose","children":[]},{"level":3,"title":"2.3 \u90E8\u7F72\u67E5\u770B\u72B6\u6001","slug":"_2-3-\u90E8\u7F72\u67E5\u770B\u72B6\u6001","link":"#_2-3-\u90E8\u7F72\u67E5\u770B\u72B6\u6001","children":[]},{"level":3,"title":"2.4 Redis\u952E(key)","slug":"_2-4-redis\u952E-key","link":"#_2-4-redis\u952E-key","children":[]}]},{"level":2,"title":"3. \u6570\u636E\u7C7B\u578B","slug":"_3-\u6570\u636E\u7C7B\u578B","link":"#_3-\u6570\u636E\u7C7B\u578B","children":[{"level":3,"title":"3.1 Redis\u5B57\u7B26\u4E32(String)","slug":"_3-1-redis\u5B57\u7B26\u4E32-string","link":"#_3-1-redis\u5B57\u7B26\u4E32-string","children":[]},{"level":3,"title":"3.2 \u5B57\u7B26\u4E32\u5E38\u7528\u547D\u4EE4","slug":"_3-2-\u5B57\u7B26\u4E32\u5E38\u7528\u547D\u4EE4","link":"#_3-2-\u5B57\u7B26\u4E32\u5E38\u7528\u547D\u4EE4","children":[]},{"level":3,"title":"3.3 Redis\u5217\u8868(List)","slug":"_3-3-redis\u5217\u8868-list","link":"#_3-3-redis\u5217\u8868-list","children":[]},{"level":3,"title":"3.4 \u5217\u8868\u5E38\u7528\u547D\u4EE4","slug":"_3-4-\u5217\u8868\u5E38\u7528\u547D\u4EE4","link":"#_3-4-\u5217\u8868\u5E38\u7528\u547D\u4EE4","children":[]},{"level":3,"title":"3.5 Redis \u96C6\u5408(Set)","slug":"_3-5-redis-\u96C6\u5408-set","link":"#_3-5-redis-\u96C6\u5408-set","children":[]},{"level":3,"title":"3.6 \u96C6\u5408\u7684\u5E38\u7528\u547D\u4EE4","slug":"_3-6-\u96C6\u5408\u7684\u5E38\u7528\u547D\u4EE4","link":"#_3-6-\u96C6\u5408\u7684\u5E38\u7528\u547D\u4EE4","children":[]},{"level":3,"title":"3.7 Redis\u54C8\u5E0C(Hash)","slug":"_3-7-redis\u54C8\u5E0C-hash","link":"#_3-7-redis\u54C8\u5E0C-hash","children":[]},{"level":3,"title":"3.8 \u54C8\u5E0C\u5E38\u7528\u547D\u4EE4","slug":"_3-8-\u54C8\u5E0C\u5E38\u7528\u547D\u4EE4","link":"#_3-8-\u54C8\u5E0C\u5E38\u7528\u547D\u4EE4","children":[]},{"level":3,"title":"3.9 Redis \u6709\u5E8F\u96C6\u5408 Zset","slug":"_3-9-redis-\u6709\u5E8F\u96C6\u5408-zset","link":"#_3-9-redis-\u6709\u5E8F\u96C6\u5408-zset","children":[]},{"level":3,"title":"3.10 zset\u7684\u5E38\u7528\u547D\u4EE4","slug":"_3-10-zset\u7684\u5E38\u7528\u547D\u4EE4","link":"#_3-10-zset\u7684\u5E38\u7528\u547D\u4EE4","children":[]}]},{"level":2,"title":"4. Redis\u7684\u914D\u7F6E\u6587\u4EF6\u8BE6\u89E3","slug":"_4-redis\u7684\u914D\u7F6E\u6587\u4EF6\u8BE6\u89E3","link":"#_4-redis\u7684\u914D\u7F6E\u6587\u4EF6\u8BE6\u89E3","children":[{"level":3,"title":"4.1 Units\u5355\u4F4D","slug":"_4-1-units\u5355\u4F4D","link":"#_4-1-units\u5355\u4F4D","children":[]},{"level":3,"title":"4.2 \u7F51\u7EDC\u76F8\u5173\u914D\u7F6E","slug":"_4-2-\u7F51\u7EDC\u76F8\u5173\u914D\u7F6E","link":"#_4-2-\u7F51\u7EDC\u76F8\u5173\u914D\u7F6E","children":[]},{"level":3,"title":"4.3 GENERAL\u901A\u7528","slug":"_4-3-general\u901A\u7528","link":"#_4-3-general\u901A\u7528","children":[]},{"level":3,"title":"4.4 SECURITY\u5B89\u5168","slug":"_4-4-security\u5B89\u5168","link":"#_4-4-security\u5B89\u5168","children":[]}]},{"level":2,"title":"5. Redis\u7684\u53D1\u5E03\u548C\u8BA2\u9605","slug":"_5-redis\u7684\u53D1\u5E03\u548C\u8BA2\u9605","link":"#_5-redis\u7684\u53D1\u5E03\u548C\u8BA2\u9605","children":[{"level":3,"title":"5.1 \u4EC0\u4E48\u662F\u53D1\u5E03\u548C\u8BA2\u9605","slug":"_5-1-\u4EC0\u4E48\u662F\u53D1\u5E03\u548C\u8BA2\u9605","link":"#_5-1-\u4EC0\u4E48\u662F\u53D1\u5E03\u548C\u8BA2\u9605","children":[]},{"level":3,"title":"5.2 Redis\u7684\u53D1\u5E03\u8BA2\u9605","slug":"_5-2-redis\u7684\u53D1\u5E03\u8BA2\u9605","link":"#_5-2-redis\u7684\u53D1\u5E03\u8BA2\u9605","children":[]}]},{"level":2,"title":"6. \u65B0\u6570\u636E\u7C7B\u578B","slug":"_6-\u65B0\u6570\u636E\u7C7B\u578B","link":"#_6-\u65B0\u6570\u636E\u7C7B\u578B","children":[{"level":3,"title":"6.1 Bitmaps\uFF1A\u4F4D\u64CD\u4F5C\u5B57\u7B26\u4E32","slug":"_6-1-bitmaps-\u4F4D\u64CD\u4F5C\u5B57\u7B26\u4E32","link":"#_6-1-bitmaps-\u4F4D\u64CD\u4F5C\u5B57\u7B26\u4E32","children":[]},{"level":3,"title":"6.2 \u7B80\u4ECB","slug":"_6-2-\u7B80\u4ECB","link":"#_6-2-\u7B80\u4ECB","children":[]},{"level":3,"title":"6.3 \u5E38\u7528\u547D\u4EE4","slug":"_6-3-\u5E38\u7528\u547D\u4EE4","link":"#_6-3-\u5E38\u7528\u547D\u4EE4","children":[]},{"level":3,"title":"6.4 bitmaps\u4E0Eset\u6BD4\u8F83","slug":"_6-4-bitmaps\u4E0Eset\u6BD4\u8F83","link":"#_6-4-bitmaps\u4E0Eset\u6BD4\u8F83","children":[]},{"level":3,"title":"6.5 HyperLoglog","slug":"_6-5-hyperloglog","link":"#_6-5-hyperloglog","children":[]},{"level":3,"title":"6.6 \u7B80\u4ECB","slug":"_6-6-\u7B80\u4ECB","link":"#_6-6-\u7B80\u4ECB","children":[]},{"level":3,"title":"6.7 \u547D\u4EE4","slug":"_6-7-\u547D\u4EE4","link":"#_6-7-\u547D\u4EE4","children":[]},{"level":3,"title":"6.8 Geographic","slug":"_6-8-geographic","link":"#_6-8-geographic","children":[]},{"level":3,"title":"6.9 \u7B80\u4ECB","slug":"_6-9-\u7B80\u4ECB","link":"#_6-9-\u7B80\u4ECB","children":[]},{"level":3,"title":"6.10 \u547D\u4EE4","slug":"_6-10-\u547D\u4EE4","link":"#_6-10-\u547D\u4EE4","children":[]}]}],"git":{"createdTime":1665464891000,"updatedTime":1665464891000,"contributors":[{"name":"Administrator","email":"admin@example.com","commits":1}]},"readingTime":{"minutes":31.57,"words":9471},"filePathRelative":"zh/isKcount/6/redis/01.Redis\u8BE6\u89E3.md","localizedDate":"2022\u5E748\u670820\u65E5"}');export{e as data};
