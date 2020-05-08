<template>
  <s-tree
    v-model="ids"
    :tree-data="treeData"
    :options="options"
  />
</template>

<script>
export default {
  data () {
    return {
      ids: [4],
      options: {
        label: 'label',
        checkbox: true,
        checkedOpen: true,
        folderBold: true,
        idsWithParent: true,
        depthOpen: 2,
        openIcon: 'fa fa-angle-right',
        closeIcon: 'fa fa-angle-down',
        halfCheckedIcon: 'minus-box-outline',
        checkedIcon: 'check-box-outline',
        uncheckedIcon: 'checkbox-blank-outline'
      },
      message: [],
      treeData: [{
        label: '根目录[1]',
        id: 1,
        children: [
          {
            label: '一级节点[4]',
            id: 4,
            children: [
              {
                label: '二级节点[5]',
                id: 5,
                children: [
                  { label: '三级节点[6]', id: 6 },
                  { label: '三级节点[8]', id: 8 },
                  { label: '三级节点[30]', id: 30 },
                  {
                    label: '三级节点[31]',
                    id: 31,
                    children: [
                      { label: '四级节点[36]', id: 36 },
                      { label: '四级节点[38]', id: 38 },
                      { label: '四级节点[39]', id: 39 },
                      { label: '四级节点[48]', id: 48 }
                    ]
                  }
                ]
              },
              { label: '二级节点[9]', id: 9 },
              { label: '二级节点[10]', id: 10 },
              {
                label: '二级节点[11]',
                id: 11,
                children: [
                  { label: '三级节点[12]', id: 12 },
                  { label: '三级节点[13]', id: 13 },
                  {
                    label: '三级节点[14]',
                    id: 14,
                    children: [
                      { label: '四级节点[15]', id: 15 },
                      { label: '四级节点[16]', id: 16 },
                      { label: '四级节点[17]', id: 17 },
                      { label: '四级节点[18]', id: 18 },
                      {
                        label: '四级节点[19]',
                        id: 19,
                        children: [
                          { label: '五级节点[20]', id: 20 },
                          { label: '五级节点[21]', id: 21 },
                          { label: '五级节点[22]', id: 22 },
                          { label: '五级节点[23]', id: 23 },
                          { label: '五级节点[24]', id: 24 }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          { label: '一级节点[2]', id: 2 },
          {
            label: '一级节点[59]',
            id: 59,
            children: [
              { label: '二级节点[60]', id: 60 },
              { label: '二级节点[61]', id: 61 },
              { label: '二级节点[62]', id: 62 },
              { label: '二级节点[63]', id: 63 },
              { label: '二级节点[64]', id: 64 }
            ]
          },
          { label: '一级节点[3]', id: 3 }
        ]
      },
      {
        label: '根目录[99]',
        id: 99,
        children: [
          { label: '二级节点[70]', id: 70 },
          { label: '二级节点[71]', id: 71 },
          { label: '二级节点[72]', id: 72 },
          { label: '二级节点[73]', id: 73 },
          {
            label: '二级节点[74]',
            id: 74,
            children: [
              { label: '三级节点[82]', id: 82 },
              { label: '三级节点[83]', id: 83 }
            ]
          }
        ]
      }]
    }
  }

}
</script>

<style>

</style>
