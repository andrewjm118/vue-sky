import Alert from './components/alert'
import Icon from './components/icon'
import Button from './components/button'
import Checkbox from './components/checkbox'
import CheckboxGroup from './components/checkbox-group'
import Radio from './components/radio'
import RadioButton from './components/radio-button'
import Switch from './components/switch'
import Message from './components/message'
import Tag from './components/tag'
import TagList from './components/tag-list'
import Input from './components/input'
import Field from './components/field'
import Select from './components/select'
import Dropdown from './components/dropdown'
import DropdownItem from './components/dropdown-item'
import Pagination from './components/pagination'
import Table from './components/table'
import TableColumn from './components/table-column'
import Tabs from './components/tabs'
import TabItem from './components/tab-item'
import Tooltip from './components/tooltip'
import Affix from './components/affix'
import Scrollbar from './components/scrollbar'
import Form from './components/form'
import FormItem from './components/form-item'
import Datepicker from './components/datepicker'
import DatepickerTable from './components/datepicker-table'
import DatepickerMonth from './components/datepicker-month'
import DatepickerTableRow from './components/datepicker-table-row'
import Datetimepicker from './components/datetimepicker'
import Skeleton from './components/skeleton'
import Tree from './components/tree'
import Sidebar from './components/sidebar'
import Modal from './components/modal'
import Progress from './components/progress'
import { Notification, NotificationProgrammatic } from './components/notification'
import { Loading, LoadingProgrammatic } from './components/loading'

const components = {
  Datepicker,
  DatepickerTable,
  DatepickerMonth,
  DatepickerTableRow,
  Datetimepicker,
  Alert,
  Icon,
  Button,
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioButton,
  Switch,
  Message,
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
  TabItem,
  Tooltip,
  Affix,
  Scrollbar,
  Notification,
  Form,
  FormItem,
  Skeleton,
  Tree,
  Sidebar,
  Modal,
  Progress
}

function install (Vue) {
  for (const item in components) {
    if (components[item].name) {
      Vue.component(components[item].name, components[item])
    }
  }
  Vue.prototype.$notify = NotificationProgrammatic
  Vue.prototype.$loading = LoadingProgrammatic
}

/**
 * Global Install
 */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version: '1.0.0',
  install,
  ...components
}
