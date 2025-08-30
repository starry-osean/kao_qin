
import { defineStore } from 'pinia';

export const userInforStore = defineStore('user', {
  state: () => ({
    StudentID: '',
    token: '',
    grade: ''
  }),
  actions: {
    setUserInfo(userInfo: { StudentID: string; token: string; grade: string }) {
      this.StudentID = userInfo.StudentID;
      this.token = userInfo.token;
      this.grade = userInfo.grade;
    },
    clearUserInfo() {
      this.StudentID = '';
      this.token = '';
      this.grade = '';
    }
  }
});