'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('posts', [
      {
        id: 1,
        user_id: 1,
        team_name: 'with1',
        introduction: '월급루팡',
        qualification: '누구보다 빠르게 정시퇴근이 가능하신 분',
        period: '2022-05-01 ~ 2022-06-01',
        contact: 'https://github.com/ProjectBYH',
        post_count: 10,
        applicant_count: 1,
        user_applicant: 'https://github.com/realsonya7',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        user_id: 2,
        team_name: 'with2',
        introduction: '월급루팡',
        qualification: '누구보다 빠르게 정시퇴근이 가능하신 분',
        period: '2022-05-01 ~ 2022-06-02',
        contact: 'https://github.com/realsonya7',
        post_count: 20,
        applicant_count: 1,
        user_applicant: 'https://github.com/sowookim',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        user_id: 3,
        team_name: 'with3',
        introduction: '월급루팡',
        qualification: '누구보다 빠르게 정시퇴근이 가능하신 분',
        period: '2022-05-01 ~ 2022-06-03',
        contact: 'https://github.com/sowookim',
        post_count: 30,
        applicant_count: 1,
        user_applicant: 'https://github.com/plutio1592',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        user_id: 4,
        team_name: 'with4',
        introduction: '월급루팡',
        qualification: '누구보다 빠르게 정시퇴근이 가능하신 분',
        period: '2022-05-01 ~ 2022-06-04',
        contact: 'https://github.com/plutio1592',
        post_count: 40,
        applicant_count: 1,
        user_applicant: 'https://github.com/test1',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('posts', null, {});
  }
};
