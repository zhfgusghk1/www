<template>
    <v-container>
        <v-container>
                <v-text-field
                    label="제목"
                    solo
                    filled
                    v-model="title"
                    maxlength="50"
                >
                </v-text-field>
        </v-container>
        <v-container>
                <v-textarea
                    label="내용"
                    filled
                    hint="내용을 입력해주세요"
                    v-model="context"
                    maxlength="1000"
                    height="350"
                >
                </v-textarea>
        </v-container>
        <v-layout justify-center>
            <v-btn color="secondary" @click="saveClick">저장</v-btn>
            <v-btn color="secondary" @click="cancelClick">취소</v-btn>
        </v-layout>
    </v-container>
</template>

<script>

    export default {
        
        methods: {
            saveClick() {
                let resultObj = {
                    title: this.title,
                    context: this.context
                }
                this.$store.commit('board/add', resultObj);
                this.$router.push('/');
            },
            cancelClick() {
                this.$router.push('/');
            }
        },
        data(){
            return {
                title : '',
                context : ''
            }
        },
    }
</script>