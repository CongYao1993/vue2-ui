---
title: Button
---

# 按钮

<script>
export default {
  data() {
    return {
      button: '默认'
    }
  }
}
</script>

<template>
  <yc-button>{{button}}</yc-button>
  <yc-button type="primary">主色</yc-button>
  <yc-button type="success">成功</yc-button>
  <yc-button type="info">提示</yc-button>
</template>

### 使用

```html
<yc-button>默认</yc-button>
<yc-button type="primary">主色</yc-button>
<yc-button type="success">成功</yc-button>
<yc-button type="info">提示</yc-button>
```
