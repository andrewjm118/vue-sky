<template>
  <div>
    <Example
      :component="ExSimple"
      :code="ExSimpleCode"
    >
      <p>要显示数据表非常简单, 只需要一个<code>data</code> and  <code>columns</code> prop.</p>
    </Example>

    <Example
      :component="ExSandbox"
      :code="ExSandboxCode"
      title="自定义模板"
    >
      <p>自定义列的显示内容，可组合其他组件使用。</p>
      <p>可以设置一个空插槽显示empty内容</p>
    </Example>

    <Example
      :component="ExSelection"
      :code="ExSelectionCode"
      title="选中项"
    >
      <p>
        您可以通过将相应的对象传递给<code>selected</code>来显示单个选中的行。
      </p>
      <p>此外，添加.sync修饰符将使其双向绑定—如果用户单击row，所选对象将发生变化。</p>
    </Example>

    <Example
      :component="ExCheckable"
      :code="ExCheckableCode"
      title="复选框"
    >
      <p>您可以使用<code>checkable</code>将复选框添加到行中。</p>
      <p>
        为了显示哪些行被选中，您必须将相应的对象数组传递给被选中的行。
      </p>
      <p>
        添加同步修饰符将使其双向绑定——如果用户单击复选框，选中的对象数组将发生变化。
      </p>
      <p>只要表格有复选框或分页的，就会有一个左下角的槽<code>bottom-left</code>，您可以在其中添加任何内容。</p>
    </Example>

    <Example
      :component="ExPaginationSort"
      :code="ExPaginationSortCode"
      title="分页和排序"
    >
      <p>列排序添加 <code>sortable</code> 在属性 <code>field</code> name.</p>
      <p>您还可以使用default-sort来确定默认的排序列和顺序。该列必须是可排序的。</p>
      <p>可以设置<code>default-sort-direction</code>来确定第一次单击时的默认排序列方向。</p>
      <p>只要表格可检索或分页的，就会有一个左下角的槽<code>bottom-left</code>，您可以在其中添加任何内容。</p>
    </Example>

    <Example
      :component="ExDetailedRow"
      :code="ExDetailedRowCode"
      title="详情行"
    >
      <p>You can have detailed rows by adding a <code>detail</code> named scoped slot and the <code>detailed</code> prop.</p>
      <p> You can also toggle row detail programmatically using <code>toggleDetails</code> method and <code>:show-detail-icon="false"</code> if you want to hide chevron icon.</p>
    </Example>

    <Example
      :component="ExCustomDetailedRow"
      :code="ExCustomDetailedRowCode"
      title="Custom Detailed rows"
    >
      <p>You can add anything you like into the <code>detail</code> named scoped by providing the <code>customDetailRow</code> prop to the table.</p>
      <s-message type="is-warning">
        Be cautious when using a custom detailed row and toggling the display of columns,
        as you will have to manage either the content within (with <code>colspan</code>) or the columns themselves dependent on the content displayed.
      </s-message>
    </Example>

    <Example
      :component="ExRowStatus"
      :code="ExRowStatusCode"
      title="Row status"
    >
      <p>Use the <code>row-class</code> prop to return a class name. It's a function that receives <code>row</code> and <code>index</code> parameters.</p>
      <p>Note that <strong>you have to style the class yourself</strong>.</p>
    </Example>

    <Example
      :component="ExCustomHeaders"
      :code="ExCustomHeadersCode"
      title="Custom headers"
    >
      <p>
        By adding a scoped slot named <code>header</code> in table component you can customize the headers.
        Use the <code>meta</code> prop on column to pass anything you may need.
      </p>
      <p>
        Previous scoped slot named <code>header</code> in table will be deprecated.
      </p>
    </Example>

    <Example
      :component="ExToggleColumns"
      :code="ExToggleColumnsCode"
      title="Toggle columns"
    >
      <s-message type="is-danger">
        Always use the <code>visible</code> prop to hide/show columns, and <strong>NOT</strong> <code>v-if</code> or <code>v-show</code>.
      </s-message>
    </Example>

    <Example
      :component="ExFooter"
      :code="ExFooterCode"
      title="Footer"
    />

    <Example
      :component="ExAsyncData"
      :code="ExAsyncDataCode"
      title="Async data"
    >
      <p>
        Use <code>backend-sorting</code> and <code>backend-pagination</code> props to let those tasks to the backend,
        then manage it with <code>page-change</code> and <code>sort</code> events.
      </p>
      <p>
        <small>API from <a
          href="https://www.themoviedb.org"
          target="_blank"
        >TMDb</a>.</small>
      </p>
    </Example>

    <Example
      :component="ExDraggableRows"
      :code="ExDraggableRowsCode"
      title="Draggable rows"
    >
      <p>
        Use <code>draggable</code> prop to allow rows to be draggable. Manage dragging using <code>dragstart</code>,
        <code>dragover</code> and <code>drop</code> events
      </p>
    </Example>

    <ApiView :data="api" />
  </div>
</template>

<script>
import api from './api/table'

import ExSimple from './examples/ExSimple'
import ExSimpleCode from '!!raw-loader!./examples/ExSimple'

import ExSandbox from './examples/ExSandbox'
import ExSandboxCode from '!!raw-loader!./examples/ExSandbox'

import ExSelection from './examples/ExSelection'
import ExSelectionCode from '!!raw-loader!./examples/ExSelection'

import ExCheckable from './examples/ExCheckable'
import ExCheckableCode from '!!raw-loader!./examples/ExCheckable'

import ExPaginationSort from './examples/ExPaginationSort'
import ExPaginationSortCode from '!!raw-loader!./examples/ExPaginationSort'

import ExDetailedRow from './examples/ExDetailedRow'
import ExDetailedRowCode from '!!raw-loader!./examples/ExDetailedRow'

import ExCustomDetailedRow from './examples/ExCustomDetailedRow'
import ExCustomDetailedRowCode from '!!raw-loader!./examples/ExCustomDetailedRow'

import ExRowStatus from './examples/ExRowStatus'
import ExRowStatusCode from '!!raw-loader!./examples/ExRowStatus'

import ExCustomHeaders from './examples/ExCustomHeaders'
import ExCustomHeadersCode from '!!raw-loader!./examples/ExCustomHeaders'

import ExToggleColumns from './examples/ExToggleColumns'
import ExToggleColumnsCode from '!!raw-loader!./examples/ExToggleColumns'

import ExFooter from './examples/ExFooter'
import ExFooterCode from '!!raw-loader!./examples/ExFooter'

import ExAsyncData from './examples/ExAsyncData'
import ExAsyncDataCode from '!!raw-loader!./examples/ExAsyncData'

import ExDraggableRows from './examples/ExDraggableRows'
import ExDraggableRowsCode from '!!raw-loader!./examples/ExDraggableRows'

export default {
  data () {
    return {
      api,
      ExSimple,
      ExSandbox,
      ExSelection,
      ExCheckable,
      ExPaginationSort,
      ExDetailedRow,
      ExCustomDetailedRow,
      ExRowStatus,
      ExCustomHeaders,
      ExToggleColumns,
      ExFooter,
      ExAsyncData,
      ExSimpleCode,
      ExDraggableRows,
      ExSandboxCode,
      ExSelectionCode,
      ExCheckableCode,
      ExPaginationSortCode,
      ExDetailedRowCode,
      ExCustomDetailedRowCode,
      ExRowStatusCode,
      ExCustomHeadersCode,
      ExToggleColumnsCode,
      ExFooterCode,
      ExAsyncDataCode,
      ExDraggableRowsCode
    }
  }
}
</script>
