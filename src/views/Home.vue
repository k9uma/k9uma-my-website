<template>
  <div>
    <b-jumbotron bg-variant="info" text-variant="white" border-variant="dark">
      <template v-slot:header>
        <h1 class="text-center">ABOUT ME</h1>
      </template>

      <template v-slot:lead>
        <b-container class="bv-example-row">
          <b-row>
            <b-col lg="4" md="6" sm="12">
              <b-card
              title="Software Engineer"
              img-src="/img/software.jpg"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2"
              bg-variant="info" text-variant="white" border-variant="dark"
              >
                <b-card-text>
                  I <font-awesome-icon icon="heart" /> Laravel <br>Vue.js Champion
                </b-card-text>
              </b-card>  
            </b-col>
            <b-col lg="4" md="6" sm="12">
              <b-card
              title="Podcast Host"
              img-src="/img/podcast.jpg"
              img-alt="Image"
              img-top
              style="max-width: 20rem;"
              class="mb-2"
              bg-variant="info" text-variant="white" border-variant="dark"
              >
                <b-card-text>
                  Content Creation for Technology Enthuisiasts 
                </b-card-text>
              </b-card>  
            </b-col>
            <b-col lg="4" md="6" sm="12">
              <b-card
              title="Technology Evangelist"
              img-src="/img/community.jpg"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2"
              bg-variant="info" text-variant="white" border-variant="dark"
              >
                <b-card-text>
                  Agora Code Community and DevConZM.
                </b-card-text>
              </b-card>  
            </b-col>
          </b-row>
        </b-container>
      </template>

      <hr class="my-4">

      <p class="text-center">
        SCHEDULE A CALL/MEETING WITH ME
      </p>
      <b-container class="bv-example-row">
        <b-row class="text-center">
          <b-col><b-button block variant="dark" @click="scheduleMeeting(15)">For 15 Minutes</b-button></b-col>
          <b-col cols="5"><b-button block variant="dark" @click="scheduleMeeting(30)">For 30 Minutes</b-button></b-col>
          <b-col><b-button block variant="dark" @click="scheduleMeeting(60)">For 60 Minutes</b-button></b-col>
        </b-row>
      </b-container>
      <hr class="my-4">

      <hr class="my-4">

      <p class="text-center">
        MY SOCIALS
      </p>
      <b-container class="bv-example-row">
        <b-row class="text-center">
          <b-col>
          
            <a href="https://www.twitter.com/sour_bones" target="_blank"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }" /></a>
              
          </b-col>
        </b-row>
      </b-container>
      <hr class="my-4">
    </b-jumbotron>
  </div>
</template>

<script>

export default {
  
  name: 'home',
  components: {
    
  },
  methods: {
    scheduleMeeting: function(meeting_time){
      if (meeting_time == 15) {
        window.open("https://calendly.com/kuma-musenge/15min", "_blank")
      } else if (meeting_time == 30){
        window.open("https://calendly.com/kuma-musenge/30min", "_blank");
      } else {
        window.open("https://calendly.com/kuma-musenge/60min", "_blank");
      }
    }
  },
}
</script>
