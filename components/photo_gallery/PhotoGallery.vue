<template>
    <div class="gallery">
        <!-- pass currently chosen main photo src using its index -->
        <Icon :type='icons.LEFT_ARROW' @click="selectPreviousPhoto"/>
        <MainPhoto :photoSrc="photos[currentMainPhotoIndex]"/>
        <Icon :type='icons.RIGHT_ARROW' @click='selectNextPhoto'/>
        <div class="image-bar" >
            <!-- for each source create a photo, pass it and its index to the component, add selected css class if its the currently selected one -->
            <SmallerPhoto v-for="(photo, index) in photos" :key="index" 
                :photoSrc="photo" v-on:choose-photo="selectMainPhoto" 
                :photoIndex="index" :class="{selected: currentMainPhotoIndex==index}"/>
        </div>
    </div>
</template>
<script>
import MainPhoto from './MainPhoto.vue';
import SmallerPhoto from './SmallerPhoto.vue';
import Icon from '../icon/Icon.vue';
import IconTypes from '../icon/IconTypes';


export default {
    components: { SmallerPhoto, MainPhoto, Icon },
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
            currentMainPhotoIndex: 0,
            icons: IconTypes,
        }
    },
    methods: {
        selectMainPhoto: function (newIndex) {
            // console.log("small photo passed new index: "+ newIndex)
            this.currentMainPhotoIndex = newIndex;
        },
        selectNextPhoto: function () {
            this.currentMainPhotoIndex = (this.currentMainPhotoIndex + 1) % this.photos.length;
        },
        selectPreviousPhoto: function () {
            this.currentMainPhotoIndex = (this.currentMainPhotoIndex - 1 + this.photos.length) % this.photos.length;
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