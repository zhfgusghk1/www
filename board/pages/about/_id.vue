<template>
    <v-container>
        <v-container>
            <v-row>
                <v-text-field
                    label="제목"
                    solo
                    filled
                    v-model="list.title"
                    maxlength="50"
                >
                </v-text-field>
            </v-row>
        </v-container>
        <v-container>
             <v-row>
                <v-textarea
                    label="내용"
                    filled
                    v-model="list.context"
                    maxlength="1000"
                    height="350"
                >
                </v-textarea>
            </v-row>
        </v-container>
        <v-container>
            <v-layout justify-center>
                <v-btn color="secondary" @click="homeClick">목록</v-btn>
                <v-btn color="secondary" @click="modifyClick">저장</v-btn>
                <v-btn color="secondary" @click="deletelClick">삭제</v-btn>
            </v-layout>
        </v-container>
    </v-container>
</template>

<script>

    export default {
        
        asyncData({app,params,store}) {
            return {
                list: store.getters['board/getList'](params.id)
            }
        },
        methods: {
            modifyClick() {
                this.$store.commit('board/modify', this.list);
                this.$router.push('/');
            },
            homeClick() {
                this.$router.push('/');
            },
            deletelClick() {
                this.$store.commit('board/delete', this.list);
                this.$router.push('/');
            }
        }
    }
</script>