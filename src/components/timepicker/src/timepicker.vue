<template>
  <div
    class="timepicker control"
    :class="[size, {'is-expanded': expanded}]"
  >
    <s-dropdown
      v-if="!isMobile || inline"
      ref="dropdown"
      :position="position"
      :disabled="disabled"
      :inline="inline"
    >
      <s-input
        v-if="!inline"
        ref="input"
        slot="trigger"
        autocomplete="off"
        :value="formatValue(computedValue)"
        :placeholder="placeholder"
        :size="size"
        :icon="icon"
        :icon-pack="iconPack"
        :loading="loading"
        :disabled="disabled"
        :readonly="!editable"
        :rounded="rounded"
        v-bind="$attrs"
        :use-html5-validation="useHtml5Validation"
        @keyup.native.enter="toggle(true)"
        @change.native="onChange($event.target.value)"
        @focus="handleOnFocus"
        @blur="onBlur() && checkHtml5Validity()"
      />

      <s-dropdown-item
        :disabled="disabled"
        custom
      >
        <s-field
          grouped
          position="is-centered"
        >
          <s-select
            v-model="hoursSelected"
            :disabled="disabled"
            placeholder="00"
            @change.native="onHoursChange($event.target.value)"
          >
            <option
              v-for="hour in hours"
              :key="hour.value"
              :value="hour.value"
              :disabled="isHourDisabled(hour.value)"
            >
              {{ hour.label }}
            </option>
          </s-select>
          <span class="control is-colon">:</span>
          <s-select
            v-model="minutesSelected"
            :disabled="disabled"
            placeholder="00"
            @change.native="onMinutesChange($event.target.value)"
          >
            <option
              v-for="minute in minutes"
              :key="minute.value"
              :value="minute.value"
              :disabled="isMinuteDisabled(minute.value)"
            >
              {{ minute.label }}
            </option>
          </s-select>
          <template v-if="enableSeconds">
            <span class="control is-colon">:</span>
            <s-select
              v-model="secondsSelected"
              :disabled="disabled"
              placeholder="00"
              @change.native="onSecondsChange($event.target.value)"
            >
              <option
                v-for="second in seconds"
                :key="second.value"
                :value="second.value"
                :disabled="isSecondDisabled(second.value)"
              >
                {{ second.label }}
              </option>
            </s-select>
          </template>
          <s-select
            v-if="!isHourFormat24"
            v-model="meridienSelected"
            :disabled="disabled"
            @change.native="onMeridienChange($event.target.value)"
          >
            <option
              v-for="meridien in meridiens"
              :key="meridien"
              :value="meridien"
            >
              {{ meridien }}
            </option>
          </s-select>
        </s-field>

        <footer
          v-if="$slots.default !== undefined && $slots.default.length"
          class="timepicker-footer"
        >
          <slot />
        </footer>
      </s-dropdown-item>
    </s-dropdown>

    <s-input
      v-else
      ref="input"
      type="time"
      :step="nativeStep"
      autocomplete="off"
      :value="formatHHMMSS(computedValue)"
      :placeholder="placeholder"
      :size="size"
      :icon="icon"
      :icon-pack="iconPack"
      :loading="loading"
      :max="formatHHMMSS(maxTime)"
      :min="formatHHMMSS(minTime)"
      :disabled="disabled"
      :readonly="false"
      v-bind="$attrs"
      :use-html5-validation="useHtml5Validation"
      @change.native="onChange($event.target.value)"
      @focus="handleOnFocus"
      @blur="onBlur() && checkHtml5Validity()"
    />
  </div>
</template>

<script>
import TimepickerMixin from '../../../utils/TimepickerMixin'
import Dropdown from '../../dropdown'
import DropdownItem from '../../dropdown-item'
import Input from '../../input'
import Field from '../../field'
import Select from '../../select'
import Icon from '../../icon'

export default {
  name: 'STimepicker',
  components: {
    [Input.name]: Input,
    [Field.name]: Field,
    [Select.name]: Select,
    [Icon.name]: Icon,
    [Dropdown.name]: Dropdown,
    [DropdownItem.name]: DropdownItem
  },
  mixins: [TimepickerMixin],
  inheritAttrs: false,
  data () {
    return {
      _isTimepicker: true
    }
  },
  computed: {
    nativeStep () {
      if (this.enableSeconds) {
        return '1'
      }
      return '0'
    }
  }
}
</script>
