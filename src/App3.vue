<!--
 * @Author: 老范
 * @Date: 2024-03-05 13:46:23
 * @LastEditors: 老范
 * @LastEditTime: 2024-03-06 11:38:35
 * @Description: 请填写简介
-->
<!-- App.vue -->

<template>
  <div id="app">
    <ckeditor
      :editor="editor"
      v-model="editorData"
      :config="editorConfig"
    ></ckeditor>
  </div>
</template>

<script>
// Since we're building CKEditor 5 from source, we use the source version of ClassicEditor.
import { ClassicEditor } from "@ckeditor/ckeditor5-editor-classic";

import { Essentials } from "@ckeditor/ckeditor5-essentials";
import { Bold, Italic } from "@ckeditor/ckeditor5-basic-styles";
import { Link } from "@ckeditor/ckeditor5-link";
import { Paragraph } from "@ckeditor/ckeditor5-paragraph";
import MathType from "@wiris/mathtype-ckeditor5/src/plugin";
// const MathMl2LaTeX = require("mathml2latex");
import MathMl2LaTeX from "mathml2latex";
console.log("🚀 ~ MathMl2LaTeX:", MathMl2LaTeX);
export default {
  name: "app",
  data() {
    return {
      editor: ClassicEditor,
      editorData: "Content of the editor.",
      editorConfig: {
        plugins: [Essentials, Bold, Italic, Link, Paragraph, MathType],

        toolbar: {
          items: [
            "bold",
            "italic",
            "link",
            "undo",
            "redo",
            "MathType",
            "ChemType",
          ],
        },
      },
    };
  },
  watch: {
    editorData: function (params) {
      console.log("🚀 ~ params:", params);
      if (!params) return;
      let a = params.slice(3, -4);
      console.log("🚀 ~ latex0:", 0);
      const latex = MathMl2LaTeX.convert(a); // => \frac{a}{b}
      console.log("🚀 ~ latex1:", latex);
    },
  },
};
</script>
