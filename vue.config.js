/**
 * Created by shihuilaw on 2018/11/27.
 */
module.exports = {
  // 选项...
  // baseUrl: process.env.NODE_ENV === 'production'
  //   ? '/production-sub-path/'
  //   : '/luo',
  devServer: {
    overlay: {
      warnings: true,
      errors: true,
    },
  },
  css: {
    loaderOptions: {
      css: {
        // 这里的选项会传递给 css-loader
      },
      sass: {
        // @/ 是 src/ 的别名
        // 所以这里假设你有 `src/variables.scss` 这个文件
        data: '@import "@/sass.scss";',
      },
      postcss: {
        // 这里的选项会传递给 postcss-loader
      },
    },
  },
  outputDir: 'dist',
  pages: {
    subpage: {
      // page 的入口
      entry: 'src/sub.ts',
      // 模板来源
      template: 'public/subpage.html',
      // 在 dist/index.html 的输出
      filename: 'subpage.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'subpage'],
    },
    index: {
      // page 的入口
      entry: 'src/main.ts',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Index Page',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'index'],
    },

  },
};
