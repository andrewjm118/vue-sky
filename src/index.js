import Alert from './components/alert'
import Icon from './components/icon'
import Button from './components/button'
import Checkbox from './components/checkbox'
import Radio from './components/radio'
import Switch from './components/switch'
import Tag from './components/tag'
import TagList from './components/tag-list'
import Input from './components/input'
import Field from './components/field'
import Select from './components/select'
import Loading from './components/loading'
import Dropdown from './components/dropdown'
import DropdownItem from './components/dropdown-item'
import Pagination from './components/pagination'
import Table from './components/table'
import TableColumn from './components/table-column'
import Tabs from './components/tabs'
import TabItem from './components/tab-item'
const components = {
  Alert,
  Icon,
  Button,
  Checkbox,
  Radio,
  Switch,
  Tag,
  TagList,
  Input,
  Field,
  Select,
  Loading,
  Dropdown,
  DropdownItem,
  Pagination,
  Table,
  TableColumn,
  Tabs,
  TabItem
}

function install (Vue) {
  for (const item in components) {
    if (components[item].name) {
      Vue.component(components[item].name, components[item])
    }
  }
}

/**
 * Global Install
 */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  ...components
}
