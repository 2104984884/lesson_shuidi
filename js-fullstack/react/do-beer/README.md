主题   react-beer  应用开发思路整理
beer  搜索   -> 得到列表  点进去   创建路由

3个路由设计  beer   restful


首页  /
搜索  搜索+列表显示   /search/:searchTerm  /search/all    params
详情   /beer/

1. 把应用架构搭好   路由
2. 组件化思维
3. list列表的编写流程
4. router  this.props.match.params
5. / -> Main.js  -> loadBeers   ->  loading   ->list
6. / ->/search