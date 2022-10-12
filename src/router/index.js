import Vue from 'vue'
import Router from 'vue-router'
import speakerIndex from '@/components/Speaker/Index'
import speakerEdit from '@/components/Speaker/EditSpeaker'
import speakerShow from '@/components/Speaker/ShowSpeaker'
import speakerCreate from '@/components/Speaker/CreateSpeaker'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/speaker/create',
      name: 'speaker-create',
      component: speakerCreate
    },
    {
      path: '/speaker/edit/:speakerId',
      name: 'speaker-edit',
      component: speakerEdit
    },
    {
      path: '/speaker/:speakerId',
      name: 'speaker',
      component: speakerShow
    },
    {
      path: '/speaker',
      name: 'speaker',
      component: speakerIndex
    },

    

  ]
})
