//教育厅  石献雷
// import Education from '@/pages/ProjectPhaseOne/Education/Putonghua/education'
// //云南普通话水平测试成绩等级查询Education
// import Putonghua from '@/pages/ProjectPhaseOne/Education/Putonghua/Putonghua'
// //云南普通话水平测试成绩等级查询结果页query_result
// import pthqueryresult from '@/pages/ProjectPhaseOne/Education/Putonghua/queryresult'
// //普通高考成绩查询
// import ExaminationScore from '@/pages/ProjectPhaseOne/Education/ExaminationScore'
// import examScoreResult from '@/pages/ProjectPhaseOne/Education/ExaminationScore/examScoreResult'
// //高级教师资格证笔试成绩查询
// import teacherScore from '@/pages/ProjectPhaseOne/Education/TeacherScore'
// import teacherScoreResult from '@/pages/ProjectPhaseOne/Education/TeacherScore/teacherScoreResult'
// //普高录取查询
// import examAdmission from '@/pages/ProjectPhaseOne/Education/ExamAdmission'
// import examAdmissionResult from '@/pages/ProjectPhaseOne/Education/ExamAdmission/examAdmissionResult'
// //高考英语听力成绩查询
// import englishListen from '@/pages/ProjectPhaseOne/Education/EnglishListen'
// import englishListenScore from '@/pages/ProjectPhaseOne/Education/EnglishListen/EnglishListenScore'
// //硕士研究生初试成绩查询
// import graduateExam from '@/pages/ProjectPhaseOne/Education/GraduateExam'
// import graduateExamScore from '@/pages/ProjectPhaseOne/Education/GraduateExam/GraduateExamScore'
// //中职、五年制高职招生录取查询
// import proHighAdmission from '@/pages/ProjectPhaseOne/Education/ProHighAdmission'
// import proHighAdmissionResult from '@/pages/ProjectPhaseOne/Education/ProHighAdmission/ProHighAdmissionResult'
// //自学考试成绩查询
// import selfExamScore from '@/pages/ProjectPhaseOne/Education/SelfExamScore'
// import selfExamScoreResult from '@/pages/ProjectPhaseOne/Education/SelfExamScore/SelfExamScoreResult'
// //云南省成人高考成绩查询
// import adultExamScore from '@/pages/ProjectPhaseOne/Education/AdultExamScore'
// import adultExamScoreResult from '@/pages/ProjectPhaseOne/Education/AdultExamScore/AdultExamScoreResult'
// //云南省成人高考录取结果查询
// import adultExamAdmit from '@/pages/ProjectPhaseOne/Education/AdultExamAdmission'
// import adultExamAdmitResult from '@/pages/ProjectPhaseOne/Education/AdultExamAdmission/AdultExamAdmitResult'
const jyt = [
    {
        path: '/Education',
        name: 'Education', //普通话水平测试成绩等级查询1
        component: resolve => require(['@/pages/ProjectPhaseOne/Education/Putonghua/education'],resolve),
      meta: {
        keepAlive: true // 需要被缓存
      },
        children: [{
            path: '/Putonghua',
            name: 'Putonghua',
            component: resolve => require(['@/pages/ProjectPhaseOne/Education/Putonghua/Putonghua'],resolve),
      meta: {
        keepAlive: true // 需要被缓存
      },
        }]
    },
    {
        path: '/pthqueryresult',
        name: 'pthqueryresult', //普通话水平测试成绩等级查询2
        component: resolve => require(['@/pages/ProjectPhaseOne/Education/Putonghua/queryresult'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      },
    },
    {
        path: '/ExaminationScore',
        name: 'ExaminationScore',
        component: resolve => require(['@/pages/ProjectPhaseOne/Education/ExaminationScore'],resolve),
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
        path: '/examScoreResult',
        name: 'examScoreResult',
        component: resolve => require(['@/pages/ProjectPhaseOne/Education/ExaminationScore/examScoreResult'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
        path: '/teacherScore',
        name: 'teacherScore',
        component: resolve => require(['@/pages/ProjectPhaseOne/Education/TeacherScore'],resolve),
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
        path: '/teacherScoreResult',
        name: 'teacherScoreResult',
        component: resolve => require(['@/pages/ProjectPhaseOne/Education/TeacherScore/teacherScoreResult'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
        path: '/examAdmission',
        name: 'examAdmission',
        component: resolve => require(['@/pages/ProjectPhaseOne/Education/ExamAdmission'],resolve),
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
        path: '/examAdmissionResult',
        name: 'examAdmissionResult',
        component: resolve => require(['@/pages/ProjectPhaseOne/Education/ExamAdmission/examAdmissionResult'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
        path: '/englishListen',
        name: 'englishListen',
        component: resolve => require(['@/pages/ProjectPhaseOne/Education/EnglishListen'],resolve),
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
        path: '/englishListenScore',
        name: 'englishListenScore',
        component: resolve => require(['@/pages/ProjectPhaseOne/Education/EnglishListen/EnglishListenScore'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
        path: '/graduateExam',
        name: 'graduateExam',
        component: resolve => require(['@/pages/ProjectPhaseOne/Education/GraduateExam'],resolve),
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
        path: '/graduateExamScore',
        name: 'graduateExamScore',
        component: resolve => require(['@/pages/ProjectPhaseOne/Education/GraduateExam/GraduateExamScore'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
        path: '/proHighAdmission',
        name: 'proHighAdmission',
        component: resolve => require(['@/pages/ProjectPhaseOne/Education/ProHighAdmission'],resolve),
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
        path: '/proHighAdmissionResult',
        name: 'proHighAdmissionResult',
        component: resolve => require(['@/pages/ProjectPhaseOne/Education/ProHighAdmission/ProHighAdmissionResult'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
        path: '/selfExamScore',
        name: 'selfExamScore',
        component: resolve => require(['@/pages/ProjectPhaseOne/Education/SelfExamScore'],resolve),
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
        path: '/selfExamScoreResult',
        name: 'selfExamScoreResult',
        component: resolve => require(['@/pages/ProjectPhaseOne/Education/SelfExamScore/SelfExamScoreResult'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
        path: '/adultExamScore',
        name: 'adultExamScore',
        component: resolve => require(['@/pages/ProjectPhaseOne/Education/AdultExamScore'],resolve),
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
        path: '/adultExamScoreResult',
        name: 'adultExamScoreResult',
        component: resolve => require(['@/pages/ProjectPhaseOne/Education/AdultExamScore/AdultExamScoreResult'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
        path: '/adultExamAdmit',
        name: 'adultExamAdmit',
        component: resolve => require(['@/pages/ProjectPhaseOne/Education/AdultExamAdmission'],resolve),
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
        path: '/adultExamAdmitResult',
        name: 'adultExamAdmitResult',
        component: resolve => require(['@/pages/ProjectPhaseOne/Education/AdultExamAdmission/AdultExamAdmitResult'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
]
export default jyt