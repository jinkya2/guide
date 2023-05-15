# Definition

- Static module bundler for modern javascript applications.
- Webpack only understands JavaScript and JSON.

# Core Concept

- Input : Initial module webpack should use to build out its internal dependency graph
- Output : Where to emit created bundles and their naming. Default is `./dist/main.js`
- Loaders : As webpack only understands JavaScript and JSON, loaders help webpack to process other file types and convert them into valid modules. At high level, loaders have two properties. test and use. `test` for identifying which files should be transformed. `use` for indicating which loaders to utilise.
- Plugins : To perform wide range of tasks like bundle optimisation, asset management etc.
- Mode : Webpack built in optimisation for each environment. `production` `development` or `none`. Default is `production`
- Browser Compatibility
- Code

```javascript
module.exports={
    entry: 'path/to/entry/file.js',
    output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js',
  },
  module: {
    rules: [{ test: /\.txt$/, use: 'raw-loader' }],
  },
  mode: 'production'
}
```

# Others

- The minimum supported nodejs version for webpack 5 is 10.13.0(LTS)

# References

- [https://itnext.io/create-react-typescript-project-with-webpack-and-babel-2431cac8cf5b](https://itnext.io/create-react-typescript-project-with-webpack-and-babel-2431cac8cf5b)

# Todo

- ES lint support
- Prettier support
