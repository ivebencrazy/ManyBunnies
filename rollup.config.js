import resolveNode from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";

export default {
  input: "./source/index.js",
  output: {
    file: "./docs/build/client.js"
  },
  plugins: [
    resolveNode({
      jsnext: true
    }),
    commonjs({
      include: "node_modules/**"
    })
  ],
}
