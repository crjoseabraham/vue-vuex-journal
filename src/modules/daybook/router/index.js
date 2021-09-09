export default {
  name: 'daybook',
  component: () =>
    import(
      /* webpackChunkName: "daybook" */ '@/modules/daybook/layouts/DayBookLayout.vue'
    ),
  children: [
    {
      path: '',
      name: 'no-entry',
      component: () =>
        import(
          /* webpackChunkName: "daybook-no-entry" */ '@/modules/daybook/views/NoEntrySelected.vue'
        ),
    },
    {
      path: ':id',
      name: 'view-entry',
      component: () =>
        import(
          /* webpackChunkName: "daybook-view-entry" */ '@/modules/daybook/views/EntryView.vue'
        ),
    },
  ],
}
