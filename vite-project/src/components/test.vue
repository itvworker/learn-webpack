<template>
    <div class="title" @click="alert">
        {{title}}
    </div>
</template>
<script>
export default {
    data() {
        return {
            title:'你是哪一位'
        }
    },
    methods:{
        alert() {
            alert('www')
        }
    }
}
</script>