import { reactive } from "vue";

const state = reactive({
  current: null,
  loading: true,
  model: null,
  nextPage: "",
  prevPage: "",
  query: {},
  queryset: [],
});

export default state;
