<template>
    <div class="gallery">
        <MainPhoto :photoSrc="photos[currentMainPhotoIndex]"/>
        <!-- <MainPhoto :photoSrc="'https://www.si.com/.image/t_share/MTY4MTg2MDIyNzgyODM4MDMz/1988-michael-jordan-001238167_0jpg.jpg'"/> -->
        <div class="image-bar" >
            <SmallerPhoto v-for="(photo, index) in photos" :key="index" :photoSrc="photo" v-on:choose-photo="selectMainPhoto" :photoIndex="index"/>
        </div>
    </div>
</template>
<script>
import MainPhoto from './MainPhoto.vue';
import SmallerPhoto from './SmallerPhoto.vue';

export default {
    components: { SmallerPhoto, MainPhoto },
    data() {
        return {
            photos: [
                //mj
                'https://www.si.com/.image/t_share/MTY4MTg2MDIyNzgyODM4MDMz/1988-michael-jordan-001238167_0jpg.jpg',
                //kobe
                'https://s22928.pcdn.co/wp-content/uploads/2018/11/Kobe-Bryant-Dwight-Howard.jpg',
                //magic
                'https://i.pinimg.com/originals/5b/91/f4/5b91f422bc242617561353e4c69d9089.jpg',
                //hakeem
                'https://external-preview.redd.it/5Cs_oiUI0MvWSqJwg3XDBS6Ql4DIn3HUopp9j_9-sFk.jpg?auto=webp&s=1386b65d0839332e2288c3ba07f78d43233e1955',
                //lebron
                'https://cloudfront-us-east-1.images.arcpublishing.com/advancelocal/HBKN5UMTDZGJDL2ZRCBBBUFBEQ.jpg',
            ],
            currentMainPhotoIndex: 0 
        }
    },
    methods: {
        selectMainPhoto: function (newIndex) {
            console.log("small photo passed new index: "+ newIndex)
            this.currentMainPhotoIndex = newIndex;
        }
    }
}
</script>
<style lang="scss" scoped>
    .gallery {
        min-width: 300px;
        min-height: 200px;
        background-color: $secondary;
        // background-color: gray;
        display: flex;
        flex-wrap: wrap;
        max-width: 50%;
        justify-content: center;
    }
    .image-bar{
        margin: 20px 0px;
        border: 3px solid black;
        display: flex;
        max-width: 85%;
        flex-wrap: wrap;
        // align-items: center;
        // align-content: center;
        justify-content: space-evenly;

        padding: 10px;
    }
</style>