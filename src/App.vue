<!--
 * @Author: 老范
 * @Date: 2024-03-05 13:46:23
 * @LastEditors: 老范
 * @LastEditTime: 2024-03-06 11:40:49
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
<script setup lang="ts">
import { ref, watch } from "vue";
import { ClassicEditor } from "@ckeditor/ckeditor5-editor-classic";

import { Essentials } from "@ckeditor/ckeditor5-essentials";
import { Bold, Italic } from "@ckeditor/ckeditor5-basic-styles";
import { Link } from "@ckeditor/ckeditor5-link";
import { Paragraph } from "@ckeditor/ckeditor5-paragraph";
import MathType from "@wiris/mathtype-ckeditor5/src/plugin";
import MathMl2LaTeX from "mathml2latex";

const editor = ref(ClassicEditor);
const editorData = ref(
  '<math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mi>a</mi><mo>+</mo><mi>b</mi><mo>−</mo><mn>8</mn><mo>∗</mo><mroot><mn>2</mn><mn>3</mn></mroot></math>'
);
const editorConfig = ref({
  plugins: [Essentials, Bold, Italic, Link, Paragraph, MathType],
  toolbar: {
    items: ["bold", "italic", "link", "undo", "redo", "MathType", "ChemType"],
  },
});
watch(
  editorData,
  (params) => {
    console.log("🚀 ~ params:", params);
    if (!params) return;
    let a = params.slice(3, -4);
    const latex = MathMl2LaTeX.convert(a); // => \frac{a}{b}
    console.log("🚀 ~ latex:", latex);
  },
  {
    deep: true,
  }
);
</script>
