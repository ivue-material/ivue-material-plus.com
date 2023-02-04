<template>
  <h4>使用 render-content 函数</h4>
  <ivue-tree
    :data="data"
    show-checkbox
    node-key="id"
    default-expand-all
    :expand-on-click-node="false"
    :render-content="renderContent"
    :props="{ class: customClass }"
    class="tree-demo"
  ></ivue-tree>
  <h4>使用 scoped slot 函数</h4>
  <ivue-tree
    :data="data"
    show-checkbox
    node-key="id"
    default-expand-all
    :expand-on-click-node="false"
    :props="{ class: customClass }"
    class="tree-demo"
  >
    <template #default="{ node, data }">
      <span class="tree-slots-demo">
        <span>{{ node.label }}</span>
        <span>
          <ivue-button status="success" @click="append(data)">添加</ivue-button>
          <ivue-button status="error" @click="remove(node, data)"
            >删除</ivue-button
          >
        </span>
      </span>
    </template>
  </ivue-tree>
</template>

<script setup>
import { ref } from 'vue';
import { IvueButton } from 'ivue-material-plus';

const data = ref([
  {
    id: 1,
    label: '哆啦A梦',
    children: [
      {
        id: 2,
        label: '铜锣烧饼',
      },
      {
        id: 3,
        label: '害怕老鼠',
      },
    ],
  },
  {
    id: 4,
    label: '野比大雄',
  },
]);

const customClass = (data) => {
  if (data.label === '铜锣烧饼') {
    return 'primary';
  }
  return null;
};

const renderContent = (h, { node, data }) => {
  return h(
    'div',
    {
      class: 'tree-slots-demo',
    },
    h('span', null, node.label),
    h(
      'span',
      null,
      h(
        IvueButton,
        {
          status: 'success',
          onClick: () => append(data),
        },
        {
          default: () => '添加',
        }
      ),
      h(
        IvueButton,
        {
          status: 'error',
          onClick: () => remove(node, data),
        },
        {
          default: () => '删除',
        }
      )
    )
  );
};

let id = 1000;

const append = (value) => {
  const newChild = { id: id++, label: 'test', children: [] };

  if (!value.children) {
    value.children = [];
  }

  value.children.push(newChild);
  data.value = [...data.value];
};

const remove = (node, value) => {
  const parent = node.parent;
  const children = parent.data.children || parent.data;
  const index = children.findIndex((d) => d.id === value.id);

  children.splice(index, 1);
  data.value = [...data.value];
};
</script>

<style>
.tree-demo .ivue-tree-node {
  border-radius: 4px;
}

.tree-slots-demo {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.tree-slots-demo button {
  height: 30px;
  margin: 2px 10px;
}

.tree-slots-demo span {
  margin-left: 10px;
}

.tree-demo .ivue-tree-node--content {
  height: auto;
}
</style>
