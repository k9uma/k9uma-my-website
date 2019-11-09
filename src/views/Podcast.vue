<template>
    <b-container>
        <b-card title="CodeCast" sub-title="A technology podcast recording from Lusaka Zambia"> <!--TODO: Add Flag of Zambia -->
            <PodcastEpisodes/>
        </b-card>
    </b-container>
</template>

<script>
    import Axios from 'axios';
    import PodcastEpisodes from "@/components/PodcastEpisodes";

    export default {
        data() {
            return {
                
            }
        },
        components: {
            PodcastEpisodes
        }

    }
</script>

<style>

</style>