import { t } from 'element-ui/src/locale';

export default {
  methods: {
    t(...args) {
      return t.apply(this, args);
    },
    t_p(propName) {
      const key = this.$attrs[propName + '-t'];
      return !key ? (this[propName] || this.$attrs[propName]) : this.t(key);
    }
  }
};
